<template>
    <div class="bg-gray-50 font-sans">
        <!-- Hero Section -->
        <section class="relative bg-dark pt-32 pb-20 overflow-hidden text-center">
            <div class="absolute inset-0 opacity-20">
                <div class="absolute top-0 right-0 w-96 h-96 bg-blue-500/30 rounded-full blur-[100px]"></div>
                <div class="absolute bottom-0 left-0 w-96 h-96 bg-purple-500/30 rounded-full blur-[100px]"></div>
            </div>
            
            <div class="container mx-auto px-4 relative z-10">
                <span class="inline-block py-1 px-3 rounded-full bg-blue-500/10 text-blue-400 font-bold text-xs uppercase tracking-widest mb-6 border border-blue-500/20">
                    Psicología Visual
                </span>
                <h1 class="text-4xl md:text-6xl font-black text-white mb-6">Diseño que <span class="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-500">Vende</span></h1>
                <p class="text-xl text-gray-300 max-w-2xl mx-auto mb-10">
                    No hacemos "dibujitos". Creamos piezas gráficas estratégicas basadas en el método A.I.D.A. para convertir espectadores en clientes.
                </p>
                <a href="https://wa.me/584222536796?text=Hola,%20necesito%20dise%C3%B1o%20con%20estrategia" target="_blank" class="inline-flex items-center bg-blue-600 hover:bg-blue-700 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-blue-500/30">
                    Solicitar Cotización
                    <i class="ph-whatsapp-logo ml-2 text-xl"></i>
                </a>
            </div>
        </section>

        <!-- AIDA Strategy Section -->
        <section class="py-24 bg-white">
            <div class="container mx-auto px-4">
                <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-4">El Método <span class="text-blue-600">A.I.D.A.</span></h2>
                    <p class="text-gray-500 max-w-2xl mx-auto">
                        Cada pixel que colocamos tiene un propósito. Usamos la psicología del consumidor para guiar la mirada y provocar acción.
                    </p>
                </div>

                <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    <!-- Attention -->
                    <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-red-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div class="w-14 h-14 bg-red-100 rounded-full flex items-center justify-center text-red-600 text-2xl font-black mb-6 group-hover:scale-110 transition-transform">A</div>
                        <h3 class="text-2xl font-bold mb-3">Atención</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Rompemos el "scroll infinito" con colores disruptivos y titulares grandes. Tu anuncio debe gritar "¡MÍRAME!" en menos de 0.3 segundos.
                        </p>
                    </div>

                    <!-- Interest -->
                    <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-yellow-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div class="w-14 h-14 bg-yellow-100 rounded-full flex items-center justify-center text-yellow-600 text-2xl font-black mb-6 group-hover:scale-110 transition-transform">I</div>
                        <h3 class="text-2xl font-bold mb-3">Interés</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Mantenemos la mirada con una promesa clara. Usamos jerarquía visual para destacar el beneficio principal de tu producto.
                        </p>
                    </div>

                    <!-- Desire -->
                    <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-blue-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div class="w-14 h-14 bg-blue-100 rounded-full flex items-center justify-center text-blue-600 text-2xl font-black mb-6 group-hover:scale-110 transition-transform">D</div>
                        <h3 class="text-2xl font-bold mb-3">Deseo</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Convertimos curiosidad en necesidad. Mostramos el resultado final, la transformación y prueba social estética.
                        </p>
                    </div>

                    <!-- Action -->
                    <div class="bg-gray-50 p-8 rounded-3xl border border-gray-100 hover:border-green-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 group">
                        <div class="w-14 h-14 bg-green-100 rounded-full flex items-center justify-center text-green-600 text-2xl font-black mb-6 group-hover:scale-110 transition-transform">A</div>
                        <h3 class="text-2xl font-bold mb-3">Acción</h3>
                        <p class="text-gray-600 text-sm leading-relaxed">
                            Diseñamos botones (CTAs) que son irresistibles de clickear. Contrastes altos y ubicación estratégica para cerrar la venta.
                        </p>
                    </div>
                </div>
            </div>
        </section>

        <!-- Infinite Carousel Portfolio -->
        <section class="py-24 bg-dark overflow-hidden relative">
            <div class="container mx-auto px-4 mb-12 relative z-10 text-center">
                 <h2 class="text-3xl md:text-5xl font-black text-white mb-4">Nuestro Portafolio</h2>
                 <p class="text-gray-400">Diseños que han facturado miles de dólares.</p>
            </div>

            <!-- Carousel Track -->
            <div class="marquee-container relative flex overflow-x-hidden">
                <div class="marquee-track flex gap-8 py-8 animate-marquee">
                    <!-- Images (Duplicated for seamless loop) -->
                    <div v-for="i in 8" :key="`a-${i}`" class="flex-none w-72 h-96 bg-gray-800 rounded-2xl overflow-hidden relative group border border-gray-700 hover:border-blue-500 transition-colors">
                        <img :src="`https://picsum.photos/400/600?random=${i}`" alt="Diseño Portfolio" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                        <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                             <span class="text-white font-bold text-lg">Campaña {{ i }}</span>
                             <p class="text-gray-400 text-xs">Social Media Kit</p>
                        </div>
                    </div>
                     <!-- Duplicates -->
                    <div v-for="i in 8" :key="`b-${i}`" class="flex-none w-72 h-96 bg-gray-800 rounded-2xl overflow-hidden relative group border border-gray-700 hover:border-blue-500 transition-colors">
                        <img :src="`https://picsum.photos/400/600?random=${i}`" alt="Diseño Portfolio" class="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500 grayscale group-hover:grayscale-0">
                         <div class="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-black to-transparent translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                             <span class="text-white font-bold text-lg">Campaña {{ i }}</span>
                             <p class="text-gray-400 text-xs">Social Media Kit</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Pricing / Packages -->
        <section class="py-24 bg-gray-50">
            <div class="container mx-auto px-4">
                 <div class="text-center mb-16">
                    <h2 class="text-3xl md:text-5xl font-black text-gray-900 mb-4">Planes de Diseño</h2>
                    <p class="text-gray-500 max-w-2xl mx-auto">
                        Desde un logo hasta la identidad completa de tu marca.
                    </p>
                </div>
                
                <div class="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    <!-- Starter -->
                    <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                        <h3 class="text-2xl font-bold mb-2">Social Kit</h3>
                        <div class="text-4xl font-black mb-6 text-blue-600">$45</div>
                        <p class="text-gray-500 text-sm mb-6">Ideal para renovar tus redes sociales este mes.</p>
                        <ul class="space-y-3 mb-8 text-sm text-gray-600">
                            <li class="flex items-center"><i class="ph-check text-green-500 mr-2"></i> 9 Posts para Instagram</li>
                            <li class="flex items-center"><i class="ph-check text-green-500 mr-2"></i> 5 Plantillas de Historias</li>
                            <li class="flex items-center"><i class="ph-check text-green-500 mr-2"></i> Diseño de Perfil y Bio</li>
                        </ul>
                        <a href="https://wa.me/584222536796?text=Me%20interesa%20el%20Social%20Kit" class="block w-full py-3 border-2 border-blue-600 text-blue-600 font-bold rounded-xl text-center hover:bg-blue-600 hover:text-white transition-colors">Solicitar</a>
                    </div>
                    
                    <!-- Branding -->
                    <div class="bg-dark text-white p-8 rounded-3xl shadow-xl border border-gray-800 transform md:-translate-y-4 relative overflow-hidden">
                        <div class="absolute top-0 right-0 w-32 h-32 bg-blue-500/20 rounded-full blur-3xl"></div>
                        <span class="bg-blue-500 text-xs font-bold px-3 py-1 rounded-full mb-4 inline-block">Más Vendido</span>
                        <h3 class="text-2xl font-bold mb-2">Branding Pro</h3>
                        <div class="text-4xl font-black mb-6 text-blue-400">$120</div>
                        <p class="text-gray-400 text-sm mb-6">Identidad completa para marcas serias.</p>
                        <ul class="space-y-3 mb-8 text-sm text-gray-300">
                            <li class="flex items-center"><i class="ph-check text-blue-400 mr-2"></i> Logo Principal + Variaciones</li>
                            <li class="flex items-center"><i class="ph-check text-blue-400 mr-2"></i> Paleta de Colores y Tipografías</li>
                            <li class="flex items-center"><i class="ph-check text-blue-400 mr-2"></i> Manual de Marca (PDF)</li>
                            <li class="flex items-center"><i class="ph-check text-blue-400 mr-2"></i> Branding para RRSS</li>
                        </ul>
                        <a href="https://wa.me/584222536796?text=Me%20interesa%20el%20Plan%20Branding%20Pro" class="block w-full py-3 bg-blue-600 font-bold rounded-xl text-center hover:bg-blue-500 transition-colors">Solicitar</a>
                    </div>

                    <!-- Web UI -->
                    <div class="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-xl transition-all">
                        <h3 class="text-2xl font-bold mb-2">Diseño Web UI</h3>
                        <div class="text-4xl font-black mb-6 text-gray-900">$250</div>
                        <p class="text-gray-500 text-sm mb-6">Diseño de Landing Page o Home moderna.</p>
                        <ul class="space-y-3 mb-8 text-sm text-gray-600">
                            <li class="flex items-center"><i class="ph-check text-green-500 mr-2"></i> Diseño en Figma</li>
                            <li class="flex items-center"><i class="ph-check text-green-500 mr-2"></i> Versión Móvil y Desktop</li>
                            <li class="flex items-center"><i class="ph-check text-green-500 mr-2"></i> Prototipo Interactivo</li>
                        </ul>
                        <a href="https://wa.me/584222536796?text=Me%20interesa%20el%20Dise%C3%B1o%20Web" class="block w-full py-3 border-2 border-gray-900 text-gray-900 font-bold rounded-xl text-center hover:bg-gray-900 hover:text-white transition-colors">Solicitar</a>
                    </div>
                </div>
            </div>
        </section>
    </div>
</template>

<style scoped>
.animate-marquee {
    animation: marquee 40s linear infinite;
}

@keyframes marquee {
    0% { transform: translateX(0); }
    100% { transform: translateX(-50%); }
}

.marquee-container:hover .animate-marquee {
    animation-play-state: paused;
}
</style>
