<template>
    <a clickable @click.prevent="$router.replace(p.link)" :href="p.link">
        <slot></slot>
        <p>{{ p.label }}</p>
    </a>
</template>
<script lang="ts" setup>
const p = defineProps({
  link: {
    type: String,
    default: ""
  },
  label: {
    type: String,
    default: ""
  }
});
</script>
