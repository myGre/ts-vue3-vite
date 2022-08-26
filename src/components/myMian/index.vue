<template>
  <main ref="mianRef">
    <section class="setction flex" @mousemove="onMove">
      <div class="setction__left">
        <article>
          <h1>Hws Dreagreatger</h1>
          <p>Let's start showing off some magic...</p>
        </article>
      </div>
      <div class="setction__right"></div>
    </section>
    <section class="setction flex">
      <div class="setction__left"></div>
      <div class="setction__right">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
    </section>
    <section class="setction flex">
      <div class="setction__left">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
      <div class="setction__right"></div>
    </section>
    <section class="setction flex">
      <div class="setction__left"></div>
      <div class="setction__right">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
    </section>
    <section class="setction flex">
      <div class="setction__left">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
      <div class="setction__right"></div>
    </section>
  </main>
  <!-- 可视化页面底部翻页图标 -->
  <div class="bounce-1" v-show="isBounce"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue-demi";
import { useScroll } from "@/hooks/useScroll";

// hooks
const { listenerFunction, isBounce } = useScroll()

const mianRef = ref()

let scrollObj = {
  sTop: 0
}
// props
const props = defineProps({
  navItem: {
    type: Number,
    default: 0
  }
})

// 触发鼠标移动事件
function onMove() {
  listenerFunction()
}

function getMianHeight() {
  console.log(mianRef.value.children);
}

onMounted(() => {
  // getMianHeight()
})
watch(() => props.navItem, (newValue, oldValue) => {
  // console.log(mianRef.value.children);
  // console.log(oldValue);
  let dvalue = mianRef.value.children[newValue].offsetTop - mianRef.value.children[oldValue].offsetTop
  scrollObj.sTop += mianRef.value.scrollTop + dvalue


})

defineExpose({
})
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>