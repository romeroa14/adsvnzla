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
        }
    ]
});

export default router;
