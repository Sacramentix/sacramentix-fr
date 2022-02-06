<template>
    <a clickable :href="p.link" rel="noreferrer" target="_blank">
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
