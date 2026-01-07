<template>
  <div class="bg-white" v-auto-animate>
    <!-- Hero Section -->
    <section class="relative bg-dark pt-32 pb-24 overflow-hidden">
        <!-- Abstract Background -->
        <div class="absolute inset-0">
             <div class="absolute top-0 left-0 w-[500px] h-[500px] bg-secondary/20 rounded-full blur-[120px] -translate-y-1/2 -translate-x-1/4"></div>
             <div class="absolute bottom-0 right-0 w-[600px] h-[600px] bg-primary/10 rounded-full blur-[100px] translate-y-1/2 translate-x-1/4"></div>
             <div class="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        </div>

        <div class="container mx-auto px-4 relative z-10 text-center">
            <span class="inline-block py-2 px-4 rounded-full bg-secondary/20 text-red-400 font-bold tracking-widest text-xs uppercase mb-6 border border-secondary/20">
                Community Management 2.0
            </span>
            <h1 class="text-4xl md:text-6xl font-black text-white mb-8 leading-tight">
                No buscamos Likes. <br>
                <span class="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-orange-500">Construimos Tribus.</span>
            </h1>
            <p class="text-xl text-gray-400 mb-10 max-w-2xl mx-auto leading-relaxed">
                Deja de postear "Effemérides" y "Buenos Días". Creamos contenido estratégico impulsado por IA y alineado con las tendencias virales de TikTok y Reels.
            </p>
            <div class="flex flex-col sm:flex-row justify-center gap-4">
                <a href="#precio" class="bg-secondary hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-red-900/40">
                    Ver Plan Mensual
                </a>
                <a href="https://wa.me/584222536796?text=Hola,%20quiero%20audiencia%20para%20mi%20marca" target="_blank" class="bg-transparent border border-gray-600 text-gray-300 hover:bg-white hover:text-dark px-8 py-4 rounded-xl font-bold transition-all">
                    Agendar Reunión
                </a>
            </div>
        </div>
    </section>

    <!-- Strategy & AI Section -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-4">
             <div class="grid grid-cols-1 md:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                <div class="relative">
                    <div class="absolute -inset-4 bg-gradient-to-tr from-secondary/20 to-primary/20 rounded-[2.5rem] blur-xl transform -rotate-2"></div>
                    <img src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop" alt="Content Creation" class="relative z-10 rounded-[2rem] shadow-2xl border-4 border-white rotate-2 hover:rotate-0 transition-transform duration-500">
                    
                    <!-- Floating Badge -->
                    <div class="absolute -bottom-6 -right-6 z-20 bg-white p-4 rounded-2xl shadow-xl border border-gray-100 flex items-center gap-3 animate-bounce-slow">
                        <div class="bg-green-100 p-2 rounded-lg">
                            <i class="ph-magic-wand text-2xl text-green-600"></i>
                        </div>
                        <div>
                            <p class="text-xs text-gray-500 font-bold uppercase">Powered by</p>
                            <p class="font-black text-gray-900">ChatGPT + Claude</p>
                        </div>
                    </div>
                </div>

                <div>
                    <h2 class="text-3xl md:text-4xl font-black text-gray-900 mb-6">Contenido Inteligente <br> <span class="text-secondary">No Relleno.</span></h2>
                    <p class="text-gray-600 text-lg mb-8">
                        Analizamos qué está funcionando en tu nicho en tiempo real. Usamos herramientas de IA para detectar hooks (ganchos) virales y los adaptamos a tu marca.
                    </p>
                    
                    <div class="space-y-6">
                        <div class="flex items-start">
                            <i class="ph-brain text-3xl text-primary mr-4 mt-1"></i>
                            <div>
                                <h4 class="font-bold text-lg text-gray-900">Guiones con Neuromarketing</h4>
                                <p class="text-gray-500 text-sm">Cada palabra está pensada para retener la atención en los primeros 3 segundos.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="ph-trend-up text-3xl text-primary mr-4 mt-1"></i>
                            <div>
                                <h4 class="font-bold text-lg text-gray-900">Surfeamos Tendencias (Trends)</h4>
                                <p class="text-gray-500 text-sm">Identificamos audios y formatos virales en TikTok/Reels y los aplicamos a tu negocio antes de que pasen de moda.</p>
                            </div>
                        </div>
                        <div class="flex items-start">
                            <i class="ph-calendar-check text-3xl text-primary mr-4 mt-1"></i>
                            <div>
                                <h4 class="font-bold text-lg text-gray-900">Planificación Estratégica</h4>
                                <p class="text-gray-500 text-sm">Nada es improvisado. Aprobarás una parrilla de contenidos mensual con objetivos claros.</p>
                            </div>
                        </div>
                    </div>
                </div>
             </div>
        </div>
    </section>

    <!-- The Plan Pricing -->
    <section id="precio" class="py-24 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="max-w-4xl mx-auto bg-dark rounded-[3rem] p-8 md:p-16 relative overflow-hidden text-white shadow-2xl">
                <!-- Background Glow -->
                <div class="absolute top-0 right-0 w-96 h-96 bg-secondary/30 rounded-full blur-[120px] translate-x-1/2 -translate-y-1/2"></div>
                
                <div class="relative z-10 flex flex-col md:flex-row gap-12 items-center">
                    <div class="flex-1">
                        <div class="inline-block px-3 py-1 bg-primary text-black font-bold text-xs rounded-full mb-4">PLAN INTEGRAL</div>
                        <h2 class="text-4xl font-black mb-6">Gestión de Redes</h2>
                        <p class="text-gray-400 mb-8 border-l-4 border-secondary pl-4 py-2 bg-white/5 rounded-r-lg">
                            La solución perfecta para marcas que quieren presencia profesional constante sin contratar un equipo interno costoso.
                        </p>
                        
                        <ul class="space-y-3">
                            <li class="flex items-center text-gray-300">
                                <i class="ph-check-circle text-green-400 text-xl mr-3"></i> 
                                <span><strong>12 Posts Mensuales</strong> (Diseño/Carruseles)</span>
                            </li>
                            <li class="flex items-center text-gray-300">
                                <i class="ph-video-camera text-green-400 text-xl mr-3"></i> 
                                <span><strong>4 Reels Mensuales</strong> (Edición Pro)</span>
                            </li>
                            <li class="flex items-center text-gray-300">
                                <i class="ph-clock-cw text-green-400 text-xl mr-3"></i> 
                                <span><strong>Historias Diarias</strong> (Mín 2 al día)</span>
                            </li>
                            <li class="flex items-center text-gray-300">
                                <i class="ph-map-pin text-green-400 text-xl mr-3"></i> 
                                <span><strong>3 Visitas Presenciales</strong> (Fotos/Videos en local)</span>
                            </li>
                             <li class="flex items-center text-gray-300">
                                <i class="ph-chat-circle-text text-green-400 text-xl mr-3"></i> 
                                <span>Gestión de Comunidad (Respuestas)</span>
                            </li>
                        </ul>
                    </div>

                    <div class="w-full md:w-auto bg-gray-800/80 backdrop-blur-md p-8 rounded-3xl border border-gray-700 text-center min-w-[280px]">
                        <p class="text-gray-400 text-sm uppercase tracking-widest mb-2">Inversión Mensual</p>
                        <div class="text-6xl font-black text-white mb-2">$180</div>
                        <p class="text-green-400 font-bold text-sm mb-6">+ Bono: Asesoría de Ads</p>
                        
                        <a href="https://wa.me/584222536796?text=Hola,%20me%20interesa%20el%20Plan%20de%20Gesti%C3%B3n%20de%20Redes%20de%20$180" class="block w-full bg-secondary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-red-900/50">
                            Contratar Ahora
                        </a>
                        <p class="text-[10px] text-gray-500 mt-4">*Pago mensual recurrente</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Workflow Section -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-4">
             <div class="text-center mb-16">
                <h2 class="text-3xl font-black text-gray-900">¿Cómo trabajamos?</h2>
             </div>
             
             <div class="grid grid-cols-1 md:grid-cols-4 gap-8 max-w-6xl mx-auto">
                <div class="text-center group">
                    <div class="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-3xl text-gray-400 group-hover:bg-primary group-hover:text-black transition-colors mb-6">
                        1
                    </div>
                    <h3 class="font-bold text-lg mb-2">Briefing</h3>
                    <p class="text-sm text-gray-500">Reunión inicial para entender tu voz y objetivos.</p>
                </div>
                 <div class="text-center group">
                    <div class="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-3xl text-gray-400 group-hover:bg-primary group-hover:text-black transition-colors mb-6">
                        2
                    </div>
                    <h3 class="font-bold text-lg mb-2">Planificación</h3>
                    <p class="text-sm text-gray-500">Diseñamos la estrategia y guiones con IA.</p>
                </div>
                 <div class="text-center group">
                    <div class="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-3xl text-gray-400 group-hover:bg-primary group-hover:text-black transition-colors mb-6">
                        3
                    </div>
                    <h3 class="font-bold text-lg mb-2">Producción</h3>
                    <p class="text-sm text-gray-500">Visitamos tu local o editamos tu material.</p>
                </div>
                 <div class="text-center group">
                    <div class="w-20 h-20 mx-auto bg-gray-100 rounded-full flex items-center justify-center text-3xl text-gray-400 group-hover:bg-primary group-hover:text-black transition-colors mb-6">
                        4
                    </div>
                    <h3 class="font-bold text-lg mb-2">Publicación</h3>
                    <p class="text-sm text-gray-500">Subimos todo optimizado y gestionamos comentarios.</p>
                </div>
             </div>
        </div>
    </section>

  </div>
</template>

<script setup lang="ts">
// Logic
</script>
