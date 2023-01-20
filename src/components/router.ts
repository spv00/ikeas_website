import { createRouter, createWebHistory } from 'vue-router';
import Profile from './views/Profile.vue';
import Projects from './views/Projects.vue';
import Contact from './views/Contact.vue';
import process from 'process';
import Gallery from './views/Gallery.vue';
import Resume from './views/Resume.vue';
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
        path: '/gallery',
        name: 'Gallery',
        component: Gallery,
    },
    {
        path: '/resume',
        name: 'Resume',
        component: Resume,
    }
]
const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes
})
export default router