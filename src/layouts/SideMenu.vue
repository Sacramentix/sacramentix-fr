<template>
    <div absolute inset-0 >
        <slot></slot>
    </div>
    <div SideMenu>
        <div>
            <transition name="slide">
                <nav v-if="showMenu">
                    <img logo :src="SLogo" width="256" height="256" alt="S shaped logo" />
                    <h1>Sacramentix</h1>

                    <internal-link link="/" label="Home">
                        <icon-mdi-home text-teal/>
                    </internal-link>

                    <internal-link link="/projects" label="Projects">
                        <icon-mdi-projects text-green/>
                    </internal-link>
                    
                    <internal-link link="/ressources" label="Ressources">
                        <icon-mdi-ressources text-red/>
                    </internal-link>
                    
                    <internal-link link="/stacks" label="Stacks">
                        <icon-mdi-stacks text-orange/>
                    </internal-link>

                    <external-link link="https://github.com/Sacramentix" label="Github">
                        <icon-mdi-github/>
                    </external-link>
                    
                    <external-link link="https://codepen.io/sacramentix" label="Codepen">
                        <icon-mdi-codepen/>
                    </external-link>

                    <external-link link="https://www.doyoubuzz.com/benjamin-gilloury" label="CV">
                        <icon-mdi-cv text-orange/>
                    </external-link>

                    <external-link link="https://discord.gg/cUnxzGa" label="Discord">
                        <icon-mdi-discord text-indigo-4/>
                    </external-link>
                    
                    <external-link link="https://github.com/Sacramentix/sacramentix-fr" label="Website repo">
                        <icon-mdi-github/>
                    </external-link>

                </nav>
            </transition>
            <input id="showMenu" type="checkbox" v-model="showMenu" />
            <label for="showMenu">
                <IconMdiPlay />
                <p>Show the menu</p>
            </label>
        </div>
    </div>
</template>
<style lang="scss">
[SideMenu] {
    isolation: isolate;
    display: flex;
    align-items: start;
    z-index: 2;
    pointer-events: none;
    filter: var(--filter-shadow);
    > div {
        display: inline-flex;
        align-items: flex-start;
    }
    nav {
        transform-box: fill-box;
        pointer-events: all;
        width: min-content;
        background: var(--clr-dark-bg);
        color: #fff;
        height: 100vh;
        display: inline-flex;
        flex-direction: column;
        overflow-y: auto;
        overflow-x: hidden;
        [logo] {
            max-width: 75%;
            align-self: center;
            filter: drop-shadow(0px 0px 30px teal);
        }
        h1 {
            padding: 0 30px 0 10px;
        }
        > a {
            text-decoration: none;
            color: #fff;
            display: flex;
            align-items: center;
            padding: 10px;
            gap: 10px;
            border-bottom: 1px solid #0002;
            p {
                margin: 0;
            }
        }
    }
}
#showMenu, label[for="showMenu"]>p {
    position: fixed;
    left: -10000px;
    background: white;
    color: black;
}
label[for="showMenu"] {
    padding: 0.25em 0.35em;
    border-radius: 10px;
    font-size: 25px;
    display: inline-grid;
    pointer-events: all;
    opacity: 0.7;
    transition: all ease-in-out 0.2s;
    transform: rotate(0deg);
    cursor: pointer;
    background: white;
    color: black;
    position: sticky;
    left: 0;
}
#showMenu:checked + label[for="showMenu"] {
    transform: rotate(-180deg);
}
.slide-enter-active,
.slide-leave-active {
    transition: margin-left 0.2s ease-in-out;
}

.slide-enter-from,
.slide-leave-to {
    margin-left: calc(-100%);
}
</style>
<script lang="ts" setup>
import IconMdiHome from "~icons/mdi/home"
import IconMdiProjects from "~icons/mdi/sprout"
import IconMdiRessources from "~icons/mdi/presentation-play"
import IconMdiStacks from "~icons/mdi/stack-overflow"
import IconMdiGithub from "~icons/mdi/github"
import IconMdiCodepen from "~icons/mdi/codepen"
import IconMdiCv from "~icons/mdi/account"
import IconMdiDiscord from "~icons/mdi/discord"
import SLogo from "../assets/svg/logo.svg"
import IconMdiPlay from "~icons/mdi/play"

import { ref } from 'vue';
import ExternalLink from "../components/ExternalLink.vue"
import InternalLink from "../components/InternalLink.vue"
const showMenu = ref(true);
</script>