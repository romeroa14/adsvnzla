<template>
    <div class="min-h-screen flex flex-col bg-gray-50 font-sans">
        <!-- Currency Widget (Fixed Top) -->
        <CurrencyWidget />
        
        <!-- Navbar -->
        <Navbar />
        
        <!-- Main Content -->
        <main class="flex-grow pt-4"> <!-- Added pt-4 for spacing from sticky nav if needed -->
            <slot />
        </main>
        
        <!-- Footer -->
        <Footer />

        <!-- Chat Widget -->
        <WhatsAppBubble />
    </div>
</template>

<script setup lang="ts">
import CurrencyWidget from '../components/widgets/CurrencyWidget.vue';
import Navbar from '../components/layout/Navbar.vue';
import Footer from '../components/layout/Footer.vue';
import WhatsAppBubble from '../components/widgets/WhatsAppBubble.vue';
</script>
