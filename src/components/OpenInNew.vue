<template>
    <a open-in-new clickable :href="p.link" rel="noreferrer" target="_blank">
        <icon-mdi-open-in-new/>
    </a>
</template>
<style lang="scss">
[open-in-new] {
    border-radius: 50%;
    padding: 5px;
    display: inline-grid;
    place-items: center;
    color: #fff;
}
</style>
<script lang="ts" setup>
import IconMdiOpenInNew from "~icons/mdi/open-in-new";
const p = defineProps({
  link: {
    type: String,
    default: ""
  } 
});
</script>
