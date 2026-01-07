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
                        <!-- Social Icons Placeholders -->
                        <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <i class="ph-facebook-logo text-xl"></i>
                        </div>
                        <div class="w-10 h-10 rounded-full bg-gray-800 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white transition-colors cursor-pointer">
                            <i class="ph-instagram-logo text-xl"></i>
                        </div>
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
                            0424-2536795
                        </li>
                        <li class="flex items-center">
                            <span class="mr-2 text-primary">📧</span>
                            alfredoromerox21@gmail.com
                        </li>
                    </ul>
                </div>
            </div>
            
            <div class="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-gray-500 text-sm">
                <p>&copy; {{ new Date().getFullYear() }} Ads Vzla. Developed by Admetricas.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white transition-colors">Términos</a>
                    <a href="#" class="hover:text-white transition-colors">Privacidad</a>
                </div>
            </div>
        </div>
    </footer>
</template>
