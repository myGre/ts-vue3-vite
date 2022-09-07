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
      <MyDetail ref="detailRef" :isShow="isShow" :detail_show="detail_show" :detailStyle="detailStyle"></MyDetail>
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

interface detailStyle {
  offsetleft?: number, // 详情页位移目标值
  offsetTop?: number, // 详情页目标top值
  elWidth?: number, // 详情页内盒子宽度
  posterWidht?: number, // 图片盒子宽度
  imgWidht?: number, // 图片宽度
  detail_textLeft?: number, // 文本框left值
  detail_opacity?: number, // 文本框透明度值
}

// 详情页样式
const detailStyle = reactive<detailStyle>({
  elWidth: 60,
  posterWidht: 35,
  imgWidht: 80,
  detail_textLeft: 0,
  detail_opacity: 0
});

// 显示或隐藏详情弹窗
const detail_show = computed(() => {
  return isCardOrDetail.value ? `display: flex` : '';
})

// 点击某一张图显示对应的详情
function boxDetail(el: any, index: number) {
  detailObj(state.inforCardList[index]);
  itemIndex.value = index;
  detailStyle.offsetleft = movieRef.value.children[index].offsetLeft;
  detailStyle.offsetTop = movieRef.value.children[index].offsetTop;
  detailStyle.elWidth = 70;

  getDetailStyle(detailStyle);
  setTimeout(() => {
    detailStyle.offsetleft = -30;
    detailStyle.offsetTop = 0;
    detailStyle.elWidth = 100;
    detailStyle.detail_textLeft = 30;
    detailStyle.detail_opacity = 1;
    getDetailStyle(detailStyle);

  }, 10)
  isShow.value = false;
  isCardOrDetail.value = true;
}

// 关闭详情弹窗
function cancel() {
  detailStyle.offsetleft = -30;
  detailStyle.offsetTop = 0;
  detailStyle.elWidth = 100;
  detailStyle.posterWidht = 35;
  detailStyle.imgWidht = 80;
  detailStyle.detail_textLeft = 0;
  detailStyle.detail_opacity = 0;
  getDetailStyle(detailStyle);

  setTimeout(() => {
    detailStyle.offsetleft = movieRef.value.children[itemIndex.value].offsetLeft;
    detailStyle.offsetTop = movieRef.value.children[itemIndex.value].offsetTop;
    detailStyle.elWidth = 72;
    getDetailStyle(detailStyle);

  }, 10)
  isShow.value = true;
  setTimeout(() => {
    isCardOrDetail.value = false;
  }, 700)
}

interface detailExpose {
  acceptParams: (params: any) => void;
  style: (params: any) => void;
}
const detailRef = ref<detailExpose>();
function getDetailStyle(style: Partial<detailStyle>) {
  let detailStyle = { ...style };
  console.log(detailStyle);

  detailRef.value!.style(detailStyle);
}
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