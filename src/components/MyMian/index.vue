<template>
  <el-scrollbar ref="scrollbarRef" height="100vh" @scroll="onScroll" class="content_main">
    <main ref="mainRef" @mousewheel="onMousewheel">
      <!-- home首页 -->
      <MyHome></MyHome>
      <!-- 资料卡 -->
      <MyInforCard></MyInforCard>
      <!-- 个人信息 -->
      <MyLnformation></MyLnformation>
      <!-- 相册 -->
      <MyAlbum></MyAlbum>
      <!-- 学籍 -->
      <MyStudent></MyStudent>
    </main>
    <!-- <Particles id="tsparticles" class="login-partic" :options="options" /> -->
  </el-scrollbar>
  <!-- 可视化页面底部翻页图标 -->
  <div class="bounce-1" v-show="isBounce" @click="btnClick"></div>
</template>

<script setup lang="ts">
import { nextTick, onMounted, ref, watch, toRefs, reactive } from "vue";
import { useScroll } from "@/hooks/useScroll";
import MyHome from "@/components/MyMian/MyHome/index.vue";
import MyInforCard from "@/components/MyMian/MyInforCard/index.vue";
import MyLnformation from "@/components/MyMian/MyLnformation/index.vue";
import MyAlbum from "@/components/MyMian/MyAlbum/index.vue";
import MyStudent from "@/components/MyMian/MyStudent/index.vue"

// 滚动数据
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
const { onScroll, currtent, isBounce, mainRef, scrollbarRef, moveSlow, btnClick, isCurrtent } = useScroll()

// 监听导航变化
watch(() => props.navItem, (newValue, oldValue) => {
  if (!props.isNavClick) return
  isCurrtent.value = false
  currtent.value = newValue
  // 当前元素的高
  scrollObj.newHeight = mainRef.value!.children[oldValue].clientHeight
  // 目标元素的高
  scrollObj.oldHeight = mainRef.value!.children[newValue].clientHeight

  // 当前位置
  scrollObj.oldTop = oldValue * scrollObj.oldHeight
  // 目标位置
  scrollObj.newTop = newValue * scrollObj.newHeight

  // 两个滚动盒子之间的差值（总步长）
  let difference = scrollObj.newTop - scrollObj.oldTop - (newValue - oldValue) * 10
  // 每步的长度 = (目标位置减初始位置 * 10) / 100
  let step = difference / 100

  // step不能为负
  if (step < 0) step = -step
  moveSlow(scrollObj.oldTop, scrollObj.newTop, step)

})
// 监听当前页面
watch(currtent, (newValue, oldValue) => {
  // 判断是否开启页面滚动
  if(isCurrtent.value) {
    emit('getIsNavClick', false);
    emit('getCurrtent', newValue);
  }
  if (newValue == 0) {
    
  }
})

// 鼠标滚动事件
function onMousewheel() {
  isCurrtent.value = true
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>