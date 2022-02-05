<template>
    <section Ressources>
        <h2>Ressources</h2>
        <main grid>
            <div v-for="l in links" :key="l.id">
                <div v-if="l.type == 'YTchannel'" channel>
                    <img :src="'https://yt3.ggpht.com/ytc/' + l.img + '=s88-c-k-c0x00ffffff-no-rj'" />
                    <h3>
                        {{ l.name }}
                        <open-in-new :link="'https://www.youtube.com/channel/' + l.id"/>
                    </h3>
                    <p>{{ l.desc }}</p>
                </div>
                <iframe
                    v-else
                    width="560"
                    height="315"
                    :src="'https://www.youtube-nocookie.com/embed/'+ (l.type == LinkType.YTplaylist ? 'videoseries?list=' : '') + l.id"
                    frameborder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowfullscreen
                />
            </div>
        </main>
    </section>
</template>
<style lang="scss">
[Ressources] {
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
            [channel] {
                display: grid;
                place-items: center;
                gap: 10px;
                padding: 10px;
                grid-template-columns: 88px 1fr;
                grid-auto-rows: min-content 1fr;
                grid-template-areas:
                    "i t"
                    "d d";
                @media (max-width: 500px) {
                    grid-template-columns: 25% 1fr;
                }
                img {
                    border-radius: 50%;
                    width: 100%;
                    height: auto;
                    grid-area: i;
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
                    margin: 5px;
                }
            }
            iframe {
                width: 100%;
            }
        }
    }
}
</style>
<script lang="ts" setup>
import OpenInNew from "../components/OpenInNew.vue";
enum LinkType {
    YTvideo = "YTvideo",
    YTchannel = "YTchannel",
    YTplaylist = "YTplaylist"
}
const links = [
    {
        id: 'UCnUYZLuoy1rq1aVMwx4aTzw',
        name: "Google Chrome Developers",
        desc: "Official Youtube channel of Google Chrome dev team. Follow this channel to be informed of all the news of the web!",
        img: "AAUvwniL7QUpTiyGjIpNfk6g7eCkMSB3yjnMS4wkMvY49Q",
        type: LinkType.YTchannel
    },
    { id: 'PLNYkxOF6rcIAKIQFsNbV0JDws_G_bnNo9', type: LinkType.YTplaylist },
    { id: 'PLNYkxOF6rcIDfz8XEA3loxY32tYh7CI3m', type: LinkType.YTplaylist },
    {
        id: 'UCJZv4d5rbIKd4QHMPkcABCw',
        name: "Kevin Powell",
        desc: "You love css? Then you will love this css wizard channel! You will learn awesome css tricks to improve your website.",
        img: "AAUvwngmy_4_dTEMieSCIh8CL8SYgTg7uqIIb_ajY8O_zg",
        type: LinkType.YTchannel
    },
    { id: 'PL4-IK0AVhVjMI45H5E9oE47wj-7AZLNnK', type: LinkType.YTplaylist },
    {
        id: 'UCsBjURrPoezykLs9EqgamOA',
        name: "Fireship",
        desc: "Want to have a quick review of new stacks? This channel present them in a 100 seconds format!",
        img: "AAUvwnjWfh0Ki7uJWaYNhpZyG8ataxCL9N5SscOhfZfGXg",
        type: LinkType.YTchannel
    },
    { id: 'PL0vfts4VzfNiI1BsIK5u7LpPaIDKMJIDN', type: LinkType.YTplaylist },
    {
        id: 'UC8butISFwT-Wl7EV0hUK0BQ',
        name: "Free Code Camp",
        desc: "This channel offers free tutorials on a large amount of stack!",
        img: "AAUvwnifaQZvAunS0OFb2y_cieoVjLCVjqQW8Exf3BC1gg",
        type: LinkType.YTchannel
    },
    {
        id: 'UCcAlTqd9zID6aNX3TzwxJXg',
        name: "The Art of Code",
        desc: "Want to learn Shader? This channel provide a large amount of knowledge from beginners to master!",
        img: "AAUvwnhMOVOXUv5mqRnsrPxhGqju2xtKUgtdY11gOvqa",
        type: LinkType.YTchannel
    },
]
</script>

