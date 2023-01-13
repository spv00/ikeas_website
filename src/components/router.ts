import { createRouter, createWebHistory } from 'vue-router';
import Profile from './views/Profile.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';
import process from 'process';
const routes = [
    {
        path: '/',
        name: 'Home',
        component: Profile
    },
    {
        path: '/github',
        name: 'Github',
        component: Projects
    },
    {
        path: '/contact',
        name: 'Contact',
        component: Contact
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router