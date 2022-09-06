<template>
  <div class="star" ref="starRef">
    <div v-for="(item, index) in starNumber" :key="index" class="star-item" ref="star_itemRef"
      :style="`animation-delay:${index * 2000}ms;`"></div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref } from "vue"

const starRef = ref();
const star_itemRef = ref();

const props = defineProps({
  starNumber: {
    type: Number,
    default: 10
  },
  w: {
    type: Number,
    default: 0,
  },
  h: {
    type: Number,
    default: 0,
  },
})

function randomStar() {
  const left = starRef.value.clientWidth;
  star_itemRef.value.forEach((item: { style: { top: string; left: string; background: string; }; }) => {
    item.style.top = Math.floor(Math.random() * 250 + 1) + "px";
    item.style.left = Math.floor(Math.random() * left + 1) + "px";
    // item.style.background = `rgba(2, 213, 255, ${Math.random()})`;
  });
}

onMounted(() => {
  randomStar();
  console.log(starRef.value.clientWidth);

})

</script>

<style lang='scss' scoped>
.star {
  width: 100vw;
  height: 100vh;
  position: relative;
  background: radial-gradient(at 0% 100%,
      rgba(9, 37, 61, 1) 20%,
      rgba(9, 31, 55, 1) 70%);

  .star-item {
    // margin: 50px 0;
    position: absolute;
    display: block;
    color: rgba(2, 213, 255, .5);
    width: 0px;
    height: 0px;
    border-right: 10px solid transparent;
    border-bottom: 7px solid rgba(2, 213, 255, .5);
    border-left: 10px solid transparent;
    -moz-transform: rotate(35deg);
    -webkit-transform: rotate(35deg);
    -ms-transform: rotate(35deg);
    -o-transform: rotate(35deg);
    opacity: 0;
    animation: staring 10s infinite ease-in-out;

    &:before {
      border-bottom: 8px solid rgba(2, 213, 255, .5);
      border-left: 3px solid transparent;
      border-right: 3px solid transparent;
      position: absolute;
      height: 0;
      width: 0;
      top: -4.5px;
      left: -6.5px;
      display: block;
      content: '';
      -webkit-transform: rotate(-35deg);
      -moz-transform: rotate(-35deg);
      -ms-transform: rotate(-35deg);
      -o-transform: rotate(-35deg);

    }

    &:after {
      position: absolute;
      display: block;
      color: rgba(2, 213, 255, .5);
      top: 0.3px;
      left: -10.5px;
      width: 0px;
      height: 0px;
      border-right: 10px solid transparent;
      border-bottom: 7px solid rgba(2, 213, 255, .5);
      border-left: 10px solid transparent;
      -webkit-transform: rotate(-70deg);
      -moz-transform: rotate(-70deg);
      -ms-transform: rotate(-70deg);
      -o-transform: rotate(-70deg);
      content: '';
    }
  }
}

@keyframes staring {
  0% {
    opacity: 0;
  }

  50% {
    opacity: 1;
  }

  100% {
    opacity: 0;
  }
}
</style>
