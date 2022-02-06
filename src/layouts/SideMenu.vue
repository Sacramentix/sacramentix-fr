<template>
    <div absolute inset-0>
        <slot></slot>
    </div>
    <div SideMenu>
        <div>
            <transition name="slide">
                <nav v-if="showMenu">
                    <img logo :src="SLogo" width="256" height="256" alt="S shaped logo" />
                    <h1>Sacramentix</h1>

                    <a clickable @click.prevent="$router.replace('/')" href="/">
                        <icon-mdi-home text-teal />
                        <p>Home</p>
                    </a>

                    <a clickable @click.prevent="$router.replace('/projects')" href="/projects">
                        <icon-mdi-projects text-green />
                        <p>Projects</p>
                    </a>

                    <a clickable @click.prevent="$router.replace('/ressources')" href="/ressources">
                        <icon-mdi-ressources text-red />
                        <p>Ressources</p>
                    </a>

                    <a clickable @click.prevent="$router.replace('/stacks')" href="/stacks">
                        <icon-mdi-stacks text-orange />
                        <p>Stacks</p>
                    </a>

                    <a clickable href="https://github.com/Sacramentix" rel="noreferrer" target="_blank">
                        <icon-mdi-github />
                        <p>Github</p>
                    </a>

                    <a clickable href="https://codepen.io/sacramentix" rel="noreferrer" target="_blank">
                        <icon-mdi-codepen />
                        <p>Codepen</p>
                    </a>

                    <a clickable href="https://www.doyoubuzz.com/benjamin-gilloury" rel="noreferrer" target="_blank">
                        <icon-mdi-cv text-orange />
                        <p>CV</p>
                    </a>

                    <a clickable href="https://discord.gg/cUnxzGa" rel="noreferrer" target="_blank">
                        <icon-mdi-discord text-indigo-4 />
                        <p>Discord</p>
                    </a>
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
const showMenu = ref(true);
</script>