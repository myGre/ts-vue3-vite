<template>

  <main ref="mainRef">

    <keep-alive>
      <component :is="currentComponent"></component>
    </keep-alive>
  </main>

  <!-- 可视化页面底部翻页图标 -->
  <div class="bounce-1" @click="btnClick"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch, toRefs, reactive } from "vue";
// import { useScroll } from "@/hooks/useScroll";
import useRotation from "@/hooks/useRotation"

// // 滚动数据

// props
const props = defineProps({
  navItem: {
    type: Number,
    default: 0
  }
})

// emit
const emit = defineEmits(['getCurrtent'])

const { btnClick, currentComponent, currentNav } = useRotation()

// hooks
// const { currtent, isBounce, mainRef, scrollbarRef, moveSlow, btnClick } = useScroll()
// // 监听导航变化
// watch(() => props.navItem, (newValue, oldValue) => {
//   if (!props.isNavClick) return
//   // 当前元素的高
//   scrollObj.newHeight = mainRef.value!.children[oldValue].clientHeight
//   // 目标元素的高
//   scrollObj.oldHeight = mainRef.value!.children[newValue].clientHeight

//   // 当前位置
//   scrollObj.oldTop = oldValue * scrollObj.oldHeight
//   // 目标位置
//   scrollObj.newTop = newValue * scrollObj.newHeight

//   // 两个滚动盒子之间的差值（总步长）
//   let difference = scrollObj.newTop - scrollObj.oldTop - (newValue - oldValue) * 10
//   // 每步的长度 = (目标位置减初始位置 * 10) / 100
//   let step = difference / 100

//   // step不能为负
//   if (step < 0) step = -step
//   moveSlow(scrollObj.oldTop, scrollObj.newTop, (step))

// })
// // 监听当前页面
watch(currentNav, (newValue, oldValue) => {
  // console.log(newValue, oldValue);
  emit('getCurrtent', newValue)
})


</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>