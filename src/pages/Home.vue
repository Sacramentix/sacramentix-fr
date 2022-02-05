<template>
    <section Home>
        <h2>Benjamin Gilloury</h2>
        <field :n="25">
            <h3>
                <span>Full-stack</span>
                <span>developer</span>
            </h3>
            <main>
                <p>
                    I'm a Web developer, looking for quest to complete.
                    If you have the idea then I will make sure it's implemented perfectly.
                    My primary skill set includes Quasar, Vue with Typescript, Node and Haxe.
                    I also have experience in Continious Integration and Deployment with Github Workflow.
                </p>
            </main>
        </field>
    </section>
</template>
<style lang="scss">
[Home] {
    background: linear-gradient(#121212, #121212 50%, #0e1316 50%, #0e1316);
    display: flex;
    flex-direction: column;
    justify-items: center;
}
[Field] {
    section {
        color: #fff;
        padding: 5em calc(4% + 2em);
        padding-bottom: 15em;
        gap: 2em;
        display: grid;
        grid-template-columns: 1fr 1fr;
        grid-auto-rows: minmax(min-content, max-content);
        place-items: center stretch;
        & > h3 {
            text-align: center;
            font-size: 3.9em;
            font-weight: bold;
            span {
                display: block;
            }
        }
        & > main {
            background: #0e1316;
        }
        @media screen and (max-width: 600px) {
            grid-template-columns: 1fr;
        }
    }
}
</style>
<script lang="ts" setup>
import Field from '../components/art/Field.vue';
</script>
