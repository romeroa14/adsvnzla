<template>
  <div class="fixed top-0 w-full bg-dark text-white text-xs z-50 py-2 overflow-hidden shadow-sm">
    <div class="container mx-auto flex justify-between items-center px-4">
        <div class="flex items-center space-x-6 animate-fade-in" v-if="!loading">
            <div v-if="bcv" class="flex items-center space-x-2">
                <span class="font-bold text-gray-300">BCV:</span>
                <span class="font-mono font-semibold text-green-400">{{ bcv.promedio.toFixed(2) }} Bs</span>
            </div>
            <div v-if="euro" class="flex items-center space-x-2 border-l border-gray-700 pl-6">
                <span class="font-bold text-gray-300">EUR:</span>
                <span class="font-mono font-semibold text-blue-400">{{ euro.promedio.toFixed(2) }} Bs</span>
            </div>
            <!-- Placeholder for USDT if not in generic API, assuming close to BCV/Paralelo mix or static for now -->
            <div v-if="usdt" class="hidden sm:flex items-center space-x-2 border-l border-gray-700 pl-6">
                <span class="font-bold text-gray-300">USDT:</span>
                <span class="font-mono font-semibold text-teal-400">~{{ usdt.promedio.toFixed(2) }} Bs</span>
            </div>
        </div>
        <div v-else class="text-gray-500 italic text-xs">
            Actualizando tasas del día...
        </div>
        <div class="hidden md:flex items-center space-x-2 text-gray-400 text-[10px] tracking-wider uppercase">
            <span class="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
            <span>Precios actualizados a Tasa BCV</span>
        </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import { useCurrencyStore } from '../../stores/currency';
import { storeToRefs } from 'pinia';

const store = useCurrencyStore();
const { bcv, euro, loading } = storeToRefs(store);

onMounted(() => {
    store.fetchRates();
});
</script>
