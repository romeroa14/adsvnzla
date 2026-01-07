<template>
  <div class="bg-white" v-auto-animate>
    <!-- Hero Services -->
    <section class="relative bg-dark pt-32 pb-20 overflow-hidden">
         <div class="absolute inset-0 opacity-20">
            <div class="absolute top-0 right-0 w-96 h-96 bg-primary/30 rounded-full blur-[100px]"></div>
            <div class="absolute bottom-0 left-0 w-96 h-96 bg-secondary/30 rounded-full blur-[100px]"></div>
         </div>
         <div class="container mx-auto px-4 relative z-10 text-center text-white">
            <h1 class="text-4xl md:text-6xl font-black mb-6">Nuestros Servicios</h1>
            <p class="text-xl text-gray-300 max-w-2xl mx-auto">Impulsamos tu negocio con estrategias digitales probadas y tecnología de vanguardia.</p>
         </div>
    </section>

    <!-- Services Detail -->
    <!-- Services Detail -->
    <section class="py-24 bg-gray-50">
        <div class="container mx-auto px-4 space-y-12">
            
            <!-- 1. Ads Service -->
            <div class="bg-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-sm border border-gray-100 group">
                <!-- Decorative BG -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-red-50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 group-hover:bg-red-100 transition-colors duration-500"></div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="bg-red-100 text-red-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Publicidad (Ads)</span>
                        </div>
                        <h2 class="text-4xl font-black mb-6 text-gray-900">Facebook & Instagram Ads</h2>
                        <p class="text-gray-500 text-lg mb-8 leading-relaxed">
                            Deja de gastar en el botón "Promocionar". Creamos campañas científicas orientadas a resultados: Ventas y Leads Cualificados.
                        </p>
                        <router-link to="/#planes" class="inline-flex items-center bg-red-600 hover:bg-red-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-red-500/30">
                            Ver Planes desde $9
                            <i class="ph-arrow-right ml-2 font-bold"></i>
                        </router-link>
                    </div>
                    
                    <!-- Features Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-red-200 transition-colors">
                            <i class="ph-target text-3xl text-red-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Segmentación Láser</h4>
                            <p class="text-xs text-gray-500">Llegamos a tu cliente ideal por intereses y comportamientos.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-red-200 transition-colors">
                            <i class="ph-chart-line-up text-3xl text-red-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">ROAS Positivo</h4>
                            <p class="text-xs text-gray-500">Optimizamos para que cada dólar invertido traiga retorno.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-red-200 transition-colors">
                            <i class="ph-pencil-circle text-3xl text-red-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Copywriting</h4>
                            <p class="text-xs text-gray-500">Textos persuasivos que atacan los dolores de tu cliente.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-red-200 transition-colors">
                            <i class="ph-arrows-left-right text-3xl text-red-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Retargeting</h4>
                            <p class="text-xs text-gray-500">Perseguimos a los interesados hasta que compren.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 2. Social Media Service -->
            <div class="bg-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-sm border border-gray-100 group">
                 <!-- Decorative BG -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-primary/10 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 group-hover:bg-primary/20 transition-colors duration-500"></div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="bg-primary/10 text-primary-dark px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Gestión de Redes</span>
                        </div>
                        <h2 class="text-4xl font-black mb-6 text-gray-900">Social Media Management</h2>
                        <p class="text-gray-500 text-lg mb-8 leading-relaxed">
                            Más que publicar por publicar. Creamos una estrategia de contenidos que conecta, educa y vende. Construimos tu tribu digital.
                        </p>
                        <router-link to="/gestion-redes" class="inline-flex items-center bg-primary hover:bg-primary-dark text-black px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-primary/30">
                            Ver Plan Integral $180
                            <i class="ph-arrow-right ml-2 font-bold"></i>
                        </router-link>
                    </div>
                    
                    <!-- Features Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                            <i class="ph-strategy text-3xl text-primary mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Estrategia Mensual</h4>
                            <p class="text-xs text-gray-500">Parrilla de contenidos planificada con objetivos claros.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                            <i class="ph-video-camera text-3xl text-primary mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Reels & TikToks</h4>
                            <p class="text-xs text-gray-500">Edición profesional de videos verticales virales.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                            <i class="ph-map-pin text-3xl text-primary mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Visitas Locales</h4>
                            <p class="text-xs text-gray-500">Vamos a tu negocio a grabar el contenido (Altos Mirandinos).</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-primary/30 transition-colors">
                            <i class="ph-chat-circle-text text-3xl text-primary mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Comunidad</h4>
                            <p class="text-xs text-gray-500">Gestión de respuestas y comentarios para fidelizar.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 3. Graphic Design Service -->
            <div class="bg-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-sm border border-gray-100 group">
                 <!-- Decorative BG -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 group-hover:bg-blue-100 transition-colors duration-500"></div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="bg-blue-100 text-blue-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Diseño Gráfico</span>
                        </div>
                        <h2 class="text-4xl font-black mb-6 text-gray-900">Identidad Visual & Branding</h2>
                        <p class="text-gray-500 text-lg mb-8 leading-relaxed">
                            Tu imagen es lo primero que ven tus clientes. Diseñamos identidades visuales que transmiten profesionalismo y confianza al instante.
                        </p>
                        <router-link to="/diseno-grafico" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30">
                            Ver Portafolio y Planes
                            <i class="ph-arrow-right ml-2 text-xl"></i>
                        </router-link>
                    </div>
                    
                    <!-- Features Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                            <i class="ph-paint-brush-broad text-3xl text-blue-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Branding Completo</h4>
                            <p class="text-xs text-gray-500">Logos, paletas de colores y manual de marca.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                            <i class="ph-images text-3xl text-blue-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Social Media Kits</h4>
                            <p class="text-xs text-gray-500">Plantillas editables para posts e historias.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                            <i class="ph-monitor text-3xl text-blue-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">UI/UX Web</h4>
                            <p class="text-xs text-gray-500">Diseño de interfaces para webs y apps modernas.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-blue-200 transition-colors">
                            <i class="ph-flyer text-3xl text-blue-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Publicidad Impresa</h4>
                            <p class="text-xs text-gray-500">Flyers, vallas y material POP de alta calidad.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 4. Audiovisual Service -->
            <div class="bg-white rounded-[2.5rem] p-8 md:p-14 relative overflow-hidden shadow-sm border border-gray-100 group">
                 <!-- Decorative BG -->
                <div class="absolute top-0 right-0 w-[500px] h-[500px] bg-purple-50 rounded-full blur-[100px] translate-x-1/3 -translate-y-1/3 group-hover:bg-purple-100 transition-colors duration-500"></div>

                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <div class="flex items-center gap-3 mb-4">
                            <span class="bg-purple-100 text-purple-600 px-3 py-1 rounded-full text-xs font-bold tracking-widest uppercase">Edición de Video</span>
                        </div>
                        <h2 class="text-4xl font-black mb-6 text-gray-900">Producción Audiovisual</h2>
                        <p class="text-gray-500 text-lg mb-8 leading-relaxed">
                            El video es el formato que más vende hoy. Desde Reels virales hasta videos corporativos, hacemos que tu marca se mueva.
                        </p>
                        <router-link to="/audiovisual" class="inline-flex items-center bg-purple-600 hover:bg-purple-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-purple-500/30">
                            Ver Paquetes de Video
                            <i class="ph-video-camera ml-2 text-xl"></i>
                        </router-link>
                    </div>
                    
                    <!-- Features Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
                            <i class="ph-tiktok-logo text-3xl text-purple-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Reels & TikToks</h4>
                            <p class="text-xs text-gray-500">Edición dinámica estilo Hormozi para retención máxima.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
                            <i class="ph-buildings text-3xl text-purple-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Corporativos</h4>
                            <p class="text-xs text-gray-500">Videos de presentación para web y ventas B2B.</p>
                        </div>
                         <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
                            <i class="ph-magic-wand text-3xl text-purple-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">Motion Graphics</h4>
                            <p class="text-xs text-gray-500">Animaciones y explicadores 2D para tu producto.</p>
                        </div>
                        <div class="bg-gray-50 p-6 rounded-2xl border border-gray-100 hover:border-purple-200 transition-colors">
                            <i class="ph-youtube-logo text-3xl text-purple-500 mb-3"></i>
                            <h4 class="font-bold text-gray-900 mb-1">YouTube</h4>
                            <p class="text-xs text-gray-500">Edición de contenido largo para posicionamiento.</p>
                        </div>
                    </div>
                </div>
            </div>

            <!-- 5. Premium Service (Dark) -->
            <div class="bg-dark rounded-[2.5rem] p-8 md:p-14 text-white relative overflow-hidden border border-gray-800 shadow-2xl">
                <div class="absolute top-0 right-0 w-full h-full bg-[url('https://images.unsplash.com/photo-1557804506-669a67965ba0?q=80&w=2574&auto=format&fit=crop')] bg-cover opacity-10"></div>
                
                <div class="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                    <div>
                        <span class="text-primary font-bold tracking-widest uppercase mb-4 block text-sm border-l-4 border-primary pl-4 bg-white/5 py-2 w-fit rounded-r-lg">Servicio Premium para Empresas</span>
                        <h2 class="text-4xl md:text-5xl font-black mb-6">Consultoría y Trafficker PRO</h2>
                        <p class="text-gray-400 text-lg mb-8 leading-relaxed">
                            Para empresas que buscan escalar agresivamente. Este plan incluye una inmersión profunda en tu negocio, estrategias de embudos de venta complejos, automatizaciones y asesoría 1 a 1 directamente conmigo (CEO).
                        </p>
                        <div class="flex flex-col sm:flex-row gap-4">
                             <router-link to="/consultoria" class="inline-flex items-center justify-center bg-primary hover:bg-white hover:text-black text-black px-8 py-4 rounded-xl font-bold transition-all shadow-[0_0_20px_rgba(242,188,42,0.3)] hover:shadow-[0_0_30px_rgba(255,255,255,0.4)]">
                                Ver Carta de Ventas
                                <i class="ph-star-four ml-2 font-bold"></i>
                             </router-link>
                        </div>
                    </div>
                    
                    <!-- Features Grid -->
                    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        <div class="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                            <i class="ph-chart-line-up text-3xl text-primary mb-4"></i>
                            <h4 class="font-bold text-lg mb-2 text-white">Escalabilidad</h4>
                            <p class="text-sm text-gray-400">Estrategias para duplicar o triplicar facturación mensual.</p>
                        </div>
                        <div class="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                            <i class="ph-robot text-3xl text-primary mb-4"></i>
                            <h4 class="font-bold text-lg mb-2 text-white">Automatización (n8n)</h4>
                            <p class="text-sm text-gray-400">Implementación de chatbots inteligentes y flujos de Email.</p>
                        </div>
                         <div class="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                            <i class="ph-presentation-chart text-3xl text-primary mb-4"></i>
                            <h4 class="font-bold text-lg mb-2 text-white">Reportes Avanzados</h4>
                            <p class="text-sm text-gray-400">Métricas detalladas (Data Studio) y análisis de ROI.</p>
                        </div>
                         <div class="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 backdrop-blur-sm hover:bg-gray-800 transition-colors">
                            <i class="ph-student text-3xl text-primary mb-4"></i>
                            <h4 class="font-bold text-lg mb-2 text-white">Formación Equipo</h4>
                            <p class="text-sm text-gray-400">Capacitamos a tu equipo in-house para mantener el sistema.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    </section>



    <!-- Newsletter Section -->
    <section class="py-24 bg-white">
        <div class="container mx-auto px-4">
            <div class="bg-secondary p-10 md:p-20 rounded-[3rem] text-center relative overflow-hidden">
                <!-- Background pattern -->
                <div class="absolute inset-0 opacity-10 bg-[radial-gradient(#ffffff_1px,transparent_1px)] [background-size:20px_20px]"></div>
                
                <div class="relative z-10 max-w-2xl mx-auto">
                    <i class="ph-envelope-simple-open text-6xl text-primary mb-6"></i>
                    <h2 class="text-3xl md:text-5xl font-black text-white mb-6">Suscríbete al Newsletter</h2>
                    <p class="text-white/80 text-lg mb-10">
                        Recibe consejos semanales sobre hackeos de crecimiento, actualizaciones del algoritmo de Facebook y tips de programación para marketers. Cero spam.
                    </p>
                    
                    <form @submit.prevent="subscribe" class="flex flex-col md:flex-row gap-4">
                        <input 
                            v-model="email" 
                            type="email" 
                            placeholder="Tu correo electrónico principal" 
                            class="flex-grow px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder-white/50 focus:outline-none focus:ring-2 focus:ring-primary backdrop-blur-sm"
                            required
                        />
                        <button type="submit" class="bg-primary hover:bg-primary-dark text-black px-10 py-4 rounded-full font-bold transition-all hover:scale-105 shadow-xl">
                            Unirme Ahora
                        </button>
                    </form>
                    <p v-if="subscribed" class="mt-4 text-green-400 font-bold animate-fade-in">¡Gracias por suscribirte!</p>
                </div>
            </div>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue';

const email = ref('');
const subscribed = ref(false);

const subscribe = () => {
    // Placeholder for actual API call
    if (email.value) {
        subscribed.value = true;
        email.value = '';
        setTimeout(() => subscribed.value = false, 3000);
    }
}
</script>
