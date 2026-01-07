<template>
  <div class="bg-white rounded-2xl shadow-xl p-6 md:p-10 border border-gray-100 max-w-4xl mx-auto" id="ads-calculator">
    <div class="text-center mb-10">
        <h3 class="text-3xl font-black text-gray-900 mb-2">Calculadora de Planes Ads</h3>
        <p class="text-gray-500">Selecciona tu presupuesto y duración para ver el precio final.</p>
    </div>
    
    <!-- Budget Selector -->
    <div class="flex flex-col sm:flex-row justify-center mb-10 space-y-4 sm:space-y-0 sm:space-x-4">
        <button 
            v-for="budget in [1, 2, 3]" 
            :key="budget"
            @click="selectedBudget = budget"
            class="px-8 py-4 rounded-xl font-bold transition-all duration-300 border-2 flex flex-col items-center group relative overflow-hidden"
            :class="selectedBudget === budget ? 'bg-primary text-white border-primary shadow-lg scale-105 z-10' : 'bg-white text-gray-500 border-gray-200 hover:border-primary/30 hover:bg-gray-50'"
        >
            <span class="text-lg relative z-10">${{ budget }} Diario</span>
            <span class="text-xs font-normal opacity-80 relative z-10" v-if="budget === 1">Iniciación</span>
            <span class="text-xs font-normal opacity-80 relative z-10" v-if="budget === 2">Crecimiento</span>
            <span class="text-xs font-normal opacity-80 relative z-10" v-if="budget === 3">Escalado</span>
        </button>
    </div>

    <!-- Duration Slider/Grid -->
    <div class="mb-10">
        <label class="block text-sm font-bold text-gray-400 uppercase tracking-widest mb-6 text-center">Duración de la Campaña</label>
        <div class="flex flex-wrap justify-center gap-3">
             <button 
                v-for="days in availableDays" 
                :key="days"
                @click="selectedDays = days"
                class="w-12 h-12 md:w-16 md:h-16 rounded-2xl flex items-center justify-center font-bold transition-all duration-300"
                :class="selectedDays === days ? 'bg-secondary text-white shadow-lg scale-110 ring-4 ring-secondary/20' : 'bg-gray-100 text-gray-400 hover:bg-gray-200 hover:text-gray-600'"
             >
                {{ days }}d
             </button>
        </div>
    </div>

    <!-- Result Card -->
    <div class="bg-surface rounded-2xl p-8 border border-gray-200 relative overflow-hidden">
        <!-- Decorative bg -->
        <div class="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16"></div>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-8 text-center divide-y md:divide-y-0 md:divide-x divide-gray-200 relative z-10">
            <div class="py-2">
                <p class="text-xs uppercase text-gray-500 font-bold tracking-widest mb-2">Inversión Plataforma</p>
                <p class="text-4xl font-black text-gray-800">${{ investment }}</p>
            </div>
            <div class="py-2">
                 <p class="text-xs uppercase text-gray-500 font-bold tracking-widest mb-2">Gestión y Servicio</p>
                 <p class="text-4xl font-black text-gray-800">${{ commission }}</p>
            </div>
             <div class="py-2">
                 <p class="text-xs uppercase text-primary font-bold tracking-widest mb-2">Total a Pagar</p>
                 <p class="text-5xl font-black text-primary">${{ total }}</p>
                 <p class="text-xs text-gray-400 mt-2 font-medium">Incluye impuestos</p>
            </div>
        </div>
    </div>
    
    <div class="mt-10 text-center">
        <a href="https://wa.me/584242536795" target="_blank" class="inline-flex items-center justify-center bg-green-500 hover:bg-green-600 text-white font-bold py-4 px-10 rounded-full shadow-xl hover:shadow-green-500/40 transition-all transform hover:-translate-y-1 text-lg group">
            <i class="ph-whatsapp-logo text-2xl mr-3"></i>
            Contratar este Plan
            <i class="ph-arrow-right ml-2 group-hover:translate-x-1 transition-transform"></i>
        </a>
        <p class="mt-4 text-xs text-gray-400">Te redirigirá a WhatsApp para finalizar la compra</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, computed } from 'vue';

const selectedBudget = ref(1);
const selectedDays = ref(3);

const availableDays = [3, 4, 5, 6, 7, 8, 9, 10, 15];

const investment = computed(() => selectedBudget.value * selectedDays.value);

const getCommission = (budget: number, days: number) => {
    const map: Record<string, number> = {
        '1-3': 6, '1-4': 8, '1-5': 10, '1-6': 12, '1-7': 14, '1-8': 16, '1-9': 18, '1-10': 19, '1-15': 29,
        '2-3': 10, '2-4': 11, '2-5': 12, '2-6': 15, '2-7': 15, '2-8': 19, '2-9': 20, '2-10': 27, '2-15': 36,
        '3-3': 13, '3-4': 15, '3-5': 17, '3-6': 19, '3-7': 22, '3-8': 23, '3-9': 26, '3-10': 27, '3-15': 39
    };
    return map[`${budget}-${days}`] || 0;
};

const commission = computed(() => getCommission(selectedBudget.value, selectedDays.value));
const total = computed(() => investment.value + commission.value);
</script>
