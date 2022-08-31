<template>
  <section class="setction" @click.stop="cancel">
    <div class="main_section">
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
          <h3 class="title">Room</h3>
          <div class="detail_text" :style="`left:${detail_textLeft}%; opacity: ${detail_opacity};`">
            <div class="cancel" @click.stop="cancel">X</div>
            <h3>{{  contentArr[itemIndex].title  }}</h3>
            <!-- <div class="info">
              <span class="length">117 min</span>
              <span class="year">2015</span>
            </div> -->
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

const contentArr = [
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/movie-room.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/movie-whiplash.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/movie-madmax.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
  {
    src: 'https://github.com/supahfunk/supah-codepen/blob/master/movie-therevenant.jpg?raw=true',
    title: 'Room',
    desc:
      `Jack is a young boy of 5 years old who has lived all his life in one room. He believes everything within it
  are
  the only real things in the world. But what will happen when his Ma suddenly tells him that there are other
  things outside of Room?`
  },
]

const isCardOrDetail = ref(false)
const isShow = ref(true)
let itemIndex = ref(0) // 当前图片
const movieRef = ref()
const offsetleft = ref(0) // 详情页位移目标值
const offsetTop = ref(0) // 详情页目标top值
const elWidth = ref(0) // 详情页内盒子宽度
const posterWidht = ref(0) // 图片盒子宽度
const imgWidht = ref(0) // 图片宽度
const detail_textLeft = ref(0) // 文字框left值
const detail_opacity = ref(0)
const detail_transition = ref() //

// 显示或隐藏详情弹窗
const detail_show = computed(() => {
  return isCardOrDetail.value ? `display: flex` : ''
})

function boxDetail(el: any, index: number) {
  itemIndex.value = index
  offsetleft.value = movieRef.value.children[index].offsetLeft;
  offsetTop.value = movieRef.value.children[index].offsetTop;
  elWidth.value = 60
  detail_textLeft.value = 0
  detail_opacity.value = 0
  detail_transition.value = `all .7s cubic-bezier(.67, .13, .1, .81);`
  setTimeout(() => {
    offsetleft.value = -30
    offsetTop.value = 0
    elWidth.value = 100
    posterWidht.value = 35
    imgWidht.value = 80
    detail_textLeft.value = 30
    detail_opacity.value = 1
  }, 10)
  isShow.value = false
  isCardOrDetail.value = true


}

function cancel() {
  console.log(itemIndex);
  offsetleft.value = -30
  offsetTop.value = 0
  elWidth.value = 100
  posterWidht.value = 35
  imgWidht.value = 80
  detail_textLeft.value = 30
  detail_transition.value = `all 0s `
  setTimeout(() => {
    offsetleft.value = movieRef.value.children[itemIndex.value].offsetLeft;
    offsetTop.value = movieRef.value.children[itemIndex.value].offsetTop;
    elWidth.value = 60
    detail_textLeft.value = 0
    detail_opacity.value = 0
  }, 10)
  isShow.value = true
  // setTimeout(() => {
  isCardOrDetail.value = false
  // }, 700)
}
</script>

<style lang="scss" scoped>
@import "./index.scss";
</style>