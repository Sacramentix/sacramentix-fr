<template>
  <div neon-triangle float :isback="isBack" :style="floatStyle">
    <div rotate :style="rotateStyle">
      <svg    
        id="root"
        :width="40 * size"
        :height="37.5 * size"
        version="1.1"
        viewBox="-10.5 -10 21 20"
        xmlns="http://www.w3.org/2000/svg"
      >
        <defs>
          <filter
            :id="'neon' + uuid"
            x="-.75"
            y="-.75"
            width="2.5"
            height="2.7"
            color-interpolation-filters="sRGB"
          >
            <feFlood id="smNeonColor" :flood-color="'hsl(180, 90%, ' + light + '%)'" result="flood" />
            <feComposite in="flood" in2="SourceGraphic" operator="in" result="composite1" />
            <feGaussianBlur in="composite1" result="blur" stdDeviation="2" />
            <feOffset dx="0" dy="-0" result="offset" />
            <feComposite in="SourceGraphic" in2="offset" result="fbSourceGraphic" />
            <feColorMatrix
              in="fbSourceGraphic"
              result="fbSourceGraphicAlpha"
              values="0 0 0 -1 0 0 0 0 -1 0 0 0 0 -1 0 0 0 0 1 0"
            />
            <feFlood
              id="lgNeonColor"
              :flood-color="'hsl(180, 90%, ' + light + '%)'"
              in="fbSourceGraphic"
              result="flood"
            />
            <feComposite in="flood" in2="fbSourceGraphic" operator="in" result="composite1" />
            <feGaussianBlur in="composite1" result="blur" stdDeviation="19.1617" />
            <feOffset dx="0" dy="-0" result="offset" />
            <feComposite in="fbSourceGraphic" in2="offset" result="composite2" />
          </filter>
        </defs>
        <g transform="translate(15 20)">
          <g transform="matrix(.12 0 0 .12 -7.9 -21)">
            <path
              id="shape"
              d="m-62-33 35 61h-70z"
              :fill="'hsl(180, 90%, ' + light + '%)'"
              :filter="'url(#neon' + uuid + ')'"
            />
          </g>
        </g>
      </svg>
    </div>
  </div>
</template>
<style lang="scss">
[neon-triangle] {
  &[float] {
    position: absolute;
    top: 0;
    transform: translate3d(0, 0, 0);
    will-change: transform;
    animation: 2s float infinite alternate ease-in-out;
  }
  &[isBack="true"] {
    z-index: -1;
  }
  [rotate] {
    position: absolute;
    transform: rotate(0deg) translate3d(0, 0, 0);
    will-change: transform;
    animation: 5s rotate linear infinite;
  }
}

@keyframes float {
  0% {
    transform: translate3d(0, 10px, 0);
  }
  100% {
    transform: translate3d(0, -50px, 0);
  }
}

@keyframes rotate {
  0% {
    transform: rotate(0deg) translate3d(0, 0, 0);
  }
  100% {
    transform: rotate(360deg) translate3d(0, 0, 0);
  }
}
</style>
<script lang="ts" setup>
import { CSSProperties } from 'vue';

const props = defineProps({
  minFloatDuration: {
    type: Number,
    default: 3
  },
  maxFloatDuration: {
    type: Number,
    default: 6
  },
  minRotateDuration: {
    type: Number,
    default: 3
  },
  maxRotateDuration: {
    type: Number,
    default: 10
  },
  backMinLight: {
    type: Number,
    default: 10 //0 to 100
  },
  backMaxLight: {
    type: Number,
    default: 35
  },
  frontMinLight: {
    type: Number,
    default: 50
  },
  frontMaxLight: {
    type: Number,
    default: 60
  },
  backMinScale: {
    type: Number,
    default: 0.3
  },
  backMaxScale: {
    type: Number,
    default: 0.75
  },
  frontMinScale: {
    type: Number,
    default: 0.75
  },
  frontMaxScale: {
    type: Number,
    default: 1
  },
});

const randomRange = (min: number, max: number) => Math.random() * (max - min) + min;
const randomInt = () => Math.floor(Math.random() * Number.MAX_SAFE_INTEGER);

let floatDuration = randomRange(props.minFloatDuration, props.maxFloatDuration);
let floatDelay = -randomRange(0, floatDuration);
let rotateDuration = randomRange(props.minRotateDuration, props.maxRotateDuration);
let rotateDelay = -randomRange(0, rotateDuration);

const isBack = randomRange(0, 1) > 0.5;
const light = randomRange(isBack ? props.backMinLight : props.frontMinLight, isBack ? props.backMaxLight : props.frontMaxLight);
const size = randomRange(isBack ? props.backMinScale : props.frontMinScale, isBack ? props.backMaxScale : props.frontMaxScale);
const floatStyle: CSSProperties = {
  animationDuration: floatDuration + "s",
  animationDelay: floatDelay + "s"
};
const rotateStyle: CSSProperties = {
  animationDuration: rotateDuration + "s",
  animationDelay: rotateDelay + "s"
};
const uuid = randomInt();
</script>
