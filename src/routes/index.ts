import { RouteRecordRaw } from "vue-router";
import Home from "../pages/Home.vue";
import Projects from "../pages/Projects.vue";
import Ressources from "../pages/Ressources.vue";
import Stacks from "../pages/Stacks.vue";

export const routes:RouteRecordRaw[] = [
    {
        path: "/",
        name: "Home",
        component: Home
    },
    {
        path: "/projects",
        name: "Projects",
        component: Projects
    },
    {
        path: "/ressources",
        name: "Ressources",
        component: Ressources
    },
    {
        path: "/stacks",
        name: "Stacks",
        component: Stacks
    }
]