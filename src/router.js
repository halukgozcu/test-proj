import { createRouter, createWebHistory } from 'vue-router';
import Customer from "./components/Customer.vue";
import Product from "./components/Product.vue";
import HelloWorld from "./components/HelloWorld.vue";
const routes = [
    {
        path: '/',
        name: 'HelloWorld',
        component: HelloWorld
    },
    {
        path: '/product',
        name: 'Product',
        component: Product
    },
    {
        path: '/customer',
        name: 'Customer',
        component: Customer
    }
];

const router = createRouter({
    history: createWebHistory(),  // Default base URL
    routes
});

export default router;
