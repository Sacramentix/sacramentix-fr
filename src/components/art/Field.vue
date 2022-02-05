<template>
  <div Field>
    <div neon-edge>
      <section unskew>
        <slot></slot>
      </section>
    </div>
    <neon-triangle v-for="i in n" :key="i" :style="triangleStyle(i)" />
  </div>
</template>
<style lang="scss">
[Field] {
  position: absolute;
  transform-origin: top left;
  left: -2%;
  width: 104%;
  top: 40vh;
  transform: skewY(-5deg);
}
[neon-edge] {
  border-top: 1px solid #e8ffff;
  background: #0e1316;
  height: 100vh;
  box-shadow: 0 -20px 20px -5px rgba(18, 230, 238, 0.5);
  overflow: hidden;
  display: grid;
  place-items: center;
}
[unskew] {
  margin-top: -50px;
  transform: skewY(5deg);
  height: calc(60vh - 5em);
  overflow-y: auto;
}
</style>

<script lang="ts" setup>
import { CSSProperties } from "vue";
import NeonTriangle from "./NeonTriangle.vue";

const props = defineProps({
  n: {
    type: Number,
    default: 0
  } 
});

function triangleStyle(i:number):CSSProperties {
  return {
    left: (i/(props.n+1)*100)+"%"
  }
}
</script>
