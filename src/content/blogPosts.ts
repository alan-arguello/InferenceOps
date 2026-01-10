export type BlogPost = {
  slug: string;
  title: string;
  subtitle: string;
  date: string;
  dateISO: string;
  author: string;
  summary: string;
  content: string;
};

const blogPostsEs: BlogPost[] = [
  {
    slug: "ai-2026",
    title: "Estado de la IA 2026",
    subtitle: "Notas para ponerme al día con la capa fundacional",
    date: "31 de diciembre de 2025",
    dateISO: "2025-12-31",
    author: "Alan Arguello",
    summary:
      "Notas sobre cómo me puse al día con la capa fundacional de IA y los principales cuellos de botella del sector.",
    content: `Desde junio de 2025 he intentado ponerme al día con los avances en IA. Y digo "intentado" porque, dada la velocidad con la que evoluciona el mercado, la **Capa Fundacional** y la **Capa de Aplicación** son dos cosas que, por sí solas, requieren una enorme cantidad de tiempo.

Para dar contexto rápido: trabajé dos años como Software Engineer entre 2020 y 2022, antes de la era de los LLM. En ese entonces mi vida era aprender la mayor cantidad de ingeniería de software posible, todos los días. Desde entonces tomé un rol más pasivo en lo técnico y me moví hacia un rol más generalista.

Uso LLMs a diario (ChatGPT, Gemini, Claude, etc.), pero la profundidad técnica en la que operaba ya no era la misma. Así que aunque tenía contexto, para este punto estaba oxidado y desactualizado en muchas cosas.

En los últimos meses, estas fueron mis principales fuentes para ponerme al día:

- Hacer vibe coding más activamente, especialmente con herramientas como v0 o Lovable, y con asistentes de IDE como Codex, Claude Code, Cursor, etc.
- Abrir un grupo de WhatsApp con ingenieros que conocía, para entender qué estaban pensando.
- Construir un producto en la capa de aplicación (en mi caso, avatares digitales interactivos en tiempo real).
- Asistir y organizar hackathons en San Francisco.
- Consumir más opiniones de investigadores en la frontera (Karpathy, Fei-Fei Li, Yann LeCun).
- Podcasts con invitados y temas técnicos (Dwarkesh, Lex Fridman, a16z).
- Pasar tiempo dentro de la burbuja de X (Twitter), que es donde te enteras primero de la mayoría de cosas.

También debo aclarar que una parte grande de mi enfoque de aprendizaje fue sobre **entrenamiento** y **datos**, porque el motivador inicial era evaluar la viabilidad de arrancar una empresa de data labeling. Para hacerlo, necesitaba entender mejor la necesidad real, el estado actual y hacia dónde podría ir el mercado.

Sigo en este camino de aprendizaje, así que cualquier sugerencia o feedback es bienvenido.

---

## Mapa rápido: lo que aprendí (alto nivel)

Si solo lees una sección, que sea esta:

- La capa fundacional ya no es "solo modelos". Es **chips + data centers + energía + pipelines de datos + recetas de entrenamiento**.
- El texto fue un dataset afortunado. En cuanto sales de texto (audio, video, robótica, empresa), **los datos se vuelven caros y limitados**.
- **La energía y la conectividad a la red eléctrica** se están volviendo restricciones de primer orden, no notas al pie.
- La evaluación se está convirtiendo en su propio cuello de botella. Podemos construir modelos más fuertes más rápido de lo que podemos **medir** qué significa "más fuerte".
- En robótica y en el mundo físico, el cuello de botella suele no ser la creatividad. Es **experiencia, operación y datos**.

---

## La base: Capa Fundacional

Voy a dividir este texto en mis aprendizajes sobre la Capa Fundacional y dejar la capa de aplicación para una segunda parte.

Una definición simple que me ayudó:

- **Capa Fundacional:** el stack que hace posibles los modelos de frontera (cómputo, infraestructura, energía, datos, entrenamiento, evaluación).
- **Capa de Aplicación:** todo lo que se construye encima (productos, flujos, integraciones, distribución, UX, precio, confianza, cumplimiento).

### ¿Cómo llegamos aquí?

La IA ha pasado por muchas olas. A veces hubo entusiasmo, y muchas otras se enfrió porque la promesa se sentía lejos en términos prácticos.

Dos hitos que vale la pena recordar:

1. **ImageNet:** a finales de los 2000 ImageNet se formalizó como un dataset masivo y jerárquico, construido en gran parte mediante recolección y etiquetado a gran escala usando Amazon Mechanical Turk.
2. **AlexNet (2012):** un modelo que, sin intención, se volvió símbolo de un avance muy concreto. Entrenar deep nets en GPUs en lugar de CPUs cambió el juego de desempeño.

Aun así, por útiles que fueron estos avances para el campo, no explotaron en el mainstream porque se sentían como progreso de laboratorio, no como algo que millones de personas usarían de golpe.

Avancemos a noviembre de 2022: OpenAI lanza **ChatGPT**, y la adopción masiva hace el tema inevitable.

Parte de lo interesante es que ChatGPT aprovecha un breakthrough anterior: el paper de 2017 **Attention Is All You Need**, que propone la arquitectura **Transformer**. Sobre eso, se volvió cada vez más claro lo que muchos resumen como scaling laws: con más cómputo, más datos y la configuración correcta, los modelos tienden a mejorar de forma bastante predecible.

### Los pilares que impulsan el desarrollo de modelos hoy

A alto nivel, así lo veo:

- **Chips** (hardware de cómputo)
- **Infraestructura** (data centers, redes, despliegue)
- **Energía** (para alimentar todo eso)
- **Datos** (y la capa de evaluación y etiquetado que los hace útiles)
- **Algoritmos de entrenamiento** (Transformers y lo que venga después)

Hay además un pilar transversal: **talento**. No es un detalle menor, pero se posa como una sombra sobre todo lo demás.

Un modelo mental que me ayudó:

- Los chips son el motor.
- Los data centers son la fábrica.
- La energía es el combustible.
- Los datos son la materia prima.
- Los algoritmos de entrenamiento son la receta.
- La evaluación es la suite de tests.
- El talento es la restricción en todo.

---

## Desafíos por pilar

### 1) Chips

El mayor cuello de botella estructural es la **concentración de la manufactura de punta** en Taiwán, particularmente en TSMC. Muchos resúmenes citan que una parte muy grande de la producción de leading edge está concentrada ahí. El número exacto importa menos que la dirección: es un punto de estrangulamiento en la cadena de suministro.

Eso introduce un enorme riesgo geopolítico. Nadie puede dejar de depender de eso de la noche a la mañana.

Un detalle práctico que es fácil pasar por alto: "chips" no es solo el GPU. También es memoria (HBM), packaging, interconexión y el diseño del sistema completo que hace que el entrenamiento escale. En otras palabras, el cómputo es una cadena de suministro, no un SKU.

Sobre los tipos de chips:

- Para **entrenamiento**, los GPUs han sido el estándar de facto. Nvidia, por ejemplo, posiciona el H100 como un acelerador para cargas LLM y Transformer.
- Para **inferencia**, hay todo un mundo de optimización. TPUs y arquitecturas especializadas buscan mejorar costo y performance para serving.
- En paralelo, startups como **Groq** han intentado atacar inferencia con hardware y compilación personalizada (LPUs). En diciembre de 2025 Groq anunció un acuerdo de licenciamiento con NVIDIA para su tecnología LPU.

**Idea clave:** El cómputo no solo es "qué tan rápido es el chip". Es **qué tan confiablemente puedes conseguirlo, agruparlo y alimentarlo**.

**Pregunta abierta:** ¿La inferencia se vuelve un commodity (barata, abundante), o seguirá siendo estratégicamente escasa porque aún está limitada por energía y cadena de suministro?

---

### 2) Infraestructura (data centers y despliegue)

Una vez tienes chips, necesitas meterlos en clusters y operarlos. Aquí el reto es brutalmente físico:

- No hay suficientes chips.
- No hay suficiente capacidad de data centers al ritmo que exige la demanda.
- Y, sobre todo, no hay suficiente energía ni conectividad eléctrica listas a tiempo.

Los data centers no son solo "rentar racks". Son tierra, permisos, enfriamiento, transformadores, redes, logística y tiempos largos. Uno de los constraints más importantes es simplemente: ¿puedes llevar suficiente energía al sitio, lo suficientemente rápido y con confiabilidad razonable?

Dos familias de ideas que están emergiendo:

- **Cómputo fuera de la Tierra:** propuestas que exploran data centers en el espacio o conceptos aún más extremos. En 2025 hubo reportes sobre planes de data centers en la Luna, más como señal de dirección que como algo inmediato.
- **Mercados alternativos de cómputo:** desde redes descentralizadas como Akash hasta marketplaces como Vast.ai que buscan monetizar GPUs y capacidad ociosa.

También está el tema del **edge**. Correr inferencia más cerca del usuario, o más cerca del mundo físico (fábricas, cámaras, robots). Microsoft describe Azure Extended Zones como extensiones de Azure de bajo footprint para baja latencia o residencia de datos.

Mi lectura es que la infraestructura está entrando en modo industrial. Menos software puro, más restricciones del mundo real.

**Idea clave:** El siguiente cuello de botella después de "comprar GPUs" suele ser **energía + enfriamiento + realidad de despliegue**.

**Pregunta abierta:** ¿El play ganador de infraestructura será solo de hyperscalers, o nuevos mercados (descentralizados, regionales, verticales) absorberán demanda de forma relevante?

---

### 3) Energía

Los data centers implican energía. Y la magnitud ya no es una nota al pie.

Los data centers ya son un consumidor relevante a escala país, con crecimiento impulsado por digitalización e IA. Más allá de cualquier número puntual, lo que importa es la tendencia: la demanda crece más rápido de lo que podemos conectar y distribuir con eficiencia.

Desde mi lado, volviendo a ingeniería eléctrica: en muchos países existen pérdidas técnicas (materiales, mala configuración, ineficiencias) y no técnicas (robo, falta de medición, cero optimización en hogares y negocios). El sueño de la **smart grid** existe desde hace años, pero implementarlo bien es extremadamente difícil.

Lo que me parece interesante:

- **Fusión**, con empresas como Helion.
- **Optimización**, vía sensores, control, medición fina y software para reducir desperdicio.
- En el corto plazo, infraestructura eléctrica más aburrida pero necesaria como transmisión, subestaciones e interconexión.
- También vale la pena seguir cualquier cosa que reduzca el time-to-power (permisos, interconexión a red, planeación de capacidad). No es sexy, pero importa.

En un hackathon de xAI en diciembre escuché una frase que se me quedó de Jimmy Ba, cofundador de xAI: Si tuviéramos cómputo y energía infinitos, estaríamos mucho más adelante. Captura el cuello de botella.

**Idea clave:** La energía no es solo "cuánta potencia existe". Es **qué tan rápido puedes conectarla, dónde y con qué confiabilidad**.

**Pregunta abierta:** ¿Las restricciones de energía empujarán más entrenamiento a regiones con energía barata y más inferencia al edge, o el stack seguirá centralizado?

---

### 4) Datos (y evaluación)

Con energía y cómputo, entrenas. Y luego chocas con datos.

La razón por la que los LLM avanzaron tan rápido es que el **texto** es un tipo de dato extremadamente abundante. Pero el problema se vuelve obvio en cuanto sales del texto, o en cuanto necesitas más datos privados o del mundo real (manufactura, banca, sensores, robótica).

Un marco que me ayudó: fuera del texto, los datos suelen estar **bloqueados**, no ausentes.

- Bloqueados por privacidad, contratos e incentivos.
- Bloqueados por operaciones (recolectarlos es trabajo).
- Bloqueados por instrumentación (necesitas sensores, pipelines, QA).
- Bloqueados por evaluación (necesitas saber qué se ve como "bueno").

Tres caminos típicos:

1. **Datos sintéticos**
2. **Modelos que necesitan menos datos**
3. **Recolectar y etiquetar nuevos datos**

#### 4.1 Datos sintéticos y colapso de modelo

Los datos sintéticos ayudan, pero tienen un riesgo real: **colapso de modelo**. Entrenar modelos nuevos con datos generados por modelos anteriores puede degradar la distribución, colapsar la diversidad y amplificar artefactos.

En términos simples, si solo te alimentas de tus propias respuestas, terminas viviendo en el centro de tu propia campana gaussiana.

Mi conclusión práctica: los datos sintéticos son más útiles cuando puedes anclarlos a la realidad, por ejemplo:

- Generas candidatos de manera sintética.
- Los verificas, filtras o puntúas contra algo real (tests, simuladores, expertos humanos o datos con ground truth).

#### 4.2 Modelos que necesitan menos datos

Este es el camino más interesante conceptualmente, pero también el más difícil. La idea de que un sistema pueda aprender mucho con poco dato, o a través de self-play (como AlphaGo), es poderosa, pero no es trivial de generalizar.

Gran parte de la dificultad no está en la idea, sino en el entorno. Los juegos tienen reglas limpias y loops de feedback rápidos. La vida real es ruidosa, lenta y cara.

#### 4.3 Recolección y etiquetado de datos

Este es el camino caro pero directo. Millones de ejemplos nuevos, alta calidad y buen control de evaluación.

El mercado ha evolucionado:

- Antes, la narrativa era crowd labor.
- Hoy, para muchos problemas de frontera, lo que importa es la **experticia** (o al menos un grupo más pequeño de especialistas bien entrenados, con QA fuerte).

También está el tema de RL y verificación:

- RLHF se volvió el término popular.
- Pero para ciertos dominios puedes usar feedback verificable, enmarcado como **Reinforcement Learning with Verifiable Rewards (RLVR)**.

Finalmente, hay un desafío que se siente subestimado: **evaluar razonamiento**. No solo importa la respuesta final, también el camino. Y en muchos dominios reales, hay ambigüedad humana real.

**Idea clave:** Los datos no son solo "más ejemplos". A menudo son **recolección + incentivos + QA + diseño de evaluación**.

**Pregunta abierta:** ¿Logramos un breakthrough en aprender con menos datos reales, o resolvemos esto principalmente construyendo mejores pipelines para recolectar y verificar datos del mundo real?

---

### 5) Algoritmos de entrenamiento

El Transformer fue el gran breakthrough. Pero más allá de optimizaciones y variaciones, no ha habido otro salto equivalente que cambie la arquitectura base de toda la industria.

Lo que sí ha pasado es refinamiento en varias direcciones:

- **Escalar eficientemente**, con enfoques como mixture of experts.
- **Hacer la inferencia más barata**, con mejor decoding, distillation, quantization y optimizaciones a nivel sistema.
- **Explorar alternativas**, como los state space models tipo Mamba.

Una simplificación útil: el entrenamiento ya no es solo pretraining. Mucha capacidad y utilidad del producto viene del post-training (instruction tuning, preference optimization, RL, tool use). Así que "algoritmos" incluye toda la receta de entrenamiento, no solo la arquitectura base.

El consenso parece ser que hacer lo mismo pero más grande eventualmente choca con paredes como datos, energía, evaluación y costo.

**Idea clave:** Las próximas ganancias suelen ser menos sobre una nueva arquitectura y más sobre **mejores recetas, mejores sistemas y mejor evaluación**.

**Pregunta abierta:** ¿Viene otro cambio a nivel arquitectura, o avanzaremos principalmente con scaling y refinamiento hasta que las restricciones fuercen un nuevo paradigma?

---

## Desafíos generales

### 1) Sobreoptimización de benchmarks y crisis de evaluación

Optimizamos para benchmarks porque son fáciles de medir y de vender.

- Chatbot Arena influye en la percepción pública.
- SWE-bench intenta medir capacidad real de software engineering.
- LiveCodeBench se enfoca en evaluación resistente a contaminación.
- ARC-AGI plantea cómo medir generalización.

Scores altos no equivalen a inteligencia en un sentido amplio.

El problema más profundo: los benchmarks son objetivos estáticos en un sistema dinámico. Una vez que todos conocen el test, el ecosistema empieza a entrenar contra el test, directa o indirectamente (incluida la contaminación). Eso no significa que el progreso sea falso, significa que medir se vuelve más difícil.

Un modelo mental que me ayudó: **los evals son como unit tests**.

- Si tus unit tests son malos, puedes shipping software roto mientras todo se ve verde.
- Si tus evals son débiles, puedes shipping un modelo que se ve fuerte en papel pero falla en uso real.

### 2) Monetización

Se está quemando dinero porque el cómputo es caro y la carrera es competitiva.

Los labs están empujados a construir superficies de producto:

- Suscripciones
- APIs
- Productos de medios como Sora

La monetización no es solo sobre profit. Es un requisito para financiar entrenamiento, infraestructura y talento.

Una forma simple de verlo: cada lab está tratando de resolver un objetivo móvil de unit economics mientras sigue compitiendo en capacidad. Esa presión moldea decisiones de producto.

---

## Modelos de Mundo Grandes

Una cita de Fei-Fei Li captura bien la idea. El lenguaje es generativo, pero los mundos siguen reglas físicas complejas. Representar un mundo de manera consistente es mucho más complejo que modelar una señal unidimensional como el lenguaje.

Por eso importan los **modelos de mundo**, la simulación y la dinámica de aprendizaje.

Cuando la gente dice "modelos de mundo", lo interpreto como: modelos que pueden representar cómo evoluciona un mundo, no solo cómo se ve. Idealmente:

- Pueden simular contrafactuales (¿qué pasa si hago X?).
- Son interactivos (no solo generación pasiva de video).
- Preservan consistencia en el tiempo (objetos, física, causalidad).
- Se pueden usar para planificación.

Señales recientes:

- DeepMind y modelos de mundo interactivos
- Meta y representaciones predictivas de video
- NVIDIA y foundation models de IA física

La promesa es reducir la necesidad de datos del mundo real mediante simulación. El riesgo es que las simulaciones sean demasiado limpias para reflejar la realidad.

**Idea clave:** Si podemos simular mejor, podemos aprender más rápido. Pero la calidad de la simulación es el cuello de botella real.

---

## Robótica

La robótica está avanzando, pero aún golpea el cuello de botella clásico de **datos y experiencia del mundo real**.

El progreso suele requerir:

- Teleoperación o demostraciones
- Datasets de trayectorias
- Evaluación en condiciones reales ruidosas

Datasets grandes como Open X-Embodiment buscan escalar aprendizaje entre robots y tareas.

Muchos argumentan que en robótica los datos y la experiencia importan más que el cómputo. Yo lo interpreto así: el cómputo ayuda, pero no hay atajo para la realidad desordenada.

Los modelos de mundo podrían reducir el costo marginal de recolectar demostraciones, pero en el corto plazo la robótica sigue siendo IA más operaciones más hardware más datos.

**Idea clave:** La robótica es donde chocan las restricciones de la capa fundacional: recolectar datos es caro, evaluar es difícil y el despliegue es físico.

---

## Cierre

Si tuviera que resumir mi modelo actual de la capa fundacional en una línea:

**El progreso de la IA sigue siendo rápido, pero cada vez está más condicionado por el mundo físico (chips, energía, despliegue) y por la medición (calidad de datos y evaluación).**

---

## Referencias

1. [OpenAI, "Introducing ChatGPT" (Nov 30, 2022)](https://openai.com/index/chatgpt/)
2. [Vaswani et al., "Attention Is All You Need" (2017)](https://arxiv.org/abs/1706.03762)
3. [Kaplan et al., "Scaling Laws for Neural Language Models" (2020)](https://arxiv.org/abs/2001.08361)
4. [Deng et al., "ImageNet: A Large-Scale Hierarchical Image Database" (CVPR 2009)](https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf)
5. [Krizhevsky et al., "ImageNet Classification with Deep Convolutional Neural Networks" (NeurIPS 2012)](https://proceedings.neurips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf)
6. [IEA, "Electricity 2024"](https://www.iea.org/reports/electricity-2024)
7. [Groq and NVIDIA Licensing Agreement (Dec 16, 2025)](https://groq.com/news/groq-and-nvidia-sign-licensing-agreement-to-enable-nvidia-to-license-groq-lpu-technology)
8. [Groq LPU Inference Engine](https://groq.com/blog/groq-lpu-inference-engine)
9. [Google Cloud TPU](https://cloud.google.com/tpu)
10. [U.S. Trade Administration, Taiwan Semiconductors Guide](https://www.trade.gov/country-commercial-guides/taiwan-semiconductors-including-chip-design-ai)
11. [NVIDIA H100 GPU](https://www.nvidia.com/en-us/data-center/h100/)
12. [Reuters, Lunar Data Center Plans (May 2025)](https://www.reuters.com/world/us/space-based-data-centers-the-new-frontier-in-ai-race-2025-05-27/)
13. [Akash Network](https://akash.network/)
14. [Vast.ai](https://vast.ai/)
15. [Microsoft Azure Extended Zones](https://learn.microsoft.com/en-us/azure/extended-zones/)
16. [Helion Energy](https://www.helionenergy.com/)
17. [Shumailov et al., Model Collapse](https://arxiv.org/abs/2305.17493)
18. [Surge AI Workforce](https://www.surgehq.ai/workforce)
19. [RLVR Paper](https://arxiv.org/abs/2311.02103)
20. [DeepSeek-R1 Technical Report](https://arxiv.org/abs/2501.12948)
21. [Switch Transformers](https://arxiv.org/abs/2101.03961)
22. [Mamba State Space Models](https://arxiv.org/abs/2312.00752)
23. [Chatbot Arena](https://arxiv.org/abs/2403.04132)
24. [SWE-bench](https://arxiv.org/abs/2310.06770)
25. [LiveCodeBench](https://arxiv.org/abs/2403.07974)
26. [ARC-AGI](https://arcprize.org/arc-agi)
27. [ChatGPT Pricing](https://chatgpt.com/pricing/)
28. [OpenAI Sora](https://openai.com/index/sora/)
29. [Fei-Fei Li, World Models Essay](https://drfeifei.substack.com/p/why-we-need-world-models)
30. [DeepMind Genie 3](https://deepmind.google/discover/blog/genie-3-a-new-foundation-for-embodied-ai/)
31. [Meta V-JEPA](https://arxiv.org/abs/2405.09423)
32. [NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/)
33. [Open X-Embodiment](https://arxiv.org/abs/2310.08864)
34. [Epoch AI Robotics Data Bottleneck](https://epoch.ai/gradient-updates/for-robots-data-may-be-the-biggest-bottleneck)
`,
  },
];

const blogPostsEn: BlogPost[] = [
  {
    slug: "ai-2026",
    title: "AI State 2026",
    subtitle: "Notes to catch up on the foundational layer",
    date: "December 31, 2025",
    dateISO: "2025-12-31",
    author: "Alan Arguello",
    summary:
      "Notes on how I caught up with the foundational layer of AI and the industry's main bottlenecks.",
    content: `Since June 2025 I have tried to catch up with advances in AI. And I say "tried" because, given how fast the market evolves, the **Foundational Layer** and the **Application Layer** are two things that each require a huge amount of time on their own.

For quick context: I worked two years as a Software Engineer between 2020 and 2022, before the LLM era. Back then my life was about learning as much software engineering as possible, every single day. Since then I took a more passive role on the technical side and shifted toward a more generalist role.

I use LLMs daily (ChatGPT, Gemini, Claude, etc.), but the technical depth I was operating at was no longer the same. So even though I had context, by this point I was rusty and not up to date on many things.

In the last few months, these were my main sources to get back up to speed:

- Doing vibe coding more actively, especially with tools like v0 or Lovable, and with IDE assistants like Codex, Claude Code, Cursor, etc.
- Starting a WhatsApp group with engineers I knew, to understand what they were thinking.
- Building a product in the application layer (in my case, real time interactive digital avatars).
- Attending and organizing hackathons in San Francisco.
- Consuming more opinions from researchers at the bleeding edge (Karpathy, Fei-Fei Li, Yann LeCun).
- Podcasts with technical guests and themes (Dwarkesh, Lex Fridman, a16z).
- Spending time inside the X (Twitter) bubble, which is where you learn about most things first.

I should also clarify that a large part of my learning focus was on **training** and **data**, because the initial motivator was evaluating the feasibility of starting a data labeling company. To do that, I needed to better understand the real need, the current state, and where the market could be heading.

I am still on this learning path, so any suggestions or feedback are welcome.

---

## Quick map: what I learned (high level)

If you only read one section, make it this:

- The foundational layer is no longer "just models". It is **chips + data centers + power + data pipelines + training recipes**.
- Text was a lucky dataset. As soon as you leave text (audio, video, robotics, enterprise), **data becomes expensive and constrained**.
- **Energy and grid connectivity** are becoming first-order constraints, not footnotes.
- Evaluation is turning into its own bottleneck. We can build stronger models faster than we can **measure** what "stronger" means.
- In robotics and the physical world, the bottleneck is usually not cleverness. It is **experience, operations, and data**.

---

## The base: Foundational Layer

I will split this piece into my learnings on the Foundational Layer, and leave the application layer for a second part.

A simple definition that helped me:

- **Foundational Layer:** the stack that makes frontier models possible (compute, infrastructure, energy, data, training, evaluation).
- **Application Layer:** everything built on top (products, workflows, integrations, distribution, UX, pricing, trust, compliance).

### How did we get here?

AI has gone through many waves. Sometimes there was excitement, and many other times it cooled down because the promise felt far away in practical terms.

Two milestones that are worth remembering:

1. **ImageNet:** in the late 2000s ImageNet was formalized as a massive, hierarchical dataset, built largely through large scale collection and labeling using Amazon Mechanical Turk.
2. **AlexNet (2012):** a model that unintentionally became a symbol of a very concrete advance. Training deep nets on GPUs instead of CPUs changed the performance game.

Still, as useful as these advances were for the field, they did not explode into the mainstream because they felt like lab progress, not something that millions of people would suddenly use.

Fast forward to November 2022: OpenAI launches **ChatGPT**, and mass adoption makes the topic unavoidable.

Part of what is interesting is that ChatGPT takes advantage of an earlier breakthrough: the 2017 paper **Attention Is All You Need**, which proposes the **Transformer** architecture. On top of that, it became increasingly clear what people summarize as scaling laws: with more compute, more data, and the right setup, models tend to improve in a fairly predictable way.

### The pillars driving model development today

At a high level, this is how I see it:

- **Chips** (compute hardware)
- **Infrastructure** (data centers, networks, deployment)
- **Energy** (to power all of that)
- **Data** (and the evaluation and labeling layer that makes it useful)
- **Training algorithms** (Transformers and whatever comes next)

There is also a transversal pillar: **talent**. It is not a minor detail, but it sits as a shadow over everything else.

A mental model that made this easier for me:

- Chips are the engine.
- Data centers are the factory.
- Energy is the fuel.
- Data is the raw material.
- Training algorithms are the recipe.
- Evaluation is the test suite.
- Talent is the constraint across all of it.

---

## Challenges by pillar

### 1) Chips

The biggest structural bottleneck is the **concentration of leading edge manufacturing** in Taiwan, particularly at TSMC. Many summaries cite that a very large share of leading edge production is concentrated there. The exact number is less important than the direction: it is a supply chain choke point.

That introduces a massive geopolitical risk. No one can stop depending on that overnight.

A practical detail that is easy to miss: "chips" is not just the GPU. It is also memory (HBM), packaging, interconnect, and the overall system design that makes training scale. In other words, compute is a supply chain, not a SKU.

On the types of chips:

- For **training**, GPUs have been the de facto standard. Nvidia, for example, positions the H100 as an accelerator for LLM and Transformer workloads.
- For **inference**, there is a whole world of optimization. TPUs and specialized architectures aim to improve cost and performance for serving.
- In parallel, startups like **Groq** have tried to attack inference with custom hardware and compilation (LPUs). In December 2025 Groq announced a licensing agreement with NVIDIA for its LPU technology.

**Key takeaway:** Compute is not only about "how fast is the chip". It is about **how reliably you can get it, cluster it, and feed it**.

**Open question:** Does inference become a commodity (cheap, abundant), or does it remain strategically scarce because it is still gated by power and supply chain?

---

### 2) Infrastructure (data centers and deployment)

Once you have chips, you need to put them into clusters and operate them. Here the challenge is brutally physical:

- There are not enough chips.
- There is not enough data center capacity at the pace demand requires.
- And above all, there is not enough energy and electrical connectivity ready on time.

Data centers are not just "rent racks". They are land, permits, cooling, transformers, networking, logistics, and long lead times. One of the most important constraints is simply: can you get enough power to the site, fast enough, with reasonable reliability?

Two families of ideas that are emerging:

- **Compute off Earth:** proposals exploring data centers in space or even more extreme concepts. In 2025 there were reports about plans for data centers on the Moon, more as a signal of direction than something immediate.
- **Alternative compute markets:** from decentralized networks like Akash to marketplaces like Vast.ai that aim to monetize GPUs and idle capacity.

There is also the **edge** topic. Running inference closer to the user, or closer to the physical world (factories, cameras, robots). Microsoft describes Azure Extended Zones as small footprint extensions of Azure for low latency or data residency.

My read is that infrastructure is entering an industrial mode. Less software only, more real world constraints.

**Key takeaway:** The next bottleneck after "buy GPUs" is often: **power + cooling + deployment reality**.

**Open question:** Will the winning infrastructure play be hyperscalers only, or will new markets (decentralized, regional, vertical) meaningfully absorb demand?

---

### 3) Energy

Data centers imply energy. And the magnitude is no longer a footnote.

Data centers are already a relevant consumer at country scale, with growth driven by digitalization and AI. Beyond any single number, what matters is the trend: demand is growing faster than the ability to connect and distribute efficiently.

From my side, going back to electrical engineering: in many countries there are technical losses (materials, poor configuration, inefficiencies) and non technical losses (theft, lack of measurement, zero optimization in homes and businesses). The **smart grid** dream has existed for years, but implementing it well is extremely hard.

What seems interesting to me:

- **Fusion**, with companies like Helion.
- **Optimization**, through sensors, control, fine grained measurement, and software to reduce waste.
- In the short term, more boring but necessary electrical infrastructure like transmission, substations, and interconnection.
- Also worth watching: anything that reduces time-to-power (permits, grid interconnect, capacity planning). That is not sexy, but it matters.

During an xAI hackathon in December I heard a phrase that stuck with me from Jimmy Ba, xAI cofounder: If we had infinite compute and energy, we would be much further ahead. It captures the bottleneck.

**Key takeaway:** Energy is not only "how much power exists". It is **how fast you can connect it, where, and at what reliability**.

**Open question:** Will power constraints push more training to regions with cheap energy, and more inference to the edge, or will the stack remain centralized?

---

### 4) Data (and evaluation)

With energy and compute, you train. And then you hit data.

The reason LLMs advanced so fast is that **text** is an extremely abundant data type. But the problem becomes obvious as soon as you leave text, or as soon as you need more private or real world data (manufacturing, banking, sensors, robotics).

A framing that helped me: outside text, data is often **locked**, not missing.

- Locked behind privacy, contracts, and incentives.
- Locked behind operations (collecting it is labor).
- Locked behind instrumentation (you need sensors, pipelines, QA).
- Locked behind evaluation (you need to know what "good" looks like).

Three typical paths:

1. **Synthetic data**
2. **Models that need less data**
3. **Collecting and labeling new data**

#### 4.1 Synthetic data and model collapse

Synthetic data helps, but it carries a real risk: **model collapse**. Training new models on data generated by previous models can degrade the distribution, collapse diversity, and amplify artifacts.

In simple terms, if you only feed yourself your own answers, you end up living at the center of your own Gaussian bell.

My practical takeaway: synthetic data is most useful when you can anchor it with reality, like:

- You generate candidates synthetically.
- You verify, filter, or score them against something real (tests, simulators, human experts, or ground truth data).

#### 4.2 Models that need less data

This is the most interesting path conceptually, but also the hardest. The idea that a system can learn a lot from little data, or through self play (like AlphaGo), is powerful, but not trivial to generalize.

A lot of the difficulty is not the idea, it is the environment. Games have clean rules and fast feedback loops. Real life is noisy, slow, and expensive.

#### 4.3 Collecting and labeling data

This is the expensive but direct path. Millions of new examples, high quality, with good evaluation control.

The market has evolved:

- Before, the narrative was crowd labor.
- Today, for many frontier problems, what matters is **expertise** (or at least a smaller group of well-trained specialists, with strong QA).

There is also the topic of RL and verification:

- RLHF became the popular term.
- But for certain domains, you can use verifiable feedback, framed as **Reinforcement Learning with Verifiable Rewards (RLVR)**.

Finally, there is a challenge that feels underestimated: **evaluating reasoning**. Not only does the final answer matter, the path does too. And in many real domains, there is real human ambiguity.

**Key takeaway:** Data is not only "more examples". It is often **collection + incentives + QA + eval design**.

**Open question:** Do we get a breakthrough in learning with less real data, or do we mostly solve it by building better pipelines to collect and verify real world data?

---

### 5) Training algorithms

The Transformer was the big breakthrough. But beyond optimizations and variations, there has not been another equivalent leap that changed the base architecture of the entire industry.

What has happened is refinement in a few directions:

- **Scaling efficiently**, with approaches like mixture of experts.
- **Making inference cheaper**, with better decoding, distillation, quantization, and system-level optimizations.
- **Exploring alternatives**, such as state space models like Mamba.

A useful simplification: training is not just pretraining anymore. A lot of capability and product usefulness comes from post-training (instruction tuning, preference optimization, RL, tool use). So "algorithms" includes the whole training recipe, not only the base architecture.

The consensus seems to be that doing the same thing but bigger eventually hits walls like data, energy, evaluation, and cost.

**Key takeaway:** The next gains are often less about a new architecture and more about **better recipes, better systems, and better evaluation**.

**Open question:** Is there another architecture-level shift coming, or do we get most progress from scaling and refinement until constraints force a new paradigm?

---

## General challenges

### 1) Benchmark overoptimization and the evaluation crisis

We optimize for benchmarks because they are easy to measure and market.

- Chatbot Arena influences public perception.
- SWE-bench attempts to measure real software engineering capability.
- LiveCodeBench focuses on contamination resistant evaluation.
- ARC-AGI raises the question of how to measure generalization.

High scores do not equal intelligence in a broad sense.

The deeper issue: benchmarks are static targets in a dynamic system. Once everyone knows the test, the ecosystem starts training against the test, directly or indirectly (including via contamination). That does not mean progress is fake, it means measurement gets harder.

A mental model that helped me: **evals are like unit tests**.

- If your unit tests are bad, you can ship broken software while looking green.
- If your evals are weak, you can ship a model that looks strong on paper but fails in real use.

### 2) Monetization

Money is being burned because compute is expensive and the race is competitive.

Labs are pushed to build product surfaces:

- Subscriptions
- APIs
- Media products like Sora

Monetization is not just about profit. It is a requirement to fund training, infrastructure, and talent.

One simple way to frame it: every lab is trying to solve a moving target of unit economics while still racing on capability. That pressure shapes product choices.

---

## Large World Models

A quote from Fei-Fei Li captures the idea well. Language is generative, but worlds follow complex physical rules. Representing a world consistently is far more complex than modeling a one dimensional signal like language.

This is why **world models**, simulation, and learning dynamics matter.

When people say "world models", I interpret it as: models that can represent how a world evolves, not only what it looks like. Ideally:

- They can simulate counterfactuals (what happens if I do X?).
- They are interactive (not only passive video generation).
- They preserve consistency over time (objects, physics, causality).
- They can be used for planning.

Recent signals:

- DeepMind and interactive world models
- Meta and predictive video representations
- NVIDIA and physical AI foundation models

The promise is reducing real world data needs through simulation. The risk is simulations that are too clean to reflect reality.

**Key takeaway:** If we can simulate better, we can learn faster. But simulation quality is the real bottleneck.

---

## Robotics

Robotics is advancing, but it still hits the classic bottleneck of **data and real world experience**.

Progress often requires:

- Teleoperation or demonstrations
- Trajectory datasets
- Evaluation in noisy real conditions

Large datasets like Open X-Embodiment aim to scale learning across robots and tasks.

Many argue that in robotics, data and experience matter more than compute. I interpret it as: compute helps, but there is no shortcut to messy reality.

World models could reduce the marginal cost of collecting demonstrations, but in the short term robotics remains AI plus operations plus hardware plus data.

**Key takeaway:** Robotics is where the foundational layer constraints collide: data collection is expensive, evaluation is hard, and deployment is physical.

---

## Closing thoughts

If I had to summarize my current model of the foundational layer in one line:

**AI progress is still fast, but increasingly gated by the physical world (chips, power, deployment) and by measurement (data quality and evaluation).**

---

## References

1. [OpenAI, \"Introducing ChatGPT\" (Nov 30, 2022)](https://openai.com/index/chatgpt/)
2. [Vaswani et al., \"Attention Is All You Need\" (2017)](https://arxiv.org/abs/1706.03762)
3. [Kaplan et al., \"Scaling Laws for Neural Language Models\" (2020)](https://arxiv.org/abs/2001.08361)
4. [Deng et al., \"ImageNet: A Large-Scale Hierarchical Image Database\" (CVPR 2009)](https://www.image-net.org/static_files/papers/imagenet_cvpr09.pdf)
5. [Krizhevsky et al., \"ImageNet Classification with Deep Convolutional Neural Networks\" (NeurIPS 2012)](https://proceedings.neurips.cc/paper/4824-imagenet-classification-with-deep-convolutional-neural-networks.pdf)
6. [IEA, \"Electricity 2024\"](https://www.iea.org/reports/electricity-2024)
7. [Groq and NVIDIA Licensing Agreement (Dec 16, 2025)](https://groq.com/news/groq-and-nvidia-sign-licensing-agreement-to-enable-nvidia-to-license-groq-lpu-technology)
8. [Groq LPU Inference Engine](https://groq.com/blog/groq-lpu-inference-engine)
9. [Google Cloud TPU](https://cloud.google.com/tpu)
10. [U.S. Trade Administration, Taiwan Semiconductors Guide](https://www.trade.gov/country-commercial-guides/taiwan-semiconductors-including-chip-design-ai)
11. [NVIDIA H100 GPU](https://www.nvidia.com/en-us/data-center/h100/)
12. [Reuters, Lunar Data Center Plans (May 2025)](https://www.reuters.com/world/us/space-based-data-centers-the-new-frontier-in-ai-race-2025-05-27/)
13. [Akash Network](https://akash.network/)
14. [Vast.ai](https://vast.ai/)
15. [Microsoft Azure Extended Zones](https://learn.microsoft.com/en-us/azure/extended-zones/)
16. [Helion Energy](https://www.helionenergy.com/)
17. [Shumailov et al., Model Collapse](https://arxiv.org/abs/2305.17493)
18. [Surge AI Workforce](https://www.surgehq.ai/workforce)
19. [RLVR Paper](https://arxiv.org/abs/2311.02103)
20. [DeepSeek-R1 Technical Report](https://arxiv.org/abs/2501.12948)
21. [Switch Transformers](https://arxiv.org/abs/2101.03961)
22. [Mamba State Space Models](https://arxiv.org/abs/2312.00752)
23. [Chatbot Arena](https://arxiv.org/abs/2403.04132)
24. [SWE-bench](https://arxiv.org/abs/2310.06770)
25. [LiveCodeBench](https://arxiv.org/abs/2403.07974)
26. [ARC-AGI](https://arcprize.org/arc-agi)
27. [ChatGPT Pricing](https://chatgpt.com/pricing/)
28. [OpenAI Sora](https://openai.com/index/sora/)
29. [Fei-Fei Li, World Models Essay](https://drfeifei.substack.com/p/why-we-need-world-models)
30. [DeepMind Genie 3](https://deepmind.google/discover/blog/genie-3-a-new-foundation-for-embodied-ai/)
31. [Meta V-JEPA](https://arxiv.org/abs/2405.09423)
32. [NVIDIA Cosmos](https://www.nvidia.com/en-us/ai/cosmos/)
33. [Open X-Embodiment](https://arxiv.org/abs/2310.08864)
34. [Epoch AI Robotics Data Bottleneck](https://epoch.ai/gradient-updates/for-robots-data-may-be-the-biggest-bottleneck)
`,
  },
];

const blogPostsByLocale = {
  es: blogPostsEs,
  en: blogPostsEn,
} as const;

type BlogLocale = keyof typeof blogPostsByLocale;

const defaultLocale: BlogLocale = "es";

export function getBlogPosts(locale: string): BlogPost[] {
  return blogPostsByLocale[locale as BlogLocale] ?? blogPostsByLocale[defaultLocale];
}

export function getBlogPost(locale: string, slug: string): BlogPost | undefined {
  return getBlogPosts(locale).find((post) => post.slug === slug);
}
