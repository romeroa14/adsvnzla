<template>
  <div class="bg-white" v-auto-animate>
    <!-- Hero Section -->
    <section class="relative bg-dark overflow-hidden pt-20 pb-32">
        <div class="absolute inset-0 z-0">
             <!-- Abstract background shapes -->
             <div class="absolute top-0 right-0 w-[600px] h-[600px] bg-primary/20 rounded-full blur-[120px] -translate-y-1/2 translate-x-1/2"></div>
             <div class="absolute bottom-0 left-0 w-[400px] h-[400px] bg-secondary/20 rounded-full blur-[100px] translate-y-1/2 -translate-x-1/4"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10 text-center">
            <span class="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary-light text-sm font-bold mb-6 border border-primary/20 backdrop-blur-sm">
                🚀 Aumenta tus ventas hoy
            </span>
            <h1 class="text-5xl md:text-7xl font-black text-white mb-8 tracking-tight leading-tight">
                Publicidad que <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500">Convierte</span>
            </h1>
            <p class="text-xl md:text-2xl text-gray-400 max-w-2xl mx-auto mb-12">
                Ofrecemos servicios de Trafficker Digital y Gestión de Redes Sociales diseñados para emprendedores y empresas en Venezuela.
            </p>
            <div class="flex flex-col sm:flex-row justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                <a href="#planes" class="bg-primary hover:bg-primary-dark text-white px-8 py-4 rounded-full font-bold text-lg transition-all shadow-lg hover:shadow-primary/50">
                    Ver Planes Ads
                </a>
                <router-link to="/gestion-redes" class="bg-transparent border border-gray-600 text-white hover:bg-white hover:text-dark px-8 py-4 rounded-full font-bold text-lg transition-all">
                    Gestión de Redes
                </router-link>
            </div>
        </div>
    </section>

    <!-- Services Overview -->
    <!-- Services Overview -->
    <section class="py-24 bg-gray-50 relative overflow-hidden">
        <!-- Decoration -->
        <div class="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
                 <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-widest mb-4">
                    Ecosistema Digital
                 </span>
                 <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6">Todo lo que necesitas <br> para <span class="text-primary italic">crecer</span></h2>
                 <p class="text-xl text-gray-500 max-w-2xl mx-auto">
                    Ya sea que necesites tráfico rápido, una comunidad fiel o una imagen impactante. Tenemos el equipo para hacerlo.
                 </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <!-- Card 1: Management -->
                <router-link to="/gestion-redes" class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col items-start relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>

                    <div class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-dark text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10">
                        <i class="ph-users-three"></i>
                    </div>
                    
                    <h3 class="text-2xl font-black mb-4 relative z-10">Gestión de Redes</h3>
                    <p class="text-gray-500 mb-8 leading-relaxed relative z-10 text-sm">
                        Creamos contenido que conecta. Dejamos de lado los posts de relleno y nos enfocamos en construir una tribu leal.
                    </p>
                    
                    <ul class="space-y-3 mb-8 w-full relative z-10">
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-video-camera text-primary mr-2 text-lg"></i> Reels & TikToks (Trends)</li>
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-strategy text-primary mr-2 text-lg"></i> Estrategia con IA</li>
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-map-pin text-primary mr-2 text-lg"></i> Visitas Presenciales</li>
                    </ul>

                    <div class="mt-auto inline-flex items-center text-primary-dark font-bold group-hover:underline decoration-2 underline-offset-4 relative z-10">
                        Ver Detalles
                        <i class="ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </router-link>

                <!-- Card 2: Ads (Middle & Highlighted) -->
                <div class="bg-dark text-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl hover:shadow-red-500/20 transition-all duration-300 border border-gray-800 group flex flex-col items-start relative overflow-hidden transform md:-translate-y-4">
                     <!-- Highlight effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
                    <div class="absolute top-0 right-0 w-40 h-40 bg-red-500/20 rounded-full blur-[60px] -mr-10 -mt-10 animate-pulse"></div>

                    <div class="w-16 h-16 bg-red-600 rounded-2xl flex items-center justify-center text-white text-3xl mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 relative z-10 shadow-lg shadow-red-500/30">
                        <i class="ph-megaphone"></i>
                    </div>
                    
                    <h3 class="text-2xl font-black mb-4 relative z-10">Publicidad (Ads)</h3>
                    <p class="text-gray-400 mb-8 leading-relaxed relative z-10 text-sm">
                        Campañas de alto rendimiento en Meta y Google. Diseñadas para traer ventas, no solo likes. Ideal para lanzamientos.
                    </p>
                    
                    <ul class="space-y-3 mb-8 w-full relative z-10">
                        <li class="flex items-center text-gray-300 text-sm font-medium"><i class="ph-target text-red-500 mr-2 text-lg"></i> Segmentación Láser</li>
                        <li class="flex items-center text-gray-300 text-sm font-medium"><i class="ph-chart-line-up text-red-500 mr-2 text-lg"></i> Retorno de Inversión (ROAS)</li>
                        <li class="flex items-center text-gray-300 text-sm font-medium"><i class="ph-currency-dollar text-red-500 mr-2 text-lg"></i> Desde $1 diario</li>
                    </ul>

                    <a href="#planes" class="mt-auto inline-flex items-center text-white font-bold group-hover:text-red-500 transition-colors relative z-10">
                        Ver Planes
                        <i class="ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </a>
                </div>

                <!-- Card 3: Design -->
                <div class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col items-start relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-blue-50 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-blue-100 transition-colors"></div>

                    <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-blue-600 text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10">
                        <i class="ph-paint-brush-broad"></i>
                    </div>
                    
                    <h3 class="text-2xl font-black mb-4 relative z-10">Diseño Gráfico</h3>
                    <p class="text-gray-500 mb-8 leading-relaxed relative z-10 text-sm">
                        Tu marca entra por los ojos. Diseñamos identidades visuales que transmiten profesionalismo y confianza al instante.
                    </p>
                    
                    <ul class="space-y-3 mb-8 w-full relative z-10">
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-pencil-circle text-blue-500 mr-2 text-lg"></i> Identidad de Marca</li>
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-images text-blue-500 mr-2 text-lg"></i> Social Media Kits</li>
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-monitor text-blue-500 mr-2 text-lg"></i> Diseño Web UI/UX</li>
                    </ul>

                    <router-link to="/diseno-grafico" class="mt-auto inline-flex items-center text-blue-600 font-bold group-hover:underline decoration-2 underline-offset-4 relative z-10">
                        Ver Portafolio
                        <i class="ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </router-link>
                </div>
            </div>
        </div>
    </section>

    <!-- CEO / About Section -->
    <section class="py-24 bg-white relative overflow-hidden">
        <!-- Abstract Decoration -->
        <div class="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-20 -mt-20"></div>
        <div class="absolute bottom-0 left-0 w-64 h-64 bg-secondary/5 rounded-full blur-3xl -ml-20 -mb-20"></div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="flex flex-col md:flex-row items-center gap-12 max-w-6xl mx-auto">
                <div class="w-full md:w-5/12 relative group">
                     <div class="absolute inset-0 bg-primary/20 rounded-[2rem] blur-xl transform translate-x-4 translate-y-4 group-hover:translate-x-2 group-hover:translate-y-2 transition-transform duration-500"></div>
                     <img src="@/assets/CEO.png" alt="Alfredo Romero" class="relative z-10 w-full rounded-[2rem] shadow-2xl rotate-2 hover:rotate-0 transition-transform duration-500 object-cover border-4 border-white">
                </div>
                <div class="w-full md:w-7/12 text-left">
                    <span class="text-secondary font-bold tracking-widest uppercase mb-3 block text-sm">El Experto Detrás</span>
                    <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6 leading-tight">Alfredo Romero</h2>
                    <h3 class="text-xl text-primary font-bold mb-6">Programador Full Stack & Trafficker Digital</h3>
                    <p class="text-gray-600 text-lg mb-6 leading-relaxed">
                        No soy solo un "marketero" que toca botones. Mi background como <span class="font-bold text-gray-800">Desarrollador de Software</span> me permite entender los algoritmos de las plataformas publicitarias desde su código fuente.
                    </p>
                    <p class="text-gray-600 text-lg mb-8 leading-relaxed">
                        Combino la lógica estructurada de la programación (Laravel, Python, SQL) con la psicología de ventas para crear <span class="font-bold text-secondary">Ecosistemas Digitales</span> que no solo traen "likes", sino facturación real y medible.
                    </p>
                    
                    <div class="space-y-4">
                        <p class="text-xs font-bold text-gray-400 uppercase tracking-wider">Tech Stack & Herramientas</p>
                        <div class="flex flex-wrap gap-4 items-center opacity-80 hover:opacity-100 transition-opacity">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/7/7b/Meta_Platforms_Inc._logo.svg" class="h-6 hover:scale-110 transition-transform" title="Meta Ads">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" class="h-6 hover:scale-110 transition-transform" title="Google Ads">
                            <img src="@/assets/N8n-logo-new.svg" class="h-10 hover:scale-110 transition-transform" title="n8n">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/c3/Python-logo-notext.svg" class="h-8 hover:scale-110 transition-transform" title="Python">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/c/cf/New_Power_BI_Logo.svg" class="h-8 hover:scale-110 transition-transform" title="Power BI">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/2/29/Postgresql_elephant.svg" class="h-8 hover:scale-110 transition-transform" title="PostgreSQL">
                            <img src="https://upload.wikimedia.org/wikipedia/commons/9/9a/Laravel.svg" class="h-8 hover:scale-110 transition-transform" title="Laravel">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing / Ads Calculator -->
    <section id="planes" class="py-24 bg-gray-50 relative">
        <div class="container mx-auto px-4">
             <div class="text-center mb-16">
                 <h2 class="text-4xl font-black text-gray-900 mb-4">Planes de Publicidad</h2>
                 <p class="text-xl text-gray-500">Calcula tu inversión y escala tu negocio.</p>
            </div>
            
            <AdsCalculator />
        </div>
    </section>

    <!-- Social Media Management Pricing -->


    <!-- Basic $9 Plan Callout -->
    <!-- Personalized Audit Callout -->
    <section class="py-20 bg-gradient-to-br from-gray-900 to-black text-white relative overflow-hidden">
        <div class="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-[100px] transform translate-x-1/3 -translate-y-1/3"></div>
        
        <div class="container mx-auto px-4 relative z-10 text-center">
            <span class="inline-block py-1 px-3 rounded-full bg-primary/20 text-primary mb-6 border border-primary/20 text-sm font-bold uppercase tracking-wider">
                🚀 Para empresas en crecimiento
            </span>
            <h2 class="text-3xl md:text-5xl font-black mb-6">¿Tu negocio factura más de $2,000/mes?</h2>
            <p class="text-gray-400 mb-10 max-w-2xl mx-auto text-lg">
                No dejes tu crecimiento al azar. Solicita una <strong>Auditoría de Crecimiento Personalizada</strong> donde analizaremos tus números y te daremos un plan de ruta técnico para escalar.
            </p>
            <router-link to="/consultoria" class="inline-flex items-center gap-2 bg-primary hover:bg-white hover:text-black text-black font-bold px-10 py-4 rounded-full transition-all hover:scale-105 shadow-[0_0_30px_rgba(242,188,42,0.3)]">
                Ver Servicio de Consultoría
                <i class="ph-arrow-right font-bold"></i>
            </router-link>
            <p class="mt-6 text-sm text-gray-500">Cupos limitados por mes. Solo para dueños de negocio serios.</p>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AdsCalculator from '../components/pricing/AdsCalculator.vue';
</script>
