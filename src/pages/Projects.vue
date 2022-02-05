<template>
    <section Projects>
        <h2>Projects</h2>
        <main grid>
            <div card>
                <img
                    src="../assets/svg/wikiAdventure.svg"
                    width="468"
                    height="291"
                    alt="Wiki Adventure logo"
                />
                <p>
                    WikiAdventure is a multiplayer game combining culture and speed.
                    Players compete against each other on Wikipedia and have to scroll
                    through the pages as quickly as possible to win.
                </p>
                <div links>
                    <a
                        clickable
                        href="https://github.com/Sacramentix/WikiAdventure" rel="noreferrer"
                        target="_blank"
                    >
                        <icon-mdi-github text-white />
                        <p>Github</p>
                    </a>
                    <a clickable href="https://wiki-adventure.herokuapp.com" rel="noreferrer" target="_blank">
                        <icon-mdi-earth text-teal />
                        <p>The website</p>
                    </a>
                    <a clickable href="https://discord.gg/wRN6Dam" rel="noreferrer" target="_blank">
                        <icon-mdi-discord text-indigo-4 />
                        <p>discord</p>
                    </a>
                </div>
            </div>

            <div card>
                <h3>Open Source Contribution</h3>
                <icon-logos-github-octocat width="600" height="600" />
                <p>Check out my Github profile, I made most of my contribution on it.</p>
                <div links>
                    <a clickable href="https://github.com/Sacramentix" rel="noreferrer" target="_blank">
                        <icon-mdi-github text-white />
                        <p>Github</p>
                    </a>
                </div>
            </div>
        </main>
    </section>
</template>
<style lang="scss">
[Projects] {
    overflow-y: auto;
    height: 100%;
    width: 100%;
    [card] {
        color: white;
        border-radius: 15px;
        background: var(--clr-dark-bg);
        overflow: hidden;
        filter: var(--filter-shadow);
        display: flex;
        flex-direction: column;
        > img,
        > svg {
            object-fit: contain;
            max-height: 250px;
            max-width: 100%;
        }
        p {
            padding: 0 15px;
        }
        h3 {
            text-align: center;
            font-size: 1.75em;
            margin: 5px;
        }
        [links] {
            margin-top: 15px;
            height: auto;
            flex-grow: 1;
            align-items: center;
            p {
                margin: 0;
            }
            > a {
                text-decoration: none;
                color: #fff;
                font-size: 1.5em;
                display: flex;
                gap: 15px;
                padding: 5px 15px;
                align-items: center;
            }
        }
    }
}
</style>
<script lang="ts" setup>
import IconMdiGithub from "~icons/mdi/github"
import IconMdiDiscord from "~icons/mdi/discord"
import IconMdiEarth from "~icons/mdi/earth"
import IconLogosGithubOctocat from "~icons/logos/github-octocat"
</script>
