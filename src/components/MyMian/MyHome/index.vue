<template>
  <section class="setction flex">
    <div class="setction__left" :class="{ 'activeSetction':  isLeftClass}">
      <article>
        <h1>Hws Dreagreatger</h1>
        <p>Let's start showing off some magic...</p>
      </article>
    </div>
    <div class="setction__right"></div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from "vue";
import { activeSetctionStore } from '@/stores/activeSetction/index'

// 使用pinia管理状态
const activeSetction = activeSetctionStore()

const isLeftClass = computed(()=>{
  return activeSetction.activeInfoCard
})

onMounted(()=>{
  // isLeftClass.value = true;
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