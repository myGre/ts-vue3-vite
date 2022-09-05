<template>
  <section class="setction" @click.stop="cancel">
    <div class="main_section">
      <div class="titleH2">
        <h2>资料卡</h2>
      </div>
      <div class="movie_content" @click.stop ref="movieRef" :style="isShow ? `opacity: 1;` : `opacity: 0;`">
        <div class="movie" @click.stop="boxDetail($event, index)" v-for="(item, index) in contentArr" :key="index">
          <div class="poster">
            <img :src="item.src" alt="" />
          </div>
          <h3 class="title">{{  item.title  }}</h3>
          <!-- <div class="desc">
        </div> -->
        </div>
      </div>
      <!-- 详情 -->
      <div ref="detailRef" class="detail_section" :style="`${detail_show};`">
        <div ref="detailMovieRef" class="movie"
          :style="`width: ${elWidth}%; top:${offsetTop}px; left:${offsetleft}px;`">
          <div class="poster" :style="`width: ${posterWidht}%;`">
            <img :src="contentArr[itemIndex].src" alt="" :style="`width: ${imgWidht}%;`" />
          </div>
          <h3 class="title"></h3>
          <div class="detail_text"
            :style="isShow ? `left:${detail_textLeft}%; opacity: ${detail_opacity}; ${detail_transitionTrue}` : `left:${detail_textLeft}%; opacity: ${detail_opacity}; ${detail_transitionFalse}`">
            <div class="cancel" @click.stop="cancel">X</div>
            <h3>{{  contentArr[itemIndex].title  }}</h3>
            <p class="desc">
              {{  contentArr[itemIndex].desc  }}
            </p>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref } from 'vue';
import { contentArr } from '@/api/moke/index';

const isCardOrDetail = ref(false)
const isShow = ref(true)
let itemIndex = ref(0) // 当前图片
const movieRef = ref()
const offsetleft = ref() // 详情页位移目标值
const offsetTop = ref() // 详情页目标top值
const elWidth = ref(60) // 详情页内盒子宽度
const posterWidht = ref(35) // 图片盒子宽度
const imgWidht = ref(80) // 图片宽度
const detail_textLeft = ref(0) // 文字框left值
const detail_opacity = ref(0)

// 显示或隐藏详情弹窗
const detail_show = computed(() => {
  return isCardOrDetail.value ? `display: flex` : ''
})

// 文本框过渡效果
const detail_transitionTrue = computed(() => {
  return `transition: all .1s cubic-bezier(.67, .13, .1, .81);`
})
const detail_transitionFalse = computed(() => {
  return `transition: all .7s cubic-bezier(.67, .13, .1, .81) .8s;`
})
// 点击某一张图显示对应的详情
function boxDetail(el: any, index: number) {
  itemIndex.value = index
  offsetleft.value = movieRef.value.children[index].offsetLeft;
  offsetTop.value = movieRef.value.children[index].offsetTop;
  elWidth.value = 70;
  setTimeout(() => {
    offsetleft.value = -30;
    offsetTop.value = 0;
    elWidth.value = 100;
    detail_textLeft.value = 30;
    detail_opacity.value = 1;
  }, 10)
  isShow.value = false;
  isCardOrDetail.value = true;
}

// 关闭详情弹窗
function cancel() {
  // console.log(itemIndex);
  offsetleft.value = -30;
  offsetTop.value = 0;
  elWidth.value = 100;
  posterWidht.value = 35;
  imgWidht.value = 80;
  detail_textLeft.value = 0;
  detail_opacity.value = 0;
  setTimeout(() => {
    offsetleft.value = movieRef.value.children[itemIndex.value].offsetLeft;
    offsetTop.value = movieRef.value.children[itemIndex.value].offsetTop;
    elWidth.value = 72;
  }, 10)
  isShow.value = true;
  setTimeout(() => {
    isCardOrDetail.value = false;
  }, 700)
}

</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>