import {createRouter, createWebHistory} from 'vue-router';

//importando e definindo as rotas
import HomeView from '../views/HomeView.vue';
import PokeView from '../views/PokeView.vue';


const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    //caminho das rotas
    routes: [ 
        {
            path: '/',
            name: 'HomeView',
            component: HomeView,
            children: [
                {
                    path: 'pokemon/:id',
                    name: 'PokeView',
                    component: PokeView,
                }
            ]
        },
    ],
})

export default router