<template>
  <div class="home-content">
    <div class="navs">
      <nav :class="{ 'shake': show }">
        <li @click="navClickItem(index)" v-for="(item, index) in navObj" :key="index"
          :class="index == navItem ? 'navItemCode' : ''">{{ item }}</li>
      </nav>
      <button class="icon-btn" ref="btnRef" @click="navShow">
        <div class="icon"></div>
      </button>
    </div>
    <!-- 内容区 -->
    <my-mian ref="myMianRef" :navItem="navItem"></my-mian>
    <!-- footer -->
    <footer>
      <!-- 1756554@ccc.com -->
    </footer>
  </div>
</template>

<script setup lang="ts">
import { computed, nextTick, onMounted, ref, watch } from "vue-demi";
import myMian from "../../components/myMian/index.vue"


const navObj = ref(["home", "资料卡", "个人信息", "相册", "学籍"])
const btnRef = ref()
const myMianRef = ref() // mymain组件
const navItem = ref<number>(0) // 当前导航
const show = ref(false) // 是否显示导航栏

function navShow() {
  btnRef.value.classList.toggle("toggled")
  show.value = !show.value
}
function navClickItem(index: number) {
  // console.log(index);
  navItem.value = index
}

onMounted(() => {
  // console.log(myMianRef.value);

})

</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>