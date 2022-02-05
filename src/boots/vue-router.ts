import { routes } from './../routes/index';
import { createRouter, createWebHashHistory } from "vue-router";


export const router = createRouter({
    history: createWebHashHistory(),
    routes: routes
})