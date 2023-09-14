import { createRouter, createWebHistory} from 'vue-router'
import Home from '../views/Home.vue'
import cart from '../views/cart.vue'
import testAPI from '../views/testAPI.vue'
import cartoes from '../views/cartoes.vue'
import entregador from '../views/entregador.vue'
import loginEntregador from '../views/loginEntregador.vue'
import paginaEntregador from '../views/paginaEntregador.vue'
import modificarEntregador from '../views/modificarEntregador.vue'
import entregas from '../views/entregas.vue'

const router = createRouter({
    history: createWebHistory(),
    routes: [
        {
            path: '/',
            name: 'Home',
            component: Home
        },
        {
            path: '/cart',
            name: 'Cart',
            component: cart
        },
        {
            path: '/test',
            name: 'test',
            component: testAPI
        },
        {
            path: '/cartoes',
            name: 'cartoes',
            component: cartoes
        },
        {
            path: '/entregador',
            name: 'entregador',
            component: entregador
        },
        {
            path: '/loginEntregador',
            name: 'loginEntregador',
            component: loginEntregador
        },
        {
            path: '/paginaEntregador/:email',
            name: 'paginaEntregador',
            component: paginaEntregador,
        },
        {
            path: '/modificarEntregador/:email',
            name: 'modificarEntregador',
            component: modificarEntregador,
        },
        {
            path: '/entregas',
            name: 'entregas',
            component: entregas
        },
    ]
})

export default router
