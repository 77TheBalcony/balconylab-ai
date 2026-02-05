'use client'

import { useRef, useEffect, useMemo } from 'react'
import * as THREE from 'three'

interface Node {
  id: number
  position: THREE.Vector3
  velocity: THREE.Vector3
  connections: number[]
  label: string
}

export default function NeuralNetwork3D() {
  const containerRef = useRef<HTMLDivElement>(null)
  const sceneRef = useRef<THREE.Scene | null>(null)
  const cameraRef = useRef<THREE.PerspectiveCamera | null>(null)
  const rendererRef = useRef<THREE.WebGLRenderer | null>(null)
  const nodesRef = useRef<Node[]>([])
  const mouseRef = useRef({ x: 0, y: 0, raycaster: new THREE.Raycaster() })

  // Generate neural network structure
  const generateNodes = useMemo(() => {
    const nodes: Node[] = []
    const nodeCount = 50
    const labels = [
      'North Star', 'Funnel', 'Growth', 'Analytics', 'AI Agent',
      'Meta Ads', 'TikTok', 'YouTube', 'Instagram', 'WhatsApp',
      'Conversions', 'CTR', 'CAC', 'LTV', 'ROI',
      'Dashboard', 'Real-time', 'Insights', 'Strategy', 'Performance'
    ]

    for (let i = 0; i < nodeCount; i++) {
      const radius = 300 + Math.random() * 200
      const theta = Math.random() * Math.PI * 2
      const phi = Math.random() * Math.PI

      nodes.push({
        id: i,
        position: new THREE.Vector3(
          radius * Math.sin(phi) * Math.cos(theta),
          radius * Math.sin(phi) * Math.sin(theta),
          radius * Math.cos(phi)
        ),
        velocity: new THREE.Vector3(
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2,
          (Math.random() - 0.5) * 0.2
        ),
        connections: [],
        label: labels[i % labels.length]
      })
    }

    // Create connections (each node connects to 2-4 nearest neighbors)
    nodes.forEach((node, i) => {
      const distances = nodes
        .map((n, j) => ({ index: j, distance: node.position.distanceTo(n.position) }))
        .sort((a, b) => a.distance - b.distance)
        .slice(1, 5) // Skip self, get 4 nearest

      node.connections = distances.slice(0, 2 + Math.floor(Math.random() * 3)).map(d => d.index)
    })

    return nodes
  }, [])

  useEffect(() => {
    if (!containerRef.current) return

    // Scene setup
    const scene = new THREE.Scene()
    scene.fog = new THREE.FogExp2(0x050812, 0.0008)
    sceneRef.current = scene

    // Camera
    const camera = new THREE.PerspectiveCamera(
      75,
      window.innerWidth / window.innerHeight,
      1,
      3000
    )
    camera.position.z = 800
    cameraRef.current = camera

    // Renderer
    const renderer = new THREE.WebGLRenderer({ 
      antialias: true, 
      alpha: true,
      powerPreference: 'high-performance'
    })
    renderer.setSize(window.innerWidth, window.innerHeight)
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))
    containerRef.current.appendChild(renderer.domElement)
    rendererRef.current = renderer

    // Nodes (spheres)
    const nodeGeometry = new THREE.SphereGeometry(3, 16, 16)
    const nodeMaterial = new THREE.MeshBasicMaterial({
      color: 0x2D8B6F,
      transparent: true,
      opacity: 0.8
    })

    const nodeMeshes: THREE.Mesh[] = []
    generateNodes.forEach(node => {
      const mesh = new THREE.Mesh(nodeGeometry, nodeMaterial.clone())
      mesh.position.copy(node.position)
      scene.add(mesh)
      nodeMeshes.push(mesh)

      // Glow effect
      const glowGeometry = new THREE.SphereGeometry(5, 16, 16)
      const glowMaterial = new THREE.MeshBasicMaterial({
        color: 0x3FFF9A,
        transparent: true,
        opacity: 0.2
      })
      const glow = new THREE.Mesh(glowGeometry, glowMaterial)
      glow.position.copy(node.position)
      scene.add(glow)
    })

    nodesRef.current = generateNodes

    // Connections (lines)
    const lineMaterial = new THREE.LineBasicMaterial({
      color: 0x2D8B6F,
      transparent: true,
      opacity: 0.3,
      linewidth: 1
    })

    const connections: THREE.Line[] = []
    generateNodes.forEach(node => {
      node.connections.forEach(targetId => {
        const target = generateNodes[targetId]
        const geometry = new THREE.BufferGeometry().setFromPoints([
          node.position,
          target.position
        ])
        const line = new THREE.Line(geometry, lineMaterial)
        scene.add(line)
        connections.push(line)
      })
    })

    // Mouse interaction
    const onMouseMove = (event: MouseEvent) => {
      mouseRef.current.x = (event.clientX / window.innerWidth) * 2 - 1
      mouseRef.current.y = -(event.clientY / window.innerHeight) * 2 + 1
    }

    window.addEventListener('mousemove', onMouseMove)

    // Window resize
    const onResize = () => {
      if (!camera || !renderer) return
      camera.aspect = window.innerWidth / window.innerHeight
      camera.updateProjectionMatrix()
      renderer.setSize(window.innerWidth, window.innerHeight)
    }

    window.addEventListener('resize', onResize)

    // Animation loop
    let animationId: number
    const animate = () => {
      animationId = requestAnimationFrame(animate)

      // Camera parallax (smooth follow mouse)
      camera.position.x += (mouseRef.current.x * 100 - camera.position.x) * 0.05
      camera.position.y += (mouseRef.current.y * 100 - camera.position.y) * 0.05
      camera.lookAt(scene.position)

      // Update nodes (drift + physics)
      nodesRef.current.forEach((node, i) => {
        // Apply velocity (drift)
        node.position.add(node.velocity)

        // Boundary check (sphere constraint)
        const distance = node.position.length()
        if (distance > 600 || distance < 200) {
          node.velocity.multiplyScalar(-0.5)
        }

        // Mouse repel effect
        const mouseVector = new THREE.Vector3(
          mouseRef.current.x * 500,
          mouseRef.current.y * 500,
          0
        )
        const distToMouse = node.position.distanceTo(mouseVector)
        if (distToMouse < 200) {
          const repelForce = node.position.clone().sub(mouseVector).normalize().multiplyScalar(0.5)
          node.velocity.add(repelForce)
        }

        // Damping
        node.velocity.multiplyScalar(0.98)

        // Update mesh position
        if (nodeMeshes[i]) {
          nodeMeshes[i].position.copy(node.position)
        }
      })

      // Update connections
      let connectionIndex = 0
      generateNodes.forEach(node => {
        node.connections.forEach(targetId => {
          const target = generateNodes[targetId]
          if (connections[connectionIndex]) {
            const geometry = new THREE.BufferGeometry().setFromPoints([
              node.position,
              target.position
            ])
            connections[connectionIndex].geometry.dispose()
            connections[connectionIndex].geometry = geometry
            connectionIndex++
          }
        })
      })

      // Rotate entire scene slowly
      scene.rotation.y += 0.0002

      renderer.render(scene, camera)
    }

    animate()

    // Cleanup
    return () => {
      cancelAnimationFrame(animationId)
      window.removeEventListener('mousemove', onMouseMove)
      window.removeEventListener('resize', onResize)
      if (containerRef.current && renderer.domElement) {
        containerRef.current.removeChild(renderer.domElement)
      }
      renderer.dispose()
    }
  }, [generateNodes])

  return (
    <div 
      ref={containerRef} 
      className="fixed inset-0 -z-10"
      style={{
        background: 'radial-gradient(ellipse at center, #0A0E27 0%, #050812 100%)'
      }}
    />
  )
}
