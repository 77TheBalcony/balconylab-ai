# 🚀 BALCONYLAB V2.0 - GUÍA DE DEPLOYMENT

## ⚡ QUICK START (3 MINUTOS)

### OPCIÓN 1: Deploy a Vercel (RECOMENDADO)

**Paso 1: Instalar Vercel CLI**
```bash
npm install -g vercel
```

**Paso 2: Login**
```bash
vercel login
```

**Paso 3: Deploy desde la carpeta del proyecto**
```bash
cd balconylab-v2
vercel
```

**Paso 4: Configurar API Key**
1. Ve a tu proyecto en vercel.com
2. Settings → Environment Variables
3. Add variable:
   - Name: `ANTHROPIC_API_KEY`
   - Value: tu API key de Claude
4. Redeploy: `vercel --prod`

**✅ LISTO!** Tu sitio estará en `https://balconylab-v2.vercel.app`

---

### OPCIÓN 2: Deploy a Netlify

**Paso 1: Instalar Netlify CLI**
```bash
npm install -g netlify-cli
```

**Paso 2: Build**
```bash
cd balconylab-v2
npm run build
```

**Paso 3: Deploy**
```bash
netlify deploy --prod
```

**Paso 4: Configurar API Key**
1. Ve a Site settings → Environment variables
2. Add: `ANTHROPIC_API_KEY` = tu key

---

### OPCIÓN 3: Desarrollo Local (Mac)

**Paso 1: Crear archivo .env.local**
```bash
cd balconylab-v2
echo "ANTHROPIC_API_KEY=tu-api-key-aqui" > .env.local
```

**Paso 2: Instalar dependencias**
```bash
npm install
```

⚠️ **IMPORTANTE:** Si npm install falla por falta de internet, el proyecto puede funcionar igual usando CDN en producción. Solo necesitas npm para desarrollo local.

**Paso 3: Ejecutar**
```bash
npm run dev
```

**Paso 4: Abrir navegador**
```
http://localhost:3000
```

---

## 🔑 OBTENER ANTHROPIC API KEY

1. Ve a: https://console.anthropic.com/
2. Crea cuenta / Login
3. Settings → API Keys
4. Create Key
5. Copia el key (empieza con `sk-ant-api...`)

⚠️ **Costo:** Claude API no es gratis. Monitorea uso en console.anthropic.com

**Estimado:** 
- 1 análisis AI Agent = ~$0.01 USD
- 100 análisis/día = ~$30 USD/mes

---

## 📱 ACCESO AL SITIO

### Credenciales Demo:

| Email | Password |
|-------|----------|
| demo@bynd.com | demo123 |
| iahadda@bynd.com | bynd2026 |
| admin@balconylab.ai | admin123 |

---

## ✅ VERIFICAR QUE TODO FUNCIONA

### Landing Page:
- ✅ Red neuronal 3D animada con partículas verdes
- ✅ Mouse parallax (mover el cursor mueve la cámara)
- ✅ Typography "BalconyLAB" con animación letra por letra
- ✅ Login form glassmorphism con glow effect
- ✅ Scroll suave con scroll indicator

### Dashboard (después login):
- ✅ Sidebar izquierda con navegación
- ✅ Sección AI Agent con alertas expandibles
- ✅ Logo BalconyLAB arriba
- ✅ User avatar con logout
- ✅ Secciones: Proyecto (documentos, maquetas, referencias) y Dashboard (AI agent, funnel, etc)

### AI Agent:
- ✅ Header con resumen (críticas/warnings/oportunidades)
- ✅ Alertas clasificadas por tipo (rojo=crítico, amarillo=warning, verde=oportunidad)
- ✅ Click en alerta → Expande con sugerencia + acciones
- ✅ Powered by Claude badge

---

## 🐛 TROUBLESHOOTING

### "API Key not configured"
**Problema:** AI Agent no funciona  
**Solución:** Verifica que `ANTHROPIC_API_KEY` esté en:
- Desarrollo: `.env.local`
- Producción: Vercel/Netlify environment variables

### "Module not found"
**Problema:** npm install falló  
**Solución:** 
```bash
rm -rf node_modules package-lock.json
npm install
```

### Three.js no se ve / pantalla negra
**Problema:** 3D no renderiza  
**Solución:**
- Verifica que el navegador soporte WebGL
- Abre console (F12) y busca errores
- Prueba en Chrome/Firefox (Safari puede tener issues)

### Landing muy lento
**Problema:** 50 nodos 3D pueden ser pesados  
**Solución:** Reducir `nodeCount` en `NeuralNetwork3D.tsx` línea 20:
```typescript
const nodeCount = 30; // Cambiar de 50 a 30
```

### Vercel deployment falla
**Problema:** Build error  
**Solución:**
```bash
# Local build test
npm run build

# Si funciona local pero falla en Vercel, verifica Node version
# Vercel settings → Node.js Version → 18.x
```

---

## 📊 ESTRUCTURA DEL PROYECTO

```
balconylab-v2/
├── app/
│   ├── api/claude/route.ts       # AI Agent API endpoint
│   ├── dashboard/page.tsx        # Dashboard principal
│   ├── layout.tsx                # Root layout
│   ├── page.tsx                  # Landing page
│   └── globals.css               # Design system completo
├── components/
│   ├── dashboard/
│   │   ├── AIAgent.tsx           # UI AI Agent con alertas
│   │   └── Sidebar.tsx           # Navegación sidebar
│   └── landing/
│       ├── NeuralNetwork3D.tsx   # Red neuronal 3D (Three.js)
│       ├── HeroSection.tsx       # Hero con typography breathing
│       └── LoginForm.tsx         # Form glassmorphism
├── lib/
│   └── claude.ts                 # Lógica AI Agent + 7 reglas
├── public/
│   └── logo-balconylab.svg       # Logo
├── .env.example                  # Template env vars
├── next.config.js                # Next.js config
├── package.json                  # Dependencies
├── README.md                     # Documentación completa
└── tailwind.config.ts            # Tailwind config
```

---

## 🎨 CUSTOMIZACIÓN RÁPIDA

### Cambiar Colores:
Edita `app/globals.css` líneas 16-30:
```css
:root {
  --primary-green: #2D8B6F;      /* Verde base */
  --primary-green-glow: #3FFF9A;  /* Verde neón */
  --accent-rebel: #FF3366;        /* Rosa rebelde */
  /* etc... */
}
```

### Cambiar Credenciales:
Edita `components/landing/LoginForm.tsx` líneas 13-18:
```typescript
const validCredentials = [
  { email: 'tu@email.com', password: 'tupassword' },
  // añade más...
]
```

### Ajustar Red Neuronal:
Edita `components/landing/NeuralNetwork3D.tsx`:
- Línea 20: `nodeCount = 50` (cantidad nodos)
- Línea 25: Labels de nodos
- Línea 60: Radio esfera

---

## 🔄 UPDATES Y MANTENIMIENTO

### Actualizar Dependencias:
```bash
npm update
```

### Ver Logs Claude API:
```bash
# Desarrollo
npm run dev
# Console mostrará requests a Claude API

# Producción Vercel
vercel logs
```

### Monitorear Costos Claude:
https://console.anthropic.com/settings/billing

---

## 📈 NEXT STEPS (Post v2.0)

### Fase 3: Backend Real
- [ ] Conectar Meta Business Manager API
- [ ] Conectar TikTok Ads API
- [ ] Conectar YouTube Analytics
- [ ] Conectar Instagram Insights
- [ ] Conectar WhatsApp Business API
- [ ] Conectar Calendly API

### Fase 4: Dashboard Completo
- [ ] Funnel: Chart.js gráficas interactivas
- [ ] Costos: Distribución por canal
- [ ] Performance: Radar charts
- [ ] Audiencia: Demographics real-time
- [ ] Benchmarks: vs Industria

### Fase 5: Neural Layout
- [ ] D3.js force-directed graph
- [ ] Nodos drag & drop
- [ ] Conexiones visuales de datos
- [ ] Zoom/pan interactions

---

## 💡 TIPS PRO

### Performance:
- Three.js puede consumir GPU, monitorear FPS
- En móviles viejos, considerar reducir nodeCount
- Lazy load components grandes

### Security:
- NUNCA commitear `.env.local` a Git
- Rotar API keys periódicamente
- En producción, agregar rate limiting

### UX:
- AI Agent se actualiza cada 5 minutos
- Alertas son clickeables para ver detalles
- Logout está en sidebar abajo

---

## 🆘 SOPORTE

**Problemas con deployment:** vercel.com/docs  
**Problemas con Claude API:** docs.anthropic.com  
**Problemas con Next.js:** nextjs.org/docs  

**Stack Overflow:** Tag `next.js`, `three.js`, `anthropic-claude`

---

## 📝 CHECKLIST PRE-LAUNCH

- [ ] API Key configurada en producción
- [ ] Test login con todas las credenciales
- [ ] Verificar red neuronal 3D funciona
- [ ] Test AI Agent genera alertas
- [ ] Mobile responsive funciona
- [ ] Logo se ve correcto
- [ ] Todas las secciones sidebar accesibles
- [ ] Performance <3s LCP
- [ ] Console sin errores

---

**VERSION:** v2.0.0  
**FECHA:** 4 Febrero 2026  
**CLIENTE:** BYND Consulting  

✨ **¡Éxito con el launch!** ✨
