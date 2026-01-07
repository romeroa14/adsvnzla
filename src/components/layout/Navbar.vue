<template>
    <nav class="bg-white/90 backdrop-blur-xl sticky top-[32px] z-40 border-b border-gray-100 shadow-sm transition-all duration-300">
        <div class="container mx-auto px-4">
            <div class="flex justify-between items-center h-20">
                <!-- Logo -->
                <router-link to="/" class="flex-shrink-0 flex items-center group">
                    <span class="text-2xl font-black text-gray-900 tracking-tighter group-hover:text-primary transition-colors duration-300">
                        ADS<span class="text-primary group-hover:text-gray-900 transition-colors duration-300">VZLA</span>
                    </span>
                </router-link>
                
                <!-- Desktop Menu -->
                <div class="hidden md:flex items-center space-x-8">
                    <router-link to="/" class="text-sm font-semibold text-gray-600 hover:text-primary tracking-wide transition-colors uppercase">Inicio</router-link>
                    <router-link to="/servicios" class="text-sm font-semibold text-gray-600 hover:text-primary tracking-wide transition-colors uppercase">Servicios</router-link>
                    <router-link to="/blog" class="text-sm font-semibold text-gray-600 hover:text-primary tracking-wide transition-colors uppercase">Blog</router-link>
                    <a href="#contacto" class="bg-primary hover:bg-primary-dark text-white px-6 py-2.5 rounded-full font-bold text-sm transition-all hover:shadow-lg hover:shadow-primary/30 hover:-translate-y-0.5 transform">
                        Contratar Ahora
                    </a>
                </div>

                <!-- Mobile Menu Button (Placeholder) -->
                <div class="md:hidden">
                    <button class="text-gray-600">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-8 h-8">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                        </svg>
                    </button>
                </div>
            </div>
        </div>
    </nav>
</template>
