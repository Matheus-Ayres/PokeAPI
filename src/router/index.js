import {createRouter, createWebHistory} from 'vue-router';

//importando e definindo as rotas
import HomePage from '../views/homePage.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //caminho das rotas
    routes: [ 
        {
            path: '/',
            name: 'HomePage',
            component: HomePage
        },
    ],
})

export default router