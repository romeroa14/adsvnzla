<template>
    <footer class="bg-dark text-white pt-20 pb-10 border-t border-gray-900">
        <div class="container mx-auto px-4">
            <div class="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-1 md:col-span-2">
                    <h3 class="text-3xl font-black mb-6 tracking-tighter">ADS<span class="text-primary">VZLA</span></h3>
                    <p class="text-gray-400 leading-relaxed max-w-sm mb-6">
                        Expertos en Trafficker Digital y Estrategias de Crecimiento para Emprendedores y Empresas. Dominamos el arte de vender en Facebook e Instagram Ads.
                    </p>
                    <div class="flex space-x-4">
                        <!-- Social Icons -->
                        <a href="https://www.instagram.com/ads_vnzla/" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-110">
                            <img src="@/assets/Instagram_logo_2022.svg.png" alt="Instagram" class="h-full w-full object-cover rounded-full" />
                        </a>
                         <a href="https://wa.me/584222536796" target="_blank" rel="noopener noreferrer" class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center transition-all cursor-pointer shadow-lg hover:scale-110">
                            <img src="@/assets/WhatsApp.svg.webp" alt="WhatsApp" class="h-full w-full object-cover rounded-full" />
                        </a>
                    </div>
                </div>
                
                <div>
                    <h4 class="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Servicios</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li><a href="#" class="hover:text-primary transition-colors">Facebook Ads</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Gestión de Redes</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Consultoría</a></li>
                        <li><a href="#" class="hover:text-primary transition-colors">Diseño Gráfico</a></li>
                    </ul>
                </div>

                <div>
                    <h4 class="text-lg font-bold mb-6 text-white border-b border-gray-800 pb-2 inline-block">Contacto</h4>
                    <ul class="space-y-4 text-gray-400">
                        <li class="flex items-start">
                            <span class="mr-2 text-primary">📍</span>
                            Los Teques, Altos Mirandinos
                        </li>
                        <li class="flex items-center">
                            <span class="mr-2 text-primary">📱</span>
                            0422-2536796
                        </li>
                        <li class="flex items-center">
                            <span class="mr-2 text-primary">📧</span>
                            business@alfredoromero.io
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>&copy; {{ new Date().getFullYear() }} Ads Vzla. Developed by <a href="https://alfredoromero.io" target="_blank" rel="noopener noreferrer" class="text-primary hover:underline">alfredoromero.io</a></p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white transition-colors">Términos</a>
                    <a href="#" class="hover:text-white transition-colors">Privacidad</a>
                </div>
            </div>
        </div>
    </footer>
</template>
