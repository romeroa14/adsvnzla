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
                <a href="#gestion" class="bg-transparent border border-gray-600 text-white hover:bg-white hover:text-dark px-8 py-4 rounded-full font-bold text-lg transition-all">
                    Gestión de Redes
                </a>
            </div>
        </div>
    </section>

    <!-- Services Overview -->
    <section class="py-24 bg-gray-50">
        <div class="container mx-auto px-4">
            <div class="text-center mb-16">
                 <h2 class="text-4xl font-black text-gray-900 mb-4">Nuestros Servicios</h2>
                 <p class="text-xl text-gray-500 max-w-2xl mx-auto">Soluciones digitales adaptadas a tu etapa de crecimiento.</p>
            </div>

            <div class="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                <!-- Card 1: Ads -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                    <div class="w-16 h-16 bg-red-100 rounded-2xl flex items-center justify-center text-primary text-3xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="ph-megaphone"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Publicidad en redes (Ads)</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        Campañas puntuales para alcance, ventas o visibilidad. Planes desde $9. Ideal para promociones y lanzamientos rápidos.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center text-gray-500"><i class="ph-check-circle text-green-500 mr-2"></i> Segmentación Potente</li>
                        <li class="flex items-center text-gray-500"><i class="ph-check-circle text-green-500 mr-2"></i> Resultados Medibles</li>
                        <li class="flex items-center text-gray-500"><i class="ph-check-circle text-green-500 mr-2"></i> Desde $1/día de presupuesto</li>
                    </ul>
                </div>

                <!-- Card 2: Management -->
                <div class="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-shadow border border-gray-100 group">
                     <div class="w-16 h-16 bg-blue-100 rounded-2xl flex items-center justify-center text-secondary text-3xl mb-6 group-hover:scale-110 transition-transform">
                        <i class="ph-users-three"></i>
                    </div>
                    <h3 class="text-2xl font-bold mb-4">Gestión de Redes Sociales</h3>
                    <p class="text-gray-600 mb-6 leading-relaxed">
                        Servicio mensual integral. Creación de contenido, edición pro, historias diarias y visitas al local.
                    </p>
                    <ul class="space-y-3 mb-8">
                        <li class="flex items-center text-gray-500"><i class="ph-check-circle text-green-500 mr-2"></i> Estrategia de Contenidos</li>
                        <li class="flex items-center text-gray-500"><i class="ph-check-circle text-green-500 mr-2"></i> 3 Posts + 1 Reel semanal</li>
                        <li class="flex items-center text-gray-500"><i class="ph-check-circle text-green-500 mr-2"></i> Visitas presenciales (Altos Mirandinos)</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <!-- Pricing / Ads Calculator -->
    <section id="planes" class="py-24 bg-white relative">
        <div class="container mx-auto px-4">
             <div class="text-center mb-16">
                 <h2 class="text-4xl font-black text-gray-900 mb-4">Planes de Publicidad</h2>
                 <p class="text-xl text-gray-500">Calcula tu inversión y escala tu negocio.</p>
            </div>
            
            <AdsCalculator />
        </div>
    </section>

    <!-- Social Media Management Pricing -->
    <section id="gestion" class="py-24 bg-dark text-white relative overflow-hidden">
        <div class="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&w=2574&auto=format&fit=crop')] bg-cover bg-center opacity-10"></div>
        <div class="container mx-auto px-4 relative z-10">
             <div class="max-w-4xl mx-auto bg-gray-900/80 backdrop-blur-lg border border-gray-700 rounded-3xl p-8 md:p-12">
                <div class="flex flex-col md:flex-row items-center justify-between gap-10">
                    <div>
                        <span class="text-primary font-bold tracking-widest text-sm uppercase mb-2 block">Monthly Plan</span>
                        <h2 class="text-4xl md:text-5xl font-black mb-6">Gestión de Redes</h2>
                        <ul class="space-y-4 text-gray-300 mb-8">
                            <li class="flex items-start"><i class="ph-check text-primary text-xl mr-3 mt-1"></i> <div><strong>Contenido Completo:</strong> 3 Posts + 1 Reel semanal</div></li>
                             <li class="flex items-center"><i class="ph-check text-primary text-xl mr-3"></i> <strong>Historias Diarias:</strong> Mínimo 2 al día</li>
                             <li class="flex items-center"><i class="ph-check text-primary text-xl mr-3"></i> <strong>3 Visitas al mes:</strong> Grabación y fotos en local</li>
                             <li class="flex items-center"><i class="ph-check text-primary text-xl mr-3"></i> <strong>Edición Premium:</strong> CapCut / Adobe</li>
                        </ul>
                        <p class="text-sm text-gray-500">*Inversión en Ads se cobra aparte si se requiere.</p>
                    </div>
                    <div class="text-center min-w-[200px]">
                        <div class="text-6xl font-black text-white mb-2">$180</div>
                        <div class="text-gray-400 mb-6">/ mes</div>
                        <a href="https://wa.me/584242536795?text=Hola,%20me%20interesa%20el%20plan%20de%20Gesti%C3%B3n%20de%20Redes" class="block w-full bg-white text-dark hover:bg-gray-200 py-3 rounded-full font-bold transition-colors">
                            Agenda tu Cita
                        </a>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <!-- Basic $9 Plan Callout -->
    <section class="py-20 bg-primary/5">
        <div class="container mx-auto px-4 text-center">
            <h2 class="text-3xl font-bold text-gray-900 mb-4">¿Solo quieres probar?</h2>
            <p class="text-gray-600 mb-8 max-w-xl mx-auto">
                Nuestro <strong>Plan Básico de $9</strong> es perfecto para nuevos clientes. Incluye $1 diario por 3 días + configuración profesional.
            </p>
            <a href="#planes" class="text-primary font-bold hover:underline flex items-center justify-center">
                Ir a la calculadora <i class="ph-arrow-down ml-2"></i>
            </a>
        </div>
    </section>
  </div>
</template>

<script setup lang="ts">
import AdsCalculator from '../components/pricing/AdsCalculator.vue';
</script>
