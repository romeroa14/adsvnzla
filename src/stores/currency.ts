import { defineStore } from 'pinia';
import { ref, computed } from 'vue';
import { getCurrencies } from '../services/CurrencyService';
import type { ICurrency } from '../interfaces/ICurrency';

export const useCurrencyStore = defineStore('currency', () => {
    const currencies = ref<ICurrency[]>([]);
    const loading = ref(false);

    // BCV is typically labeled as 'oficial' or 'bcv'
    const bcv = computed(() => currencies.value.find(c => c.fuente === 'oficial') || currencies.value.find(c => c.fuente === 'bcv'));
    // USDT refers to the average (paralelo) rate
    const usdt = computed(() => currencies.value.find(c => c.fuente === 'paralelo'));
    // Euro
    const euro = computed(() => currencies.value.find(c => c.fuente === 'euro') || currencies.value.find(c => c.fuente === 'eur'));

    const fetchRates = async () => {
        loading.value = true;
        currencies.value = await getCurrencies();
        loading.value = false;
    };

    return { currencies, bcv, usdt, euro, loading, fetchRates };
});
