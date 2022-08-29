<template>
  <el-scrollbar ref="scrollbarRef" height="100vh" always @scroll="onScroll" class="content_main">
    <section v-for="(item, index) in contentArr" :key="index" class="setction flex" @mousemove="onMove">
      <div class="setction__left">
        <article>
          <h3>{{ item.left_h }}</h3>
          <p>{{ item.left_p }}</p>
        </article>
      </div>
      <div class="setction__right">
        <article>
          <h3>{{ item.right_h }}</h3>
          <p>{{ item.right_p }}</p>
        </article>
      </div>
    </section>
  </el-scrollbar>
  <!-- 可视化页面底部翻页图标 -->
  <div class="bounce-1" v-show="isBounce"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import { useScroll } from "@/hooks/useScroll";

// hooks
const { onScroll, isBounce, scrollbarRef } = useScroll()

const load = ref(0)
const contentArr = ref([
  {
    left_h: 'Hws Dreagreatger',
    left_p: "Let's start showing off some magic..."
  },
  {
    right_h: 'The weather started getting rough — the tiny ship was tossed.',
    right_p:
      `If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
      Bunch the Brady Bunch that's the way we all became the Brady Bunch.`
  },
  {
    left_h: 'The weather started getting rough — the tiny ship was tossed.',
    left_p:
      `If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
      Bunch the Brady Bunch that's the way we all became the Brady Bunch.`
  },
  {
    right_h: 'The weather started getting rough — the tiny ship was tossed.',
    right_p:
      `If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
      Bunch the Brady Bunch that's the way we all became the Brady Bunch.`
  },
  {
    left_h: 'The weather started getting rough — the tiny ship was tossed.',
    left_p:
      `If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
      Bunch the Brady Bunch that's the way we all became the Brady Bunch.`
  },
])

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
}

function getMianHeight() {
  console.log(scrollbarRef.value.children);
}

onMounted(() => {
  // getMianHeight()
})
watch(() => props.navItem, (newValue, oldValue) => {
  // console.log(mianRef.value.children);
  // console.log(oldValue);
  let dvalue = scrollbarRef.value.children[newValue].offsetTop - scrollbarRef.value.children[oldValue].offsetTop
  scrollObj.sTop += scrollbarRef.value.scrollTop + dvalue


})

defineExpose({
})
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>