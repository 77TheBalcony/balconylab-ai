'use client'

import { useState } from 'react'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'

const markdownContent = `# ANÁLISIS COMPETITIVO BYND
## Investigación, Metodología y Conclusiones

**Proyecto:** Sprint 1 BYND  
**Objetivo:** Identificar gaps competitivos y fundamentar arquitectura de contenido

---

## 1. METODOLOGÍA DE ANÁLISIS

### Framework de Evaluación

Análisis de 10 consultoras en 7 dimensiones clave:

1. **Propuesta de Valor:** Qué prometen, mensaje central
2. **Frameworks Propietarios:** Metodologías registradas, herramientas exclusivas
3. **Comunicación/Messaging:** Tono, complejidad, lenguaje usado
4. **Casos y Evidencia:** Tipo de prueba social, especificidad
5. **Proceso Metodológico:** Fases declaradas, enfoque
6. **Diferenciadores Declarados:** Qué dicen que los hace únicos
7. **Presencia Digital:** Thought leadership, contenido, accesibilidad

### Criterios de Comparación

- **Especificidad:** ¿Promesas vagas vs cuantificadas?
- **Complejidad comunicacional:** ¿Lenguaje ejecutivo vs consultor-speak?
- **Prueba social:** ¿Casos genéricos vs resultados específicos?
- **Accesibilidad:** ¿Contenido público vs gated?
- **Transferencia conocimiento:** ¿Cliente dependiente vs independiente?

### Fuentes y Validación

- Sitios web oficiales (secciones servicios, casos, insights)
- Thought leadership publicado (artículos, whitepapers)
- Comunicación en redes (LinkedIn, videos)
- Evidencia de investigación web (enero-febrero 2026)

---

## 2. MATRIZ COMPARATIVA

### BIG 3 STRATEGY

#### McKinsey & Company

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Unlock full potential" - EBITDA optimization, growth strategy |
| **Frameworks** | Growth Pyramid, Full Potential Assessment, proprietary diagnostics |
| **Comunicación** | Compleja, framework-heavy, lenguaje consultoría tradicional |
| **Casos** | "Electronics company doubled market share in 2 years" - específico pero sin nombre |
| **Proceso** | Top-down diagnostic → opportunity identification → implementation roadmap |
| **Diferenciadores** | Scale global, data analytics, industry expertise |
| **Digital** | Alto thought leadership, McKinsey Quarterly, contenido gated |

**Insight clave:** Prometen resultados (2x market share) pero comunicación densa. Cliente percibe expertise pero complejidad alta.

#### Boston Consulting Group (BCG)

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Unlock potential of those who advance the world" - transformational programs |
| **Frameworks** | Growth-Share Matrix (BCG Matrix), Stars/Cash Cows/Dogs framework icónico |
| **Comunicación** | Framework-centric, matriz visual como herramienta comunicación |
| **Casos** | Transformational programs, sin especificidad cuantitativa pública |
| **Proceso** | Strategic framing → transformation design → execution support |
| **Diferenciadores** | Frameworks visuales reconocidos, brand strength |
| **Digital** | BCG Henderson Institute, alto contenido thought leadership |

**Insight clave:** Frameworks visuales fáciles de recordar (matriz 2x2) pero procesos complejos. Brand awareness alto.

#### Bain & Company

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Results, not reports" - "2x sector TSR average over 5 years" |
| **Frameworks** | Results360®, Net Promoter Score (creadores), Accelerated Revenue Transformation |
| **Comunicación** | Orientada a resultados, métricas específicas (2x, TSR) |
| **Casos** | Private equity focus, resultados cuantificados |
| **Proceso** | Diagnostic → design → deliver results (énfasis implementación) |
| **Diferenciadores** | Implementación hands-on, alineación PE, "results not reports" |
| **Digital** | Bain Insights, contenido case-oriented |

**Insight clave:** Diferenciación clara "results not reports" - promesa ejecución vs solo recomendaciones. Más accionable que McKinsey/BCG.

---

### BIG 4

#### Deloitte Consulting (Monitor Deloitte)

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Strategy through execution" - integración tech + strategy |
| **Frameworks** | Monitor legacy frameworks, AI-driven transformation tools |
| **Comunicación** | Tech-forward, integración digital-estrategia |
| **Casos** | M&A transformations, tech implementations |
| **Proceso** | Strategy → technology enablement → execution |
| **Diferenciadores** | Integración tech (Monitor adquirido 2013), AI capabilities |
| **Digital** | Deloitte Insights masivo, contenido abundance |

**Insight clave:** Pivot de pure strategy a tech-enabled strategy. Complejidad por abundance de servicios.

#### PwC Strategy& (ex-Booz)

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Strategy that works" - capabilities-driven strategy |
| **Frameworks** | Capabilities-Driven Strategy, Fit for Growth® |
| **Comunicación** | "Practical strategy", implementable |
| **Casos** | EBITDA improvements +$100M (telecoms, industrial) |
| **Proceso** | Capabilities assessment → strategic choices → growth execution |
| **Diferenciadores** | Network PwC (audit/tax/consulting integration), pragmatismo |
| **Digital** | Strategy+Business publication, insights público |

**Insight clave:** Positioning "strategy that works" vs "strategy that sits on shelf". Énfasis pragmatismo pero sigue siendo Big 4.

#### KPMG Advisory

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Enterprise value creation" - deal advisory + performance transformation |
| **Frameworks** | 9 Levers of Value, performance transformation diagnostics |
| **Comunicación** | Finance-forward (CFO language), tangible financial impact |
| **Casos** | "Ranked #1 quality of work US", focus deal situations |
| **Proceso** | Value diagnostic → initiative design → performance improvement |
| **Diferenciadores** | Deal focus (M&A, restructuring), financial lens |
| **Digital** | KPMG Insights, deal-centric content |

**Insight clave:** Diferenciación por lens financiero (CFO vs CEO). Menos estrategia pura, más value creation tangible.

---

### TECH/DIGITAL

#### Slalom

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Modern consulting" - strategy + tech + business transformation |
| **Frameworks** | Agile methodologies, design thinking, partnership ecosystem |
| **Comunicación** | Human-centric, less corporate, accessible |
| **Casos** | United Airlines GenAI customer experience, tech implementations |
| **Proceso** | Discovery → design → build → optimize (tech-heavy) |
| **Diferenciadores** | 400+ tech partnerships (AWS/Google/Microsoft/Salesforce), culture (Fortune 100 Best 6 años) |
| **Digital** | Client stories accessible, case studies public |

**Insight clave:** Positioning "modern" vs "traditional" consulting. Tech-first pero con strategy overlay. Cultura diferenciada.

#### Accenture

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Reinvention partner" - GenAI leader, integrated services |
| **Frameworks** | AI Value Calculator, Reinvention Services, Song (creative agency integration) |
| **Comunicación** | Transformation-heavy, "reinvention" buzzword central |
| **Casos** | "2.3x revenue growth clients vs peers", scale masivo |
| **Proceso** | Strategy Consulting → Technology → Operations (integrado) |
| **Diferenciadores** | Scale (791,000 people), tech capabilities, GenAI positioning |
| **Digital** | Accenture Research prolífico, insights masivos |

**Insight clave:** Positioning reinvención total. Scale intimidante. Menos boutique strategy, más transformation machine.

---

### LATAM

#### Sintec (México)

| Dimensión | Hallazgo |
|-----------|----------|
| **Propuesta Valor** | "Resultados sostenibles" - growth strategy, operations excellence |
| **Frameworks** | Sintec methodologies (no branded frameworks public), best practices compilados |
| **Comunicación** | Directo, español, menos framework-speak que Big 3 |
| **Casos** | Herdez Group (+31.5% EBITDA), "20-50% sales growth, 5-15% EBITDA increase" |
| **Proceso** | Diagnóstico → diseño solución → implementación → seguimiento |
| **Diferenciadores** | Contexto LATAM (35+ años región), 800+ proyectos, cercanía cultural |
| **Digital** | Insights en español, contenido LinkedIn activo |

**Insight clave:** Competencia directa regional. Promesas cuantificadas (31.5% EBITDA Herdez). Menos sofisticación comunicacional que Big 3 pero resultados comparables.

---

### BYND (Baseline Comparativo)

| Dimensión | Estado Actual |
|-----------|--------------|
| **Propuesta Valor** | "3x en dos años" - ingeniería reversa desde EBITDA, 3 palancas crecimiento |
| **Frameworks** | Ingeniería reversa (15 palancas → 3-5 priorizadas costo-tiempo-beneficio) |
| **Comunicación** | **GAP:** Sin presencia digital estructurada, sin thought leadership público |
| **Casos** | Mario (ventas 3x ✅ operación colapsó ❌), aprendizaje transparente |
| **Proceso** | Diagnóstico 360 → propuesta → seguimiento → implementación + acompañamiento campo |
| **Diferenciadores** | Transferencia conocimiento (cliente independiente post-proyecto), efectividad sobre complejidad, acompañamiento campo |
| **Digital** | **GAP:** Sin contenido, sin casos publicados, sin SEO |

---

## 3. ANÁLISIS DE PATRONES

### 3.1 QUÉ HACEN TODAS (sin excepción)

**PATRÓN 1: FRAMEWORKS PROPIETARIOS**
- McKinsey: Growth Pyramid
- BCG: Growth-Share Matrix
- Bain: Results360®
- Deloitte: AI-driven transformation
- PwC: Capabilities-Driven Strategy
- KPMG: 9 Levers of Value
- Slalom: Partnership ecosystem
- Accenture: AI Value Calculator
- Sintec: Metodologías compiladas

**Significado:** Frameworks = credibilidad + diferenciación percibida. Cliente quiere "método probado".

**PATRÓN 2: PROMESAS EBITDA/GROWTH**
- Todas prometen impacto financiero tangible
- Lenguaje: "EBITDA improvement", "revenue growth", "market share", "enterprise value"
- Sin frameworks, no hay credibilidad; sin promesa financiera, no hay venta

**Significado:** CFO/CEO solo compran si ven ROI. Métricas financieras no son opción, son requisito.

**PATRÓN 3: CASOS CON RESULTADOS CUANTIFICADOS (pero sin nombres)**
- McKinsey: "Doubled market share in 2 years"
- Bain: "2x sector TSR average"
- Sintec: "Herdez +31.5% EBITDA"
- PwC: "+$100M EBITDA"

**Significado:** Prueba social sin violar confidencialidad. Specificity sells.

**PATRÓN 4: PROCESO EN FASES (diagnóstico → diseño → ejecución)**
- Todas usan variante: assess → design → implement
- Lenguaje cambia, estructura no

**Significado:** Cliente espera proceso estructurado. Improvisación percibida = riesgo.

**PATRÓN 5: THOUGHT LEADERSHIP MASIVO**
- McKinsey Quarterly, BCG Henderson Institute, Bain Insights, Deloitte Insights, etc.
- Contenido = autoridad
- SEO dominado por Big 3/Big 4

**Significado:** Quien no produce contenido, no existe digitalmente. Awareness = contenido.

---

### 3.2 QUÉ HACEN ALGUNAS (tendencias emergentes)

**TENDENCIA 1: INTEGRACIÓN TECH + STRATEGY (Deloitte, Accenture, Slalom)**
- Strategy puro migrando a tech-enabled strategy
- GenAI como differentiator (Accenture positioning agresivo)

**Significado:** Pure strategy commoditizándose. Tech capabilities = nueva barrera entrada.

**TENDENCIA 2: "RESULTS NOT REPORTS" (Bain, PwC Strategy&)**
- Diferenciación por implementación hands-on vs solo recomendaciones
- Reacción a crítica histórica: "consultores dan PowerPoints y se van"

**Significado:** Cliente cansado de estrategias que no se ejecutan. Implementation = nuevo diferenciador.

**TENDENCIA 3: COMUNICACIÓN "MODERNA" (Slalom)**
- Menos corporate-speak
- Culture como differentiator (Fortune 100 Best Companies)
- Human-centric vs framework-centric

**Significado:** Generación nueva ejecutivos valora cultura sobre brand legacy.

---

### 3.3 QUÉ NO HACE NADIE (vacíos validados)

**VACÍO 1: COMUNICACIÓN SIMPLE SIN SACRIFICAR SOFISTICACIÓN**
- **Hallazgo:** TODAS usan lenguaje complejo
  - "Capabilities-driven strategy"
  - "Full potential assessment"
  - "Reinvention through transformation"
- **Oportunidad BYND:** Explicar ingeniería reversa en 30 segundos con metáfora clara
- **Validación:** Videos referencia Arnaud muestran estructura simple funciona

**VACÍO 2: TRANSPARENCIA SOBRE FRACASOS/APRENDIZAJES**
- **Hallazgo:** NADIE muestra casos donde "funcionó pero..."
- **Evidencia:** Caso Mario (3x ventas ✅ operación colapsó ❌) = oro puro
- **Oportunidad BYND:** Aprendizajes transparentes generan confianza > casos perfectos
- **Diferencia:** Competencia vende perfección; BYND vende honestidad + adaptación

**VACÍO 3: TRANSFERENCIA CONOCIMIENTO COMO PROMESA CENTRAL**
- **Hallazgo:** Todas venden expertise perpetuo (modelo negocio = dependencia)
- **Evidencia:** Ninguna promete "te hacemos independiente de nosotros"
- **Oportunidad BYND:** "Cliente independiente post-proyecto" = ∞x valor
- **Validación:** Entrevistas (Pablo, Mario) confirman esto es diferenciador #1

**VACÍO 4: CONTENIDO ACCESIBLE B2B SIN GATING**
- **Hallazgo:** Big 3/Big 4 gated content mayoritario (whitepapers requieren email)
- **Oportunidad BYND:** TikTok/IG ejecutivo = competencia CERO en ese espacio
- **Diferencia:** Bain en LinkedIn vs BYND en TikTok = audiencias diferentes, fricción cero

**VACÍO 5: EFECTIVIDAD SOBRE COMPLEJIDAD (explícito)**
- **Hallazgo:** Competencia usa complejidad como proxy de valor
- **Evidencia:** Frameworks multi-layer, dashboards 50 KPIs
- **Oportunidad BYND:** "3 palancas vs 50 KPIs" = mensaje anti-complejidad
- **Validación:** Filosofía BYND ya tiene esto, solo falta comunicarlo

**VACÍO 6: ACOMPAÑAMIENTO CAMPO (no solo recomendaciones)**
- **Hallazgo:** Bain/PwC prometen implementación pero no muestran cómo
- **Evidencia:** "Acompañamiento campo" específico BYND no aparece en competencia
- **Oportunidad:** Mostrar consultores en planta, con equipos, haciendo = diferencia vs PowerPoint
- **Formato:** Video BYND en piso de producción vs McKinsey en boardroom

---

## 4. CONCLUSIONES ESPECÍFICAS

### CONCLUSIÓN 1: Framework Propietario es Table Stakes
**Patrón competencia:** Todas tienen frameworks registrados  
**Implicación BYND:** "Ingeniería Reversa BYND®" debe ser nombrada, explicada, repetida  
**Aplicación contenido:** Video Premium debe mostrar diagrama framework (visual = memorable)  
**Acción:** Registrar marca "Ingeniería Reversa BYND" + crear visual framework 1 página

---

### CONCLUSIÓN 2: Promesas Cuantificadas Venden, Genéricas No
**Patrón competencia:** "3x market share", "+$100M EBITDA", "2x TSR"  
**Implicación BYND:** "3x en dos años" es oro, debe ser anchor en todo contenido  
**Aplicación contenido:** Hook videos: "¿Por qué tu empresa creció 20% pero EBITDA bajó?" → específico > genérico  
**Gap BYND:** Falta especificar "3x ¿qué?" → Debe ser "3x EBITDA" o "3x ventas rentables"

---

### CONCLUSIÓN 3: Comunicación Compleja = Barrera Entrada (Oportunidad BYND)
**Patrón competencia:** Lenguaje consultoría tradicional denso  
**Gap identificado:** NADIE comunica simple sin parecer simplista  
**Oportunidad BYND:** TikTok ejecutivo + lenguaje claro = océano azul  
**Aplicación contenido:**  
- Bloque 1 Premium: Evitar "capabilities-driven growth optimization" → Usar "encontramos las 3 palancas que mueven tu EBITDA"  
- Bloque 3 Educacional: Casos famosos explicados simple (ej: "Cómo Netflix pasó de DVDs a streaming sin quebrar")  
- Regla: Si frase tiene >3 palabras de consultoría, reescribir

---

### CONCLUSIÓN 4: Thought Leadership = Existencia Digital (BYND gap crítico)
**Patrón competencia:** McKinsey Quarterly, BCG Insights, Bain publications  
**Gap BYND:** Cero presencia digital estructurada  
**Implicación:** Sistema contenido NO es "nice to have", es requisito competir  
**Aplicación contenido:**  
- Bloque 4 Podcast → artículos blog = thought leadership escalable  
- SEO keywords: "cómo crecer EBITDA", "consultoría crecimiento México", "estrategia empresarial efectiva"  
- Objetivo: Aparecer Google cuando DG busca "consultoría crecimiento"

---

### CONCLUSIÓN 5: "Results Not Reports" es Diferenciador Emergente (BYND ya lo hace)
**Tendencia competencia:** Bain positioning "results not reports"  
**Fortaleza BYND:** Acompañamiento campo, implementación real  
**Implicación:** Comunicar esto ANTES que competencia lo copie  
**Aplicación contenido:**  
- Video Premium 3 (Ejecución): Contrastar "consultor da recomendaciones y se va" vs "BYND acompaña implementación en campo"  
- Proof: Caso Mario (lección aprendida: vender solo comercial sin operación = fracaso)  
- Mensaje: "No vendemos PowerPoints, acompañamos resultados"

---

### CONCLUSIÓN 6: Transferencia Conocimiento = Diferenciador Único Validado
**Hallazgo:** NADIE promete "te hacemos independiente"  
**Evidencia:** Entrevistas confirman esto es valor ∞x  
**Oportunidad:** Territorio único sin competencia  
**Aplicación contenido:**  
- Mensaje central Bloque 1: "McKinsey te da el mapa. BYND te enseña a leer mapas."  
- Filosofía final videos: "Nuestro éxito es que NO nos necesites después"  
- Casos: Mostrar clientes que ahora usan metodología BYND internamente  
- Contraste: "Consultoría tradicional = dependencia perpetua. BYND = independencia post-proyecto"

---

### CONCLUSIÓN 7: Transparencia Fracasos > Casos Perfectos (territorio virgen)
**Hallazgo:** Competencia solo muestra éxitos  
**Oportunidad:** Aprendizajes transparentes generan confianza diferente  
**Aplicación contenido:**  
- Video Premium 3: Caso Mario honesto ("vendimos solo comercial, operación colapsó, aprendimos")  
- Bloque 3 Educacional: "Qué sale mal cuando..." (anatomía fracasos comunes)  
- Tono: Humano, aprendiz, vs omnisciente  
- Resultado: Cliente percibe "BYND no me va a vender lo que no necesito"

---

### CONCLUSIÓN 8: Efectividad > Complejidad (anti-mensaje industria)
**Patrón competencia:** Complejidad = sofisticación  
**Filosofía BYND:** 3 palancas > 50 KPIs  
**Mensaje diferenciado:** "Hacemos menos, mejor"  
**Aplicación contenido:**  
- Hook: "¿Por qué las mejores consultoras te dan 47 recomendaciones y ninguna funciona?"  
- Respuesta: "Porque más ≠ mejor. 3 palancas ejecutadas > 47 PowerPoints"  
- Visual: Diagrama simple 3 palancas vs framework complejo competencia  
- Positioning: BYND = anti-complejidad

---

### CONCLUSIÓN 9: Video Ejecutivo TikTok/IG = Océano Azul
**Hallazgo:** Big 3 en LinkedIn, NADIE en TikTok ejecutivo  
**Oportunidad:** Formato + plataforma sin competencia  
**Aplicación contenido:**  
- Bloque 1 Premium: Estética cinematográfica (Claude x Murakami) = premium pero TikTok  
- Distribución: TikTok + IG Reels + LinkedIn (omnicanal)  
- Ventaja: DG 35-50 años está en TikTok, competencia no  
- Diferencia: Bain escribe artículos 3000 palabras; BYND hace video 90 seg que se ve completo

---

### CONCLUSIÓN 10: Posicionamiento Regional LATAM (vs Sintec)
**Competencia directa:** Sintec (35 años LATAM, 800 proyectos)  
**Diferenciadores BYND vs Sintec:**  
1. Comunicación digital moderna (Sintec LinkedIn tradicional)  
2. Transparencia aprendizajes (Sintec casos perfectos)  
3. Transferencia conocimiento explícita (Sintec no promete independencia)  
**Aplicación contenido:**  
- No atacar Sintec directamente  
- Mensaje: "Nueva generación consultoría: resultados + independencia + transparencia"  
- Positioning: BYND = Sintec 2.0 (respeto legacy pero evolución)

---

## 5. POSICIONAMIENTO BYND VS COMPETENCIA

### Territorio Único Validado

**BYND ocupa espacio competitivo único:**

~~~
                    COMPLEJIDAD ALTA
                          ▲
                          │
        McKinsey ●        │        ● BCG
                          │
        Deloitte ●        │        ● Accenture
                          │
   ◄────────────────────────────────────────►
DEPENDENCIA                                 INDEPENDENCIA
CLIENTE                                     CLIENTE
                          │
                 Sintec ● │
                          │
                          │    ● BYND
                          │   (Efectividad + Transferencia)
                          │
                    COMPLEJIDAD BAJA
                          ▼
~~~

**Ejes diferenciación:**
- **Eje X:** Dependencia vs Independencia (BYND único en promover independencia)
- **Eje Y:** Complejidad vs Efectividad (BYND único en simplicidad efectiva)

### Mensajes Clave Diferenciados

**VS McKinsey/BCG/Bain:**
- Ellos: Frameworks complejos, PowerPoints densos
- BYND: 3 palancas claras, acompañamiento campo
- Mensaje: "Te dan el mapa. Te enseñamos a leer mapas."

**VS Deloitte/PwC/KPMG/Accenture:**
- Ellos: Tech + Strategy integrado, scale masivo
- BYND: Efectividad humana, boutique
- Mensaje: "No necesitas 791,000 consultores. Necesitas 3 que entiendan tu negocio."

**VS Sintec (competencia directa regional):**
- Ellos: Legacy LATAM, casos perfectos
- BYND: Transparencia, aprendizajes, digital-first
- Mensaje: "Resultados probados + honestidad sobre qué funciona y qué no"

**VS Slalom:**
- Ellos: Modern consulting, tech partnerships
- BYND: Modern consulting, human results
- Mensaje: "Tecnología ayuda. Transferencia conocimiento libera."

### Prueba Social vs Industria

**Validaciones competitivas:**

1. **"3x en dos años"** = comparable a Bain "2x TSR", McKinsey "2x market share"
2. **Caso Herdez Sintec (+31.5% EBITDA)** = BYND puede prometer similar con casos propios
3. **Transferencia conocimiento** = gap industria completa (ninguno lo promete)
4. **Contenido TikTok ejecutivo** = formato sin competencia Big 3/Big 4

**Posicionamiento final:**
> "BYND: Resultados de McKinsey. Implementación de Bain. Honestidad que nadie más ofrece. Y te hacemos independiente, no dependiente."

---

## 6. IMPLICACIONES PARA ARQUITECTURA CONTENIDO

### Bloque 1 Premium (4 videos)

**Video 1 - General BYND:**
- Hook: Contrastar complejidad competencia vs simplicidad BYND
- Framework: Mostrar visual "Ingeniería Reversa BYND®"
- Prueba: "3x en dos años" (anchor)
- Diferenciador: Transferencia conocimiento (vs dependencia)

**Video 2 - Growth Marketing:**
- Gap explotado: Comunicación simple vs "capabilities-driven shopper optimization"
- Caso implícito: Mercedes-Benz portfolio (Arnaud)
- Mensaje: "No te vendemos estrategia. Te enseñamos a crearla."

**Video 3 - Ejecución Comercial:**
- Gap explotado: Acompañamiento campo vs "recomendaciones y nos vamos"
- Caso transparente: Mario (3x ventas ✅ operación colapsó ❌ → aprendizaje)
- Mensaje: "Results not reports" (tomar de Bain pero ejecutar diferente)

**Video 4 - Distribución:**
- Gap explotado: Efectividad > complejidad
- Métrica anchor: Días inventario, orden no cash
- Mensaje: "3 palancas > 47 KPIs"

### Bloque 2 Lives

**Temas validados desde gaps:**
- "Por qué las consultoras te dan 50 recomendaciones y ninguna funciona"
- "McKinsey vs BYND: cuándo necesitas cada uno"
- "Qué sale mal cuando solo arreglas comercial (caso Mario)"

### Bloque 3 Educacional

**Casos famosos consultoría:**
- Netflix (DVDs → streaming sin quebrar)
- Apple (casi quiebra 1997 → focus 4 productos)
- Starbucks (sobré-expansión → return to core)

**Ángulo BYND:** "Qué hicieron bien (ingeniería reversa) + qué hicieron mal (lecciones)"

### Bloque 4 Podcast

**Invitados ideales:**
- DG que usó consultoría tradicional (experiencia qué funcionó/no)
- DG que implementó cambio sin consultoría (validar transferencia conocimiento)
- Director Área >5000 MDP (target segmento 3)

**Ángulo:** Conversación honesta, no pitch

### Elementos Transversales Todos Bloques

1. **Lenguaje:** Simple sin ser simplista
2. **Prueba:** "3x en dos años" repetido
3. **Contraste:** BYND vs "consultoría tradicional" (sin nombrar competidores)
4. **Filosofía:** Independencia > dependencia
5. **Tono:** Honesto, humano, aprendiz (vs omnisciente)

`

export default function CompetitiveAnalysis() {
  const [showFull, setShowFull] = useState(false)

  return (
    <div className="min-h-screen bg-darker text-white p-8">
      <div className="max-w-7xl mx-auto">
        
        <button 
          onClick={() => window.history.back()}
          className="flex items-center gap-2 text-secondary hover:text-white transition-colors mb-6"
        >
          <svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" d="M15 19l-7-7 7-7" />
          </svg>
          <span>Volver</span>
        </button>

        <h1 className="font-display text-5xl font-bold mb-4">
          Análisis Competitivo BYND
        </h1>
        <p className="text-secondary text-lg mb-8">
          Investigación, Metodología y Conclusiones
        </p>

        <div className="glass-medium p-8 rounded-lg mb-8">
          <h2 className="font-display text-2xl font-bold mb-6">Resumen</h2>
          
          <div className="space-y-4 text-secondary leading-relaxed mb-6">
            <p>
              <strong>Proyecto:</strong> Sprint 1 BYND<br/>
              <strong>Objetivo:</strong> Identificar gaps competitivos y fundamentar arquitectura de contenido
            </p>
            <p>
              Análisis de 10 consultoras en 7 dimensiones clave: Propuesta de Valor, Frameworks Propietarios, Comunicación/Messaging, Casos y Evidencia, Proceso Metodológico, Diferenciadores Declarados, y Presencia Digital.
            </p>
            <p>
              El documento identifica 10 conclusiones estratégicas clave sobre gaps competitivos que BYND puede explotar, define el territorio único de posicionamiento, y establece las implicaciones directas para la arquitectura de contenido.
            </p>
          </div>

          <button
            onClick={() => setShowFull(!showFull)}
            className="flex items-center gap-2 text-green-glow hover:text-green-primary transition-colors font-semibold text-lg"
          >
            <span>{showFull ? 'Ocultar investigación completa' : 'Ver investigación completa'}</span>
            <svg className={`w-5 h-5 transition-transform ${showFull ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
            </svg>
          </button>
        </div>

        {showFull && (
          <div className="glass-medium p-8 rounded-lg">
            <article className="prose prose-invert prose-lg max-w-none
              prose-headings:font-display prose-headings:text-green-glow
              prose-h1:text-4xl prose-h2:text-3xl prose-h3:text-2xl prose-h4:text-xl
              prose-p:text-secondary prose-p:leading-relaxed
              prose-li:text-secondary
              prose-strong:text-white prose-strong:font-semibold
              prose-blockquote:border-green-glow prose-blockquote:text-secondary
              prose-code:text-green-glow prose-code:bg-white/5 prose-code:px-1 prose-code:rounded
              prose-pre:bg-white/5 prose-pre:border prose-pre:border-white/10
              prose-table:border-collapse
              prose-th:border prose-th:border-white/20 prose-th:bg-white/5 prose-th:p-2
              prose-td:border prose-td:border-white/10 prose-td:p-2
            ">
              <ReactMarkdown remarkPlugins={[remarkGfm]}>
                {markdownContent}
              </ReactMarkdown>
            </article>
          </div>
        )}
      </div>
    </div>
  )
}
