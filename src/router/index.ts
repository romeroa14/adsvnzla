import { createRouter, createWebHistory } from 'vue-router';

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes: [
        {
            path: '/',
            name: 'home',
            component: () => import('../views/HomeView.vue')
        },
        {
            path: '/servicios',
            name: 'services',
            component: () => import('../views/ServicesView.vue')
        },
        {
            path: '/blog',
            name: 'blog',
            component: () => import('../views/BlogView.vue')
        },
        {
            path: '/consultoria',
            name: 'consulting',
            component: () => import('../views/ConsultingView.vue')
        },
        {
            path: '/diseno-grafico',
            name: 'design',
            component: () => import('../views/DesignView.vue')
        },
        {
            path: '/audiovisual',
            name: 'audiovisual',
            component: () => import('../views/AudiovisualView.vue')
        },
        {
            path: '/gestion-redes',
            name: 'social-media',
            component: () => import('../views/SocialMediaView.vue')
        }
    ],
    scrollBehavior(to, from, savedPosition) {
        if (savedPosition) {
            return savedPosition;
        }
        if (to.hash) {
            return {
                el: to.hash,
                behavior: 'smooth',
            }
        }
        return { top: 0 }
    }
});

export default router;
