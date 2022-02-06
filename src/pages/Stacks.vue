<template>
    <section Stacks>
        <h2>Stacks</h2>
        <main grid>
            <div v-for="s in stacks" :key="s.name">
                <div logo>
                    <img :src="s.logo" width="88" :alt="s.name + ' logo'" />
                </div>
                <h3>
                    {{ s.name }}
                    <open-in-new :link="s.link" />
                </h3>
                <p>{{ s.text }}</p>
                <div links>
                    <h4>I use this stack in:</h4>
                    <external-link v-for="l in s.projects" :key="l.name" :link="l.link" :label="l.name"/>
                </div>
            </div>
        </main>
    </section>
</template>
<style lang="scss">
[Stacks] {
    overflow-y: auto;
    height: 100%;
    width: 100%;
    [grid] {
        grid-template-columns: repeat(auto-fill, max(350px, 23%));
        & > div {
            color: white;
            border-radius: 15px;
            background: var(--clr-dark-bg);
            overflow: hidden;
            filter: var(--filter-shadow);
            transition: transform 0.1s ease-in-out;
            display: grid;
            place-items: center;
            gap: 10px;
            grid-template-columns: 88px 1fr;
            grid-auto-rows: min-content 1fr;
            grid-template-areas:
                "i t"
                "d d"
                "l l";
            @media (max-width: 500px) {
                grid-template-columns: 25% 1fr;
            }
            [logo] {
                padding: 10px;
            }
            img {
                padding: 10px;
                width: 100%;
                height: auto;
                grid-area: i;
                filter: drop-shadow(0 0 3px #fff3);
            }
            h3 {
                grid-area: t;
                margin: 0;
                display: inline-flex;
                align-items: center;
                gap: 15px;
            }
            p {
                grid-area: d;
                text-align: left;
                margin: 0;
                padding: 0 10px;
            }
            h4 {
                margin: 0;
            }
            & > [links] {
                grid-area: l;
                text-align: center;
                display: flex;
                flex-direction: column;
                width: 100%;
                & > a {
                    &:not([href]) {
                        color: #fff;
                        cursor: not-allowed;
                    }
                    color: teal;
                    padding: 10px;
                    width: 100%;
                }
            }
        }
    }
}
</style>
<script lang="ts" setup>
import quasarSVG from "../assets/svg/stack/quasar.svg";
import vueSVG from "../assets/svg/stack/vue.svg";
import typescriptSVG from "../assets/svg/stack/typescript.svg";
import nodeSVG from "../assets/svg/stack/node.svg";
import fastifySVG from "../assets/svg/stack/fastify.svg";
import reactSVG from "../assets/svg/stack/react.svg";
import haxeSVG from "../assets/svg/stack/haxe.svg";
import OpenInNew from "../components/OpenInNew.vue";
import ExternalLink from "../components/ExternalLink.vue";

const stacks = [
    {
        name: "Quasar js",
        logo: quasarSVG,
        link: "https://quasar.dev/",
        text: `I love this stack! I've made several project with it. Like this website is made with Quasar! I also created the front end of
                  Wiki Adventure with it.`,
        projects: [
            { name: "Wiki Adventure", link: "https://github.com/Sacramentix/WikiAdventure" },
            { name: "Naostre (closed source)" }
        ]
    },
    {
        name: "Vue js",
        logo: vueSVG,
        link: "https://vuejs.org/",
        text: "An awesome stack that I mostly use through the framework quasar. I use it exclusively with typescript to have a clean and type safe code base.",
        projects: [
            { name: "Wiki Adventure", link: "https://github.com/Sacramentix/WikiAdventure" },
            { name: "Naostre (closed source)" }
        ]
    },
    {
        name: "Typescript",
        logo: typescriptSVG,
        link: "https://www.typescriptlang.org/",
        text: "I love typescript! I rarely go with pure javascript.",
        projects: [
            { name: "Wiki Adventure", link: "https://github.com/Sacramentix/WikiAdventure" },
            { name: "Naostre (closed source)" }
        ]
    },
    {
        name: "Node js",
        logo: nodeSVG,
        link: "https://nodejs.org/",
        text: "My favorite backend! Most of my project use it. I either transpile the js the node server interprets from Haxe or typescript to have clean and type safe code base.",
        projects: [
            { name: "Wiki Adventure", link: "https://github.com/Sacramentix/WikiAdventure" },
            { name: "Naostre (closed source)" }
        ]
    },
    {
        name: "Fastify",
        logo: fastifySVG,
        link: "https://www.fastify.io/",
        text: "Fast and low overhead web framework I use with Node js. It's like Express but better and faster!",
        projects: [
            { name: "Naostre (closed source)" }
        ]
    },
    {
        name: "React",
        logo: reactSVG,
        link: "https://reactjs.org/",
        text: "Even if prefer Vue, contributed to open source project that using react.",
        projects: [
            { name: "Contribution Nos gestes climat", link: "https://github.com/datagir/nosgestesclimat-site/pull/253" }
        ]
    },
    {
        name: "Haxe",
        logo: haxeSVG,
        link: "https://haxe.org/",
        text: "My favorite language, which is however not very popular. It have the advantage to be strictly-typed, multi-paradigm and to transpile to several other language like javascript!",
        projects: [
            { name: "Wiki Adventure", link: "https://github.com/Sacramentix/WikiAdventure" }
        ]
    },
]
</script>

