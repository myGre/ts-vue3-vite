<template>
  <section class="setction" @click.stop="cancel">
    <div class="main_section">
      <MyBorderBox :isActive="isActive"></MyBorderBox>
      <div class="movie_content" @click.stop ref="movieRef" :style="isShow ? `opacity: 1` : `opacity: 0`">
        <div class="movie" @click.stop="boxDetail($event, index)" v-for="(item, index) in state.inforCardList"
          :key="index">
          <div class="poster">
            <img :src="item.image" alt="" />
          </div>
          <h3 class="title">{{ item.title }}</h3>
        </div>
      </div>
      <!-- 详情 -->
      <MyDetail ref="detailRef" :isShow="isShow" :offsetleft="offsetleft" :offsetTop="offsetTop" :elWidth="elWidth"
        :posterWidht="posterWidht" :imgWidht="imgWidht" :detail_textLeft="detail_textLeft"
        :detail_opacity="detail_opacity" :detail_show="detail_show" :detail_transitionTrue="detail_transitionTrue"
        :detail_transitionFalse="detail_transitionFalse"></MyDetail>
    </div>
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, nextTick, reactive } from 'vue';
import { User } from '@/api/interface/index';
import { activeSetctionStore } from '@/stores/activeSetction';
import { getImage } from '@/api/modules/user';
import { useInforCard } from '@/hooks/useinforCard';

const { state, getImageList } = useInforCard(getImage)
const store = activeSetctionStore();

const isActive = computed(() => store.isActiveInfoCard);

const itemIndex = ref(0); // 当前图片
const movieRef = ref(); // 每个小盒子
const isCardOrDetail = ref(false);
const isShow = ref(true); // 是否显示详情页

const offsetleft = ref() // 详情页位移目标值
const offsetTop = ref() // 详情页目标top值
const elWidth = ref(60) // 详情页内盒子宽度
const posterWidht = ref(35) // 图片盒子宽度
const imgWidht = ref(80) // 图片宽度
const detail_textLeft = ref(0) // 文本框left值
const detail_opacity = ref(0) // 文本框透明度值

interface detailStyle {
  offsetleft: number,
  offsetTop: number,
  elWidth: number,
  posterWidht?: number,
  imgWidht?: number,
  detail_textLeft?: number,
  detail_opacity?: number,
}

// 详情页样式
const detailStyle = reactive<detailStyle>({
  offsetleft: 0,
  offsetTop: 0,
  elWidth: 60
})

// 显示或隐藏详情弹窗
const detail_show = computed(() => {
  return isCardOrDetail.value ? `display: flex` : '';
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
  detailObj(state.inforCardList[index]);
  itemIndex.value = index;
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

interface detailExpose {
  acceptParams: (params: any) => void;
}
const detailRef = ref<detailExpose>();
// detailRef数据处理
function detailObj(detail: Partial<User.ResUserImgs>) {
  let params = { ...detail };
  detailRef.value!.acceptParams(params);
}

onMounted(() => {
  nextTick(() => {
    // getimgs();
    getImageList()
  })
})

</script>

<style lang="scss" scoped>
@import "./index.scss"
</style>