<template>
  <svg stroke="#fff" @click="onclick" stroke-linecap="round">
    <g class="stage" ref="stageRef">
      <rect width="100vw" height="100vh" fill="rgba(0,0,0,0)" stroke="none" />
    </g>
  </svg>
</template>

<script setup lang="ts" >
import { onDeactivated, onMounted, reactive, ref } from "vue";
import { gsap } from "gsap";
import useFireworks from '@/hooks/useFireworks';

const {
  stageRef,
  toggleRef,
  onclick,
  toggleAuto,
} = useFireworks()
let timer: any;

onMounted(() => {
  let i = 0;
  timer = setInterval(() => {
    toggleAuto();
    i++;
    if (i > 3) {
      clearInterval(timer);
    }
  }, 5000)
})
onDeactivated(() => {
  clearInterval(timer);
})
</script>

<style lang="scss" scoped>
svg {
  width: 100%;
  height: 100%;
  overflow: hidden;
  position: absolute;
  top: 0;
  z-index: 9;
  font-family: 'Roboto', sans-serif;
  font-size: 19px;
}
</style>