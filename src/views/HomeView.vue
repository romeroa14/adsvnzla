<template>
  <div class="bg-white" v-auto-animate>
    <!-- Hero Section -->
    <section class="relative bg-dark overflow-hidden pt-28 pb-40">
        <!-- Animated Background Elements -->
        <div class="absolute inset-0 z-0 pointer-events-none">
             <!-- Ambient Glows -->
             <div class="absolute top-[-10%] right-[-10%] w-[800px] h-[800px] bg-primary/20 rounded-full blur-[160px] animate-pulse"></div>
             <div class="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-secondary/10 rounded-full blur-[140px] "></div>
             
             <!-- Pattern Overlay -->
             <div class="absolute inset-0 opacity-[0.03] bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
             
             <!-- Floating Particles (CSS only decor) -->
             <div class="absolute top-1/4 left-1/4 w-2 h-2 bg-secondary rounded-full blur-sm opacity-50 animate-bounce"></div>
             <div class="absolute top-1/3 right-1/4 w-3 h-3 bg-primary-vibrant rounded-full blur-sm opacity-30 animate-pulse"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10">
            <div class="max-w-4xl mx-auto text-center">
                <span class="inline-flex items-center gap-2 py-2 px-4 rounded-full bg-primary-vibrant/10 text-primary-vibrant text-sm font-bold mb-8 border border-primary-vibrant/30 backdrop-blur-md shadow-[0_0_20px_rgba(227,18,39,0.2)]">
                    <span class="relative flex h-2 w-2">
                        <span class="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary-vibrant opacity-75"></span>
                        <span class="relative inline-flex rounded-full h-2 w-2 bg-primary-vibrant"></span>
                    </span>
                    🚀 Aumenta tus ventas hoy
                </span>
                
                <h1 class="text-6xl md:text-8xl font-black text-white mb-8 tracking-tighter leading-none">
                    Publicidad que <br>
                    <span class="text-transparent bg-clip-text bg-gradient-to-r from-primary-vibrant via-secondary to-primary-vibrant bg-[length:200%_auto] animate-gradient-x">
                        Convierte
                    </span>
                </h1>
                
                <p class="text-xl md:text-2xl text-gray-300 max-w-2xl mx-auto mb-14 leading-relaxed font-medium">
                    Ofrecemos servicios de <span class="text-white font-bold">Trafficker Digital</span> y <span class="text-white font-bold">Gestión de Redes</span> diseñados para escalar negocios en Venezuela.
                </p>
                
                <div class="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-8">
                    <a href="#planes" class="group relative px-10 py-5 bg-primary-vibrant text-white rounded-2xl font-black text-xl transition-all hover:scale-105 hover:shadow-[0_0_40px_rgba(227,18,39,0.4)] active:scale-95 overflow-hidden">
                        <span class="relative z-10 flex items-center gap-2">
                            Ver Planes Ads
                            <i class="ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                        </span>
                        <div class="absolute inset-0 bg-gradient-to-r from-white/0 via-white/20 to-white/0 -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                    </a>
                    
                    <router-link to="/gestion-redes" class="group px-10 py-5 bg-white/5 border border-white/20 text-white hover:bg-white hover:text-dark rounded-2xl font-black text-xl transition-all backdrop-blur-sm">
                        Gestión de Redes
                    </router-link>
                </div>
                
                <!-- Trust Badges -->
                <div class="mt-24 pt-10 border-t border-white/10 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 hover:opacity-100 transition-opacity duration-1000">
                    <div class="flex items-center gap-2 text-white font-bold tracking-widest text-[10px] uppercase italic">
                        <i class="ph-shield-check text-secondary text-2xl"></i>
                        Resultados Garantizados
                    </div>
                    <div class="flex items-center gap-2 text-white font-bold tracking-widest text-[10px] uppercase italic">
                        <i class="ph-lightning text-secondary text-2xl"></i>
                        Soporte Personalizado
                    </div>
                    <div class="flex items-center gap-2 text-white font-bold tracking-widest text-[10px] uppercase italic">
                        <i class="ph-chart-bar text-secondary text-2xl"></i>
                        Reportes de Escala
                    </div>
                </div>
            </div>
        </div>
        
        <!-- Decoration: Wave transition to light bg -->
        <div class="absolute bottom-[-1px] left-0 w-full overflow-hidden leading-[0]">
            <svg viewBox="0 0 1200 120" preserveAspectRatio="none" class="relative block w-full h-[60px] fill-gray-50">
                <path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V120H0V95.8C57.14,105.73,222.8,114.7,321.39,56.44Z"></path>
            </svg>
        </div>
    </section>

    <!-- Services Overview -->
    <section class="py-24 bg-gray-50 relative overflow-hidden">
        <div class="container mx-auto px-4 relative z-10">
            <div class="text-center mb-16">
                 <span class="inline-block py-1 px-3 rounded-full bg-primary/10 text-primary-dark font-bold text-xs uppercase tracking-widest mb-4">
                    Ecosistema Digital
                 </span>
                 <h2 class="text-4xl md:text-5xl font-black text-gray-900 mb-6 tracking-tight">Todo lo que necesitas <br> para <span class="text-primary-vibrant italic">crecer</span></h2>
                 <p class="text-xl text-gray-500 max-w-2xl mx-auto">
                    Ya sea que necesites tráfico rápido, una comunidad fiel o una imagen impactante. Tenemos el equipo para hacerlo.
                 </p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
                <!-- Card 1: Management -->
                <router-link to="/gestion-redes" class="bg-white p-8 rounded-[2rem] shadow-sm hover:shadow-2xl transition-all duration-300 border border-gray-100 group flex flex-col items-start relative overflow-hidden">
                    <div class="absolute top-0 right-0 w-32 h-32 bg-primary/10 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/20 transition-colors"></div>

                    <div class="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center text-primary-dark text-3xl mb-8 group-hover:scale-110 group-hover:rotate-6 transition-transform duration-300 relative z-10">
                        <i class="ph-users-three text-primary-vibrant"></i>
                    </div>
                    
                    <h3 class="text-2xl font-black mb-4 relative z-10">Gestión de Redes</h3>
                    <p class="text-gray-500 mb-8 leading-relaxed relative z-10 text-sm">
                        Creamos contenido que conecta. Dejamos de lado los posts de relleno y nos enfocamos en construir una tribu leal.
                    </p>
                    
                    <ul class="space-y-3 mb-8 w-full relative z-10">
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-video-camera text-primary-vibrant mr-2 text-lg"></i> Reels & TikToks (Trends)</li>
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-strategy text-primary-vibrant mr-2 text-lg"></i> Estrategia con IA</li>
                        <li class="flex items-center text-gray-600 text-sm font-medium"><i class="ph-map-pin text-primary-vibrant mr-2 text-lg"></i> Visitas Presenciales</li>
                    </ul>

                    <div class="mt-auto inline-flex items-center text-primary-dark font-bold group-hover:underline decoration-2 underline-offset-4 relative z-10">
                        Ver Detalles
                        <i class="ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
                    </div>
                </router-link>

                <!-- Card 2: Ads (Middle & Highlighted) -->
                <div class="bg-dark text-white p-8 rounded-[2rem] shadow-xl hover:shadow-2xl transition-all duration-300 border border-white/10 group flex flex-col items-start relative overflow-hidden transform md:-translate-y-4">
                     <!-- Highlight effect -->
                    <div class="absolute inset-0 bg-gradient-to-br from-gray-900 to-black z-0"></div>
                    <div class="absolute top-0 right-0 w-40 h-40 bg-primary-vibrant/10 rounded-full blur-[60px] -mr-10 -mt-10 animate-pulse"></div>

                    <div class="w-16 h-16 bg-primary-vibrant rounded-2xl flex items-center justify-center text-white text-3xl mb-8 group-hover:scale-110 group-hover:-rotate-6 transition-transform duration-300 relative z-10 shadow-lg shadow-primary-vibrant/30">
                        <i class="ph-megaphone"></i>
                    </div>
                    
                    <h3 class="text-2xl font-black mb-4 relative z-10">Publicidad (Ads)</h3>
                    <p class="text-gray-400 mb-8 leading-relaxed relative z-10 text-sm">
                        Campañas de alto rendimiento en Meta y Google. Diseñadas para traer ventas, no solo likes. Ideal para lanzamientos.
                    </p>
                    
                    <ul class="space-y-3 mb-8 w-full relative z-10">
                        <li class="flex items-center text-gray-300 text-sm font-medium"><i class="ph-target text-secondary mr-2 text-lg"></i> Segmentación Láser</li>
                        <li class="flex items-center text-gray-300 text-sm font-medium"><i class="ph-chart-line-up text-secondary mr-2 text-lg"></i> Retorno de Inversión (ROAS)</li>
                        <li class="flex items-center text-gray-300 text-sm font-medium"><i class="ph-currency-dollar text-secondary mr-2 text-lg"></i> Desde $1 diario</li>
                    </ul>

                    <a href="#planes" class="mt-auto inline-flex items-center text-white font-bold hover:text-secondary transition-colors relative z-10">
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

    <!-- Personalized Audit Callout -->
    <section class="py-24 bg-dark text-white relative overflow-hidden">
        <!-- Animated Elements -->
        <div class="absolute inset-0 z-0">
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[1000px] h-[600px] bg-primary-vibrant/5 rounded-full blur-[160px]"></div>
        </div>
        
        <div class="container mx-auto px-4 relative z-10 text-center">
            <span class="inline-flex items-center gap-2 py-2 px-6 rounded-full bg-secondary text-dark mb-8 font-black uppercase tracking-widest text-sm shadow-[0_0_30px_rgba(242,188,42,0.3)]">
                🚀 Estrategia de Élite
            </span>
            <h2 class="text-4xl md:text-6xl font-black mb-8 leading-tight tracking-tight">¿Tu negocio factura <br> más de $2,000/mes?</h2>
            <p class="text-gray-400 mb-12 max-w-2xl mx-auto text-xl font-medium leading-relaxed">
                No dejes tu crecimiento al azar. Solicita una <span class="text-white font-bold">Auditoría de Crecimiento</span> donde analizaremos tus números y te daremos un plan de ruta técnico para escalar.
            </p>
            
            <div class="flex flex-col items-center gap-6">
                <router-link to="/consultoria" class="group relative inline-flex items-center gap-3 bg-primary-vibrant text-white font-black px-12 py-5 rounded-2xl transition-all hover:scale-110 shadow-[0_10px_40px_rgba(227,18,39,0.3)] overflow-hidden">
                    <span class="relative z-10 flex items-center gap-3 text-xl">
                        Ver Servicio de Consultoría
                        <i class="ph-arrow-right group-hover:translate-x-1 transition-transform"></i>
                    </span>
                    <div class="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
                </router-link>
                <p class="text-sm text-gray-500 font-bold uppercase tracking-widest">Cupos limitados por mes</p>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AdsCalculator from '../components/pricing/AdsCalculator.vue';
</script>

<style scoped>
@keyframes gradient-x {
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
}
.animate-gradient-x {
  animation: gradient-x 6s ease infinite;
}
</style>
