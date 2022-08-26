<template>
  <el-carousel ref="mianRef" height="1000px" direction="vertical" :autoplay="false">
    <el-carousel-item class="setction flex">
      <div class="setction__left"></div>
      <div class="setction__right">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
    </el-carousel-item>
    <el-carousel-item class="setction flex">
      <div class="setction__left">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
      <div class="setction__right"></div>
    </el-carousel-item>
    <el-carousel-item class="setction flex">
      <div class="setction__left"></div>
      <div class="setction__right">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
    </el-carousel-item>
    <el-carousel-item class="setction flex">
      <div class="setction__left">
        <article>
          <h3>The weather started getting rough — the tiny ship was tossed.</h3>
          <p>If not for the courage of the fearless crew the Minnow would be lost. the Minnow would be lost? The Brady
            Bunch the Brady Bunch that's the way we all became the Brady Bunch.</p>
        </article>
      </div>
      <div class="setction__right"></div>
    </el-carousel-item>
  </el-carousel>

</template>

<script setup lang="ts">
import { nextTick, onMounted, ref } from "vue-demi";

const mianRef = ref()

function getMianHeight() {
  console.log(mianRef.value.children);
}

onMounted(() => {
  getMianHeight()
})
defineExpose({
})
</script>

<style lang="scss" scoped>
// @import url(./index.scss);

.setction {
  width: 100vw;
  height: 100vh;
  min-height: 400px;
  color: #fff;
  padding-left: 10%;
  padding-right: 10%;
  box-sizing: border-box;
  position: relative;

  &:before {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    top: 50%;
    transform: translateY(-50%);
    content: "";
    font-size: 25.5rem;
    color: rgba(255, 255, 255, .05);
  }

  &:nth-child(1) {
    background-color: rgb(116, 68, 5);

    &:before {
      content: "HWC 01";
    }
  }

  &:nth-child(2) {
    background-color: rgb(5, 53, 116);

    &:before {
      content: "HWC 02";
    }
  }

  &:nth-child(3) {
    background-color: rgb(116, 68, 5);

    &:before {
      content: "HWC 03";
    }
  }

  &:nth-child(4) {
    background-color: rgb(5, 53, 116);

    &:before {
      content: "HWC 04";
    }
  }

  h3 {
    font-size: 4.1rem;
  }

  p {
    font-size: 2rem;
  }

  &__right {
    width: 50%;
    float: left;
  }

  &__left {
    width: 50%;
    float: left;
  }
}
</style>