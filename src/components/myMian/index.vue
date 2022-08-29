<template>
  <el-scrollbar ref="scrollbarRef" height="100vh" @scroll="onScroll" class="content_main">
    <main ref="mainRef">
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
    </main>
  </el-scrollbar>
  <!-- 可视化页面底部翻页图标 -->
  <div class="bounce-1" v-show="isBounce" @click="btnClick"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch } from "vue";
import { useScroll } from "@/hooks/useScroll";

// 内容
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

// 数据
let scrollObj = {
  newHeight: 0,
  oldHeight: 0,
  newTop: 0,
  oldTop: 0
}

// props
const props = defineProps({
  navItem: {
    type: Number,
    default: 0
  },
  isNavClick: {
    type: Boolean
  }
})

// emit
const emit = defineEmits(['getCurrtent', 'getIsNavClick'])

// hooks
const { onScroll, currtent, isBounce, mainRef, scrollbarRef, moveSlow, btnClick } = useScroll()
// 触发鼠标移动事件
function onMove() {
}

function getMianHeight() {
}

onMounted(() => {
  // getMianHeight()
})
watch(() => props.navItem, (newValue, oldValue) => {
  if (!props.isNavClick) return
  // 当前元素的高
  scrollObj.newHeight = mainRef.value!.children[oldValue].clientHeight
  // 目标元素的高
  scrollObj.oldHeight = mainRef.value!.children[newValue].clientHeight

  // 当前位置
  scrollObj.oldTop = Math.ceil(oldValue * scrollObj.oldHeight)
  // 目标位置
  scrollObj.newTop = Math.ceil(newValue * scrollObj.newHeight)

  // 两个滚动盒子之间的差值（总步长）
  let difference = scrollObj.newTop - scrollObj.oldTop
  // 每步的长度
  let step = Math.ceil(difference / 100)
  // step不能为负
  if (step < 0) step = -step
  moveSlow(scrollObj.oldTop, scrollObj.newTop, (step))

})
watch(currtent, (newValue, oldValue) => {
  console.log(currtent);
  emit('getIsNavClick', false)
  emit('getCurrtent', newValue)

})

defineExpose({
})
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>