<template>
    <nav class="bg-dark/95 backdrop-blur-xl sticky top-[32px] z-40 border-b border-gray-800 shadow-lg transition-all duration-300">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-24">
                <!-- Logo -->
                <router-link to="/" class="flex-shrink-0 flex items-center group">
                    <img src="@/assets/logo_adsvzla.png" alt="Ads Vzla Logo" class="h-28 w-auto transition-transform duration-300 group-hover:scale-105" />
                </router-link>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <router-link to="/" class="text-sm font-semibold text-gray-300 hover:text-white tracking-wide transition-colors uppercase">Inicio</router-link>
                    <router-link to="/servicios" class="text-sm font-semibold text-gray-300 hover:text-white tracking-wide transition-colors uppercase">Servicios</router-link>
                    <router-link to="/blog" class="text-sm font-semibold text-gray-300 hover:text-white tracking-wide transition-colors uppercase">Blog</router-link>
                    <a href="#contacto" class="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transform">
                        Contratar Ahora
                    </a>
                </div>

                <!-- Mobile Menu Button (Placeholder) -->
                <div class="md:hidden">
                    <button class="text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
