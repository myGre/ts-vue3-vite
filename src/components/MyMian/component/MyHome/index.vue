<template>
  <section class="setction flex">
    <my-fireworks></my-fireworks>
    <!-- <MyRain :rainNumber="50" :rotateDeg="-45" :w="2" :h="20"></MyRain> -->
    <MyStar :starNumber="10"></MyStar>
    <MyMeteor :delay="0" :w="3" :h="200" :rotateDeg="-80"></MyMeteor>
    <div class="setction__left" :style="isActive ? `transform: translateY(0vh);` : ''">
      <article>
        <h1>Hwc Dreagreatger</h1>
        <p>Let's start showing off some magic...</p>
      </article>
    </div>
    <div class="setction__right">
      <!-- <img
        src="https://raw.githubusercontent.com/myGre/ts-vue3-vite/master/public/images/photo-1623479322729-28b25c16b011.avif?token=GHSAT0AAAAAABXFNTTAXZUCPQH2UUBBFZSIYZAIWDQ"
        alt="" width="600"> -->
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { activeSetctionStore } from '@/stores/activeSetction/index';

// 使用pinia管理状态
const store = activeSetctionStore()
const isActive = computed(() => store.isActiveHome);
onMounted(() => {
  nextTick(() => {
    store.setActiveHome(true);
  })
})
</script>

<style lang="scss" scoped>
@import "./index.scss";

.setction__left {
  transform: translateY(100vh);
  transition: transform .7s ease;
}
</style>