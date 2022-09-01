<template>
  <section class="setction flex">
    <div class="setction__left">
      <!-- 相册 -->
      <div class="img_MaxBox" ref="img_MaxBoxRef">
        <div class="imgBox" ref="imgBoxRef">
          <img v-for="(item, index) in imgArr[currentItem]" :key="index" class="img" :src="item" alt=""
            :style="`width: ${widthArr[index - 1]}%; ${imgOffsetArr[index - 1]}}`">
        </div>
      </div>
      <!-- 导航 -->
      <ul class="albumNav">
        <li v-for="(item, index) in albumNavArr" :key="index" class="navTitle" @click="clickNavItem(index)">{{  item  }}
        </li>
      </ul>
    </div>
    <!-- 介绍 -->
    <div class="setction__right">
      <article>
        <h3>The weather started getting rough — the tiny ship was tossed.</h3>
        <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
          Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
      </article>
    </div>
  </section>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue";
import useAlbum from "@/hooks/useAlbum"
// 导航信息
const albumNavArr: Array<string> = ['生活', '风景', '个人', '夜晚']
// 图片信息
const imgArr: Array<any> = [
  {
    1: "https://ivang-design.com/svg-load/slider/1.jpg",
    2: "https://ivang-design.com/svg-load/slider/2.jpg",
    3: "https://ivang-design.com/svg-load/slider/3.jpg",
    4: "https://ivang-design.com/svg-load/slider/4.jpg",
  },
  {
    1: "https://ivang-design.com/svg-load/slider/5.jpg",
    2: "https://ivang-design.com/svg-load/slider/6.jpg",
    3: "https://ivang-design.com/svg-load/slider/7.jpg",
    4: "https://ivang-design.com/svg-load/slider/8.jpg",
  },
  {
    1: "https://ivang-design.com/svg-load/slider/9.jpg",
    2: "https://ivang-design.com/svg-load/slider/10.jpg",
    3: "https://ivang-design.com/svg-load/slider/12.jpg",
  },
  {
    1: "https://ivang-design.com/svg-load/slider/13.jpg",
    2: "https://ivang-design.com/svg-load/slider/14.jpg",
    3: "https://ivang-design.com/svg-load/slider/15.jpg",
    4: "https://ivang-design.com/svg-load/slider/16.jpg",
  }
]
const currentItem = ref(0) // 当前导航

// hooks
const { img_MaxBoxRef, imgBoxRef, getOffsetOrWidth, widthArr, imgOffsetArr } = useAlbum()

function clickNavItem(index: number) {
  currentItem.value = index;
  // 图片的数量
  let imglenght = 0;
  for (let i in imgArr[index]) {
    imglenght++;
  }
  // 获取当前盒子中图片的随机offset或盒子中图片的宽度
  getOffsetOrWidth(index, imglenght);
}

onMounted(() => {

})
</script>

<style lang="scss" scoped>
@import "./index.scss";

.setction__left {
  background-color: rgb(153, 153, 153, .5);
  width: 60%;
  height: 80%;

  // position: absolute;
  .img_MaxBox {
    width: 100%;
    height: 100%;

    .imgBox {
      box-sizing: border-box;
      position: relative;
      width: 30%;
      height: 30%;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);

      .img {
        width: 0;
        position: absolute;
        transition: all 1s;
      }
    }
  }

  .albumNav {
    position: absolute;
    top: 50%;
    left: 60%;
    transform: translate(-60%, -50%);
    z-index: 30;

    .navTitle {
      cursor: pointer;
      color: rgb(201, 201, 201, .5);
      font-size: 7.1rem;
      margin-bottom: 20px;
      transition: all .5s;

      &:hover {
        color: rgb(201, 201, 201);
      }
    }
  }
}
</style>