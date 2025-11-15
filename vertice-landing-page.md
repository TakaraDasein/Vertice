# VÉRTICE - Landing Page con GSAP Scroll Snap

## Estructura HTML Completa

\`\`\`html
<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>VÉRTICE - Laboratorio de Soluciones Sostenibles</title>
    <meta name="description" content="VÉRTICE impulsa transformaciones sostenibles desde el territorio con enfoque de triple impacto: social, ambiental y económico.">
    
    <!-- GSAP CDN - Versiones Estables -->
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/gsap.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollTrigger.min.js"></script>
    <script src="https://cdnjs.cloudflare.com/ajax/libs/gsap/3.12.2/ScrollToPlugin.min.js"></script>
    
    <!-- Google Fonts -->
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Playfair+Display:wght@400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
    <!-- Navegación Fija -->
    <nav class="nav-fixed">
        <div class="nav-container">
            <div class="nav-logo">
                <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-Ii6kBolG6pZxDsrcYz5fkiqhYJBpXc.png" alt="VÉRTICE Logo" class="logo">
                <span class="logo-text">VÉRTICE</span>
            </div>
            <div class="nav-indicators">
                <div class="nav-dot active" data-section="0"></div>
                <div class="nav-dot" data-section="1"></div>
                <div class="nav-dot" data-section="2"></div>
                <div class="nav-dot" data-section="3"></div>
                <div class="nav-dot" data-section="4"></div>
                <div class="nav-dot" data-section="5"></div>
                <div class="nav-dot" data-section="6"></div>
            </div>
        </div>
    </nav>

    <!-- Sección 1: Hero -->
    <section class="panel hero-section" data-section="0">
        <div class="container">
            <div class="hero-content">
                <div class="hero-logo">
                    <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/17-Ii6kBolG6pZxDsrcYz5fkiqhYJBpXc.png" alt="VÉRTICE Logo" class="hero-logo-img">
                </div>
                <h1 class="hero-title">
                    <span class="title-main">VÉRTICE</span>
                    <span class="title-subtitle">laboratorio de soluciones</span>
                </h1>
                <p class="hero-description">
                    Impulsa <strong>transformaciones sostenibles</strong> desde el territorio
                </p>
                <div class="hero-cta">
                    <button class="cta-button primary" onclick="goToSection(1)">
                        Conoce más
                    </button>
                </div>
            </div>
        </div>
        <div class="scroll-indicator">
            <div class="scroll-arrow"></div>
        </div>
    </section>

    <!-- Sección 2: Qué es VÉRTICE -->
    <section class="panel about-section" data-section="1">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title">¿Qué es VÉRTICE?</h2>
                <div class="about-grid">
                    <div class="about-text">
                        <p class="lead-text">
                            VÉRTICE es una <strong>plataforma de innovación</strong> orientada al desarrollo de proyectos con enfoque de <strong>triple impacto</strong>: impacto social, ambiental y económico.
                        </p>
                        <p>
                            Diseñamos estrategias, generamos conocimiento y articulamos actores para transformar desafíos en soluciones sostenibles.
                        </p>
                        <p>
                            Nuestro enfoque integra <strong>tecnología, investigación y participación comunitaria</strong> para impulsar modelos de cambio efectivos y escalables.
                        </p>
                        <div class="highlight-box">
                            <p>
                                En un mundo que exige respuestas ágiles y responsables, en VÉRTICE <strong>convertimos ideas en impacto real</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección 3: Triple Impacto -->
    <section class="panel impact-section" data-section="2">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title">Triple Impacto</h2>
                <div class="impact-grid">
                    <div class="impact-card social">
                        <div class="impact-icon">🤝</div>
                        <h3>Impacto Social</h3>
                        <p>Fortalecimiento de comunidades y desarrollo de capacidades locales para la transformación social.</p>
                    </div>
                    <div class="impact-card environmental">
                        <div class="impact-icon">🌱</div>
                        <h3>Impacto Ambiental</h3>
                        <p>Soluciones sostenibles que protegen y restauran los ecosistemas naturales.</p>
                    </div>
                    <div class="impact-card economic">
                        <div class="impact-icon">💡</div>
                        <h3>Impacto Económico</h3>
                        <p>Modelos económicos inclusivos que generen valor compartido y desarrollo territorial.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección 4: Servicios -->
    <section class="panel services-section" data-section="3">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title">Nuestros Servicios</h2>
                <div class="services-grid">
                    <div class="service-card">
                        <div class="service-number">01</div>
                        <h3>Consultoría en Sostenibilidad Ambiental</h3>
                        <p>Desarrollo de estrategias ambientales integrales para organizaciones y territorios.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-number">02</div>
                        <h3>Fortalecimiento Institucional y Gobernanza Local</h3>
                        <p>Construcción de capacidades institucionales para una gobernanza efectiva y participativa.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-number">03</div>
                        <h3>Gestión del Conocimiento y Sistematización</h3>
                        <p>Documentación y transferencia de aprendizajes para la replicabilidad de experiencias exitosas.</p>
                    </div>
                    <div class="service-card">
                        <div class="service-number">04</div>
                        <h3>Facilitación y Procesos Participativos</h3>
                        <p>Diseño y facilitación de espacios de diálogo y construcción colectiva de soluciones.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección 5: Metodología -->
    <section class="panel methodology-section" data-section="4">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title">Metodología de Trabajo</h2>
                <div class="methodology-flow">
                    <div class="methodology-step">
                        <div class="step-number">1</div>
                        <h3>Diagnóstico</h3>
                        <p>Territorio como punto de partida</p>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="methodology-step">
                        <div class="step-number">2</div>
                        <h3>Diseño</h3>
                        <p>Enfoque diferencial</p>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="methodology-step">
                        <div class="step-number">3</div>
                        <h3>Implementación</h3>
                        <p>Participación genuina</p>
                    </div>
                    <div class="flow-arrow">→</div>
                    <div class="methodology-step">
                        <div class="step-number">4</div>
                        <h3>Seguimiento</h3>
                        <p>Sostenibilidad como horizonte</p>
                    </div>
                </div>
                <div class="methodology-principles">
                    <div class="principle">
                        <strong>Territorio como punto de partida:</strong> Reconocemos las particularidades y potencialidades locales.
                    </div>
                    <div class="principle">
                        <strong>Enfoque diferencial:</strong> Adaptamos nuestras estrategias a las necesidades específicas de cada contexto.
                    </div>
                    <div class="principle">
                        <strong>Participación genuina:</strong> Involucramos activamente a las comunidades en todo el proceso.
                    </div>
                    <div class="principle">
                        <strong>Sostenibilidad como horizonte:</strong> Buscamos impactos duraderos y transformadores.
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección 6: Quién está detrás -->
    <section class="panel team-section" data-section="5">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title">¿Quién está detrás de VÉRTICE?</h2>
                <div class="team-profile">
                    <div class="profile-image">
                        <img src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/os-9xPGE6FMatH7WokzbC9FhBYyoXQ6OQ.png" alt="Oscar Abel Bermeo Sotelo" class="profile-img">
                    </div>
                    <div class="profile-content">
                        <h3 class="profile-name">Oscar Abel Bermeo Sotelo</h3>
                        <p class="profile-title">Politólogo - Magíster en Sostenibilidad</p>
                        <div class="profile-description">
                            <p>
                                Politólogo, especialista en Gerencia Social, con estudios en alta gerencial y Magíster en sostenibilidad con <strong>más de 15 años de experiencia</strong> liderando proyectos con impacto social, institucional, ambiental y territorial.
                            </p>
                            <p>
                                Ha trabajado en diferentes agencias de Naciones Unidas y en organizaciones internacionales como: el Programa de Naciones Unidas para el Desarrollo (PNUD), Oficina de Coordinación De Asuntos Humanitarios (OCHA), HelpAge International, Consejo Noruego para Refugiados, Opción Legal, entre otras.
                            </p>
                            <p>
                                Hoy lidera VÉRTICE como un <strong>espacio de co-creación para nuevas formas de transformación desde lo local</strong>.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Sección 7: Contacto -->
    <section class="panel contact-section" data-section="6">
        <div class="container">
            <div class="section-content">
                <h2 class="section-title">Conectemos</h2>
                <div class="contact-content">
                    <div class="contact-text">
                        <p class="contact-lead">
                            ¿Tienes un proyecto que puede generar <strong>triple impacto</strong>?
                        </p>
                        <p>
                            Conversemos sobre cómo VÉRTICE puede acompañarte en la transformación de ideas en soluciones sostenibles.
                        </p>
                    </div>
                    <div class="contact-info">
                        <div class="contact-item">
                            <div class="contact-icon">📱</div>
                            <a href="tel:+573013717138" class="contact-link">+57 301 3717138</a>
                        </div>
                        <div class="contact-item">
                            <div class="contact-icon">💬</div>
                            <a href="https://wa.me/573013717138" class="contact-link" target="_blank">WhatsApp</a>
                        </div>
                    </div>
                    <div class="contact-cta">
                        <button class="cta-button secondary" onclick="window.open('https://wa.me/573013717138', '_blank')">
                            Iniciar conversación
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </section>
</body>
</html>
\`\`\`

## CSS Completo con Paleta de Colores VÉRTICE

\`\`\`css
/* Variables CSS - Paleta VÉRTICE */
:root {
    --primary-green: #285046;
    --accent-orange: #dc8e57;
    --secondary-green: #34c4a4;
    --white: #ffffff;
    --light-gray: #f8f9fa;
    --dark-gray: #2c3e50;
    --text-dark: #1a1a1a;
    --text-light: #666666;
    
    /* Tipografía */
    --font-primary: 'Inter', sans-serif;
    --font-display: 'Playfair Display', serif;
    
    /* Espaciado */
    --container-max-width: 1200px;
    --section-padding: 2rem;
}

/* Reset y Base */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

html {
    scroll-behavior: smooth;
}

body {
    font-family: var(--font-primary);
    line-height: 1.6;
    color: var(--text-dark);
    overflow-x: hidden;
}

/* Contenedor Principal */
.container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--section-padding);
}

/* Paneles Base */
.panel {
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    will-change: transform;
    position: relative;
    padding: var(--section-padding);
}

/* Navegación Fija */
.nav-fixed {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    z-index: 1000;
    background: rgba(255, 255, 255, 0.95);
    backdrop-filter: blur(10px);
    border-bottom: 1px solid rgba(40, 80, 70, 0.1);
    padding: 1rem 0;
}

.nav-container {
    max-width: var(--container-max-width);
    margin: 0 auto;
    padding: 0 var(--section-padding);
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.nav-logo {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.logo {
    height: 32px;
    width: auto;
}

.logo-text {
    font-family: var(--font-display);
    font-weight: 600;
    font-size: 1.25rem;
    color: var(--primary-green);
}

.nav-indicators {
    display: flex;
    gap: 0.5rem;
}

.nav-dot {
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background: rgba(40, 80, 70, 0.3);
    cursor: pointer;
    transition: all 0.3s ease;
}

.nav-dot.active {
    background: var(--primary-green);
    transform: scale(1.2);
}

/* Sección Hero */
.hero-section {
    background: linear-gradient(135deg, var(--primary-green) 0%, var(--secondary-green) 100%);
    color: var(--white);
    text-align: center;
}

.hero-content {
    max-width: 800px;
}

.hero-logo-img {
    height: 80px;
    width: auto;
    margin-bottom: 2rem;
    filter: brightness(0) invert(1);
}

.hero-title {
    margin-bottom: 2rem;
}

.title-main {
    display: block;
    font-family: var(--font-display);
    font-size: clamp(3rem, 8vw, 6rem);
    font-weight: 700;
    line-height: 0.9;
    margin-bottom: 0.5rem;
}

.title-subtitle {
    display: block;
    font-size: clamp(1.2rem, 3vw, 2rem);
    font-weight: 300;
    opacity: 0.9;
}

.hero-description {
    font-size: clamp(1.1rem, 2.5vw, 1.5rem);
    margin-bottom: 3rem;
    opacity: 0.95;
}

.scroll-indicator {
    position: absolute;
    bottom: 2rem;
    left: 50%;
    transform: translateX(-50%);
    animation: bounce 2s infinite;
}

.scroll-arrow {
    width: 24px;
    height: 24px;
    border: 2px solid var(--white);
    border-top: none;
    border-left: none;
    transform: rotate(45deg);
}

@keyframes bounce {
    0%, 20%, 50%, 80%, 100% { transform: translateX(-50%) translateY(0); }
    40% { transform: translateX(-50%) translateY(-10px); }
    60% { transform: translateX(-50%) translateY(-5px); }
}

/* Sección About */
.about-section {
    background: var(--light-gray);
}

.section-content {
    max-width: 900px;
    text-align: center;
}

.section-title {
    font-family: var(--font-display);
    font-size: clamp(2.5rem, 5vw, 4rem);
    color: var(--primary-green);
    margin-bottom: 3rem;
    font-weight: 600;
}

.about-text {
    text-align: left;
    font-size: 1.1rem;
    line-height: 1.8;
}

.lead-text {
    font-size: 1.3rem;
    color: var(--primary-green);
    margin-bottom: 2rem;
}

.highlight-box {
    background: var(--accent-orange);
    color: var(--white);
    padding: 2rem;
    border-radius: 12px;
    margin-top: 2rem;
    font-size: 1.2rem;
    text-align: center;
}

/* Sección Triple Impacto */
.impact-section {
    background: var(--white);
}

.impact-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.impact-card {
    background: var(--light-gray);
    padding: 2.5rem 2rem;
    border-radius: 16px;
    text-align: center;
    transition: transform 0.3s ease, box-shadow 0.3s ease;
    border-top: 4px solid var(--secondary-green);
}

.impact-card:hover {
    transform: translateY(-8px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.impact-card.social { border-top-color: var(--primary-green); }
.impact-card.environmental { border-top-color: var(--secondary-green); }
.impact-card.economic { border-top-color: var(--accent-orange); }

.impact-icon {
    font-size: 3rem;
    margin-bottom: 1.5rem;
}

.impact-card h3 {
    font-family: var(--font-display);
    font-size: 1.5rem;
    color: var(--primary-green);
    margin-bottom: 1rem;
}

/* Sección Servicios */
.services-section {
    background: var(--primary-green);
    color: var(--white);
}

.services-section .section-title {
    color: var(--white);
}

.services-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 2rem;
    margin-top: 3rem;
}

.service-card {
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
    padding: 2rem;
    border-radius: 16px;
    border: 1px solid rgba(255, 255, 255, 0.2);
    transition: transform 0.3s ease;
}

.service-card:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.15);
}

.service-number {
    font-family: var(--font-display);
    font-size: 2rem;
    font-weight: 700;
    color: var(--accent-orange);
    margin-bottom: 1rem;
}

.service-card h3 {
    font-size: 1.3rem;
    margin-bottom: 1rem;
    line-height: 1.4;
}

/* Sección Metodología */
.methodology-section {
    background: var(--light-gray);
}

.methodology-flow {
    display: flex;
    align-items: center;
    justify-content: center;
    flex-wrap: wrap;
    gap: 1rem;
    margin: 3rem 0;
}

.methodology-step {
    background: var(--white);
    padding: 2rem 1.5rem;
    border-radius: 16px;
    text-align: center;
    min-width: 200px;
    box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);
}

.step-number {
    width: 50px;
    height: 50px;
    background: var(--secondary-green);
    color: var(--white);
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    font-weight: 700;
    font-size: 1.2rem;
    margin: 0 auto 1rem;
}

.flow-arrow {
    font-size: 2rem;
    color: var(--accent-orange);
    font-weight: bold;
}

.methodology-principles {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 1.5rem;
    margin-top: 3rem;
}

.principle {
    background: var(--white);
    padding: 1.5rem;
    border-radius: 12px;
    border-left: 4px solid var(--accent-orange);
}

/* Sección Team */
.team-section {
    background: var(--white);
}

.team-profile {
    display: grid;
    grid-template-columns: 1fr 2fr;
    gap: 4rem;
    align-items: center;
    margin-top: 3rem;
}

.profile-img {
    width: 100%;
    max-width: 300px;
    height: auto;
    border-radius: 20px;
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.1);
}

.profile-name {
    font-family: var(--font-display);
    font-size: 2rem;
    color: var(--primary-green);
    margin-bottom: 0.5rem;
}

.profile-title {
    font-size: 1.2rem;
    color: var(--accent-orange);
    font-weight: 600;
    margin-bottom: 2rem;
}

.profile-description {
    font-size: 1.1rem;
    line-height: 1.8;
    text-align: left;
}

/* Sección Contacto */
.contact-section {
    background: linear-gradient(135deg, var(--secondary-green) 0%, var(--primary-green) 100%);
    color: var(--white);
    text-align: center;
}

.contact-section .section-title {
    color: var(--white);
}

.contact-content {
    max-width: 600px;
}

.contact-lead {
    font-size: 1.4rem;
    margin-bottom: 2rem;
}

.contact-info {
    display: flex;
    justify-content: center;
    gap: 2rem;
    margin: 3rem 0;
}

.contact-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.contact-icon {
    font-size: 1.5rem;
}

.contact-link {
    color: var(--white);
    text-decoration: none;
    font-size: 1.2rem;
    font-weight: 500;
    transition: opacity 0.3s ease;
}

.contact-link:hover {
    opacity: 0.8;
}

/* Botones CTA */
.cta-button {
    padding: 1rem 2.5rem;
    border: none;
    border-radius: 50px;
    font-size: 1.1rem;
    font-weight: 600;
    cursor: pointer;
    transition: all 0.3s ease;
    text-decoration: none;
    display: inline-block;
}

.cta-button.primary {
    background: var(--accent-orange);
    color: var(--white);
}

.cta-button.primary:hover {
    background: #c67a47;
    transform: translateY(-2px);
}

.cta-button.secondary {
    background: var(--white);
    color: var(--primary-green);
}

.cta-button.secondary:hover {
    background: var(--light-gray);
    transform: translateY(-2px);
}

/* Responsive Design */
@media (max-width: 768px) {
    .nav-container {
        padding: 0 1rem;
    }
    
    .nav-indicators {
        display: none;
    }
    
    .container {
        padding: 0 1rem;
    }
    
    .methodology-flow {
        flex-direction: column;
    }
    
    .flow-arrow {
        transform: rotate(90deg);
    }
    
    .team-profile {
        grid-template-columns: 1fr;
        text-align: center;
    }
    
    .contact-info {
        flex-direction: column;
        gap: 1rem;
    }
    
    .impact-grid,
    .services-grid {
        grid-template-columns: 1fr;
    }
}

/* Animaciones de entrada */
.fade-in {
    opacity: 0;
    transform: translateY(30px);
    transition: all 0.8s ease;
}

.fade-in.visible {
    opacity: 1;
    transform: translateY(0);
}

/* Accesibilidad */
@media (prefers-reduced-motion: reduce) {
    * {
        animation-duration: 0.01ms !important;
        animation-iteration-count: 1 !important;
        transition-duration: 0.01ms !important;
    }
    
    .scroll-indicator {
        animation: none;
    }
}

/* Estados de focus para accesibilidad */
.nav-dot:focus,
.cta-button:focus,
.contact-link:focus {
    outline: 2px solid var(--accent-orange);
    outline-offset: 2px;
}
\`\`\`

## JavaScript/TypeScript Optimizado

\`\`\`javascript
// Registrar plugins de GSAP
gsap.registerPlugin(ScrollTrigger, ScrollToPlugin);

// Variables globales
let panels = gsap.utils.toArray(".panel");
let observer;
let scrollTween;
let currentSection = 0;

// Configuración para dispositivos táctiles
if (ScrollTrigger.isTouch === 1) {
    observer = ScrollTrigger.normalizeScroll(true);
}

// Prevenir interrupciones en dispositivos táctiles
document.addEventListener("touchstart", e => {
    if (scrollTween) {
        e.preventDefault();
        e.stopImmediatePropagation();
    }
}, {capture: true, passive: false});

// Función para navegar a una sección específica
function goToSection(i) {
    if (i === currentSection) return;
    
    scrollTween = gsap.to(window, {
        scrollTo: {y: i * innerHeight, autoKill: false},
        onStart: () => {
            if (!observer) return;
            observer.disable();
            observer.enable();
        },
        duration: 1,
        ease: "power2.inOut",
        onComplete: () => {
            scrollTween = null;
            updateNavigation(i);
        },
        overwrite: true
    });
}

// Actualizar navegación
function updateNavigation(sectionIndex) {
    currentSection = sectionIndex;
    
    // Actualizar indicadores de navegación
    document.querySelectorAll('.nav-dot').forEach((dot, index) => {
        dot.classList.toggle('active', index === sectionIndex);
    });
}

// Crear ScrollTriggers para cada panel
panels.forEach((panel, i) => {
    ScrollTrigger.create({
        trigger: panel,
        start: "top bottom",
        end: "+=199%",
        onToggle: self => {
            if (self.isActive && !scrollTween) {
                goToSection(i);
            }
        }
    });
    
    // Animaciones de entrada para contenido
    const content = panel.querySelector('.section-content, .hero-content');
    if (content) {
        gsap.fromTo(content.children, {
            y: 50,
            opacity: 0
        }, {
            y: 0,
            opacity: 1,
            duration: 0.8,
            stagger: 0.2,
            ease: "power2.out",
            scrollTrigger: {
                trigger: panel,
                start: "top 80%",
                end: "bottom 20%",
                toggleActions: "play none none reverse"
            }
        });
    }
});

// ScrollTrigger de respaldo para snap
ScrollTrigger.create({
    start: 0, 
    end: "max",
    snap: 1 / (panels.length - 1)
});

// Navegación con teclado
document.addEventListener('keydown', (e) => {
    if (scrollTween) return;
    
    switch(e.key) {
        case 'ArrowDown':
        case 'PageDown':
            e.preventDefault();
            if (currentSection < panels.length - 1) {
                goToSection(currentSection + 1);
            }
            break;
        case 'ArrowUp':
        case 'PageUp':
            e.preventDefault();
            if (currentSection > 0) {
                goToSection(currentSection - 1);
            }
            break;
        case 'Home':
            e.preventDefault();
            goToSection(0);
            break;
        case 'End':
            e.preventDefault();
            goToSection(panels.length - 1);
            break;
    }
});

// Navegación con indicadores
document.querySelectorAll('.nav-dot').forEach((dot, index) => {
    dot.addEventListener('click', () => goToSection(index));
    
    // Accesibilidad
    dot.setAttribute('role', 'button');
    dot.setAttribute('aria-label', `Ir a sección ${index + 1}`);
    dot.setAttribute('tabindex', '0');
    
    dot.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            goToSection(index);
        }
    });
});

// Navegación con rueda del mouse (opcional)
let wheelTimeout;
document.addEventListener('wheel', (e) => {
    if (scrollTween) return;
    
    clearTimeout(wheelTimeout);
    wheelTimeout = setTimeout(() => {
        if (e.deltaY > 0 && currentSection < panels.length - 1) {
            goToSection(currentSection + 1);
        } else if (e.deltaY < 0 && currentSection > 0) {
            goToSection(currentSection - 1);
        }
    }, 50);
}, { passive: true });

// Inicialización
document.addEventListener('DOMContentLoaded', () => {
    // Configurar estado inicial
    updateNavigation(0);
    
    // Animación inicial del hero
    gsap.fromTo('.hero-content > *', {
        y: 100,
        opacity: 0
    }, {
        y: 0,
        opacity: 1,
        duration: 1,
        stagger: 0.3,
        ease: "power2.out",
        delay: 0.5
    });
});

// Manejo de redimensionamiento
window.addEventListener('resize', () => {
    ScrollTrigger.refresh();
});

// Funciones de utilidad para accesibilidad
function announceSection(sectionName) {
    const announcement = document.createElement('div');
    announcement.setAttribute('aria-live', 'polite');
    announcement.setAttribute('aria-atomic', 'true');
    announcement.className = 'sr-only';
    announcement.textContent = `Navegando a sección: ${sectionName}`;
    document.body.appendChild(announcement);
    
    setTimeout(() => {
        document.body.removeChild(announcement);
    }, 1000);
}

// Exportar funciones para uso global
window.goToSection = goToSection;
\`\`\`

## Instrucciones de Implementación

### 1. Estructura de Archivos Recomendada
\`\`\`
vertice-landing/
├── index.html
├── css/
│   └── styles.css
├── js/
│   └── main.js
├── assets/
│   ├── images/
│   └── fonts/
└── README.md
\`\`\`

### 2. Optimizaciones de Performance
- **Lazy Loading**: Las imágenes se cargan de forma diferida
- **Critical CSS**: Estilos críticos inline en el `<head>`
- **Preload**: Fuentes y recursos críticos con `rel="preload"`
- **Compression**: Minificar CSS y JS para producción

### 3. SEO y Accesibilidad
- **Meta Tags**: Título, descripción y Open Graph configurados
- **Semantic HTML**: Uso correcto de elementos semánticos
- **ARIA Labels**: Etiquetas de accesibilidad para navegación
- **Keyboard Navigation**: Navegación completa con teclado
- **Screen Readers**: Anuncios de cambio de sección

### 4. Compatibilidad de Navegadores
- **Chrome/Edge**: 88+
- **Firefox**: 85+
- **Safari**: 14+
- **Mobile**: iOS 14+, Android 8+

### 5. Consideraciones de Deployment
- **CDN**: Usar CDN para GSAP en producción
- **Fallbacks**: CSS Grid con fallbacks para navegadores antiguos
- **Progressive Enhancement**: Funcionalidad básica sin JavaScript

Esta implementación proporciona una landing page completa, optimizada y accesible para VÉRTICE, utilizando las mejores prácticas de desarrollo web moderno y el sistema de scroll snap de GSAP.
