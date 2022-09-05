<template>
  <section class="setction flex">
    <!-- <MyRain :rainNumber="50" :rotateDeg="-45" :w="2" :h="20"></MyRain> -->
    <!-- <MyStar :starNumber="20" :w="4" :h="4"></MyStar> -->
    <!-- <MyMeteor :delay="0" :w="3" :h="200" :rotateDeg="-70"></MyMeteor>
    <MyMeteor :delay="2" :w="3" :h="200" :rotateDeg="-65"></MyMeteor>
    <MyMeteor :delay="4" :w="3" :h="200" :rotateDeg="-75"></MyMeteor> -->
    <div class="setction__left" :class="{ 'activeSetction': isLeftClass }">
      <article>
        <h1>Hws Dreagreatger</h1>
        <p>Let's start showing off some magic...</p>
      </article>
    </div>
    <div class="setction__right"></div>
  </section>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref } from "vue";
import { activeSetctionStore } from '@/stores/activeSetction/index';
import MyRain from '@/components/component/MyRain/index.vue'
import MyStar from "@/components/component/MyStar/index.vue";
import MyMeteor from "@/components/component/MyMeteor/index.vue";


// 使用pinia管理状态
const activeSetction = activeSetctionStore()

const isLeftClass = computed(() => {
  return activeSetction.activeInfoCard
})

onMounted(() => {
  activeSetction.setActiveInfoCard(true);
})
</script>

<style lang="scss" scoped>
@import "./index.scss";

.setction__left {
  transform: translateY(100vh);
  transition: transform .7s ease;
}

.activeSetction {
  transform: translateY(0vh);
}
</style>