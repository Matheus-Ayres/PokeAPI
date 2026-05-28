import {createRouter, createWebHistory} from 'vue-router';

//importando e definindo as rotas
import HomeView from '../views/HomeView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //caminho das rotas
    routes: [ 
        {
            path: '/',
            name: 'HomeView',
            component: HomeView
        },
    ],
})

export default router