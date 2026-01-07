<template>
  <a 
    href="https://wa.me/584222536796?text=Hola,%20quisiera%20m%C3%A1s%20informaci%C3%B3n%20sobre%20sus%20servicios." 
    target="_blank" 
    rel="noopener noreferrer"
    class="fixed bottom-6 right-6 z-50 group flex items-center justify-center"
    title="Chatea con nosotros"
  >
    <!-- Pulse Effect -->
    <span class="absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-20 animate-ping group-hover:opacity-40 duration-1000"></span>
    
    <!-- Button -->
    <div class="relative bg-[#25D366] w-16 h-16 rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform duration-300 hover:shadow-green-500/50">
        <img src="@/assets/WhatsApp.svg.webp" alt="WhatsApp" class="w-10 h-10 object-contain drop-shadow-md brightness-0 invert" />
    </div>

    <!-- Tooltip / Label -->
    <div class="absolute right-full mr-4 bg-white text-gray-800 px-4 py-2 rounded-xl shadow-lg border border-gray-100 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none whitespace-nowrap font-bold text-sm">
        🤖 Asistente Virtual
        <div class="absolute top-1/2 -right-1 w-2 h-2 bg-white transform -translate-y-1/2 rotate-45 border-r border-t border-gray-100"></div>
    </div>
  </a>
</template>

<script setup lang="ts">
// Simple static component
</script>

<style scoped>
/* Ensure it stays above everything */
.z-50 {
    z-index: 9999;
}
</style>
