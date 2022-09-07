<template>
  <!-- 详情 -->
  <div class="detail_section" :style="`${props.detail_show};`">
    <div class="movie"
      :style="`width: ${detailStyle.elWidth}%; top:${detailStyle.offsetTop}px; left:${detailStyle.offsetleft}px;`">
      <div class="poster" :style="`width: ${detailStyle.posterWidht}%;`">
        <img :src="drawerData.image" alt="" :style="`width: ${detailStyle.imgWidht}%;`" />
      </div>
      <h3 class="title"></h3>
      <div class="detail_text"
        :style="isShow ? `left:${detailStyle.detail_textLeft}%; opacity: ${detailStyle.detail_opacity}; ${detail_transitionTrue}` : `left:${detailStyle.detail_textLeft}%; opacity: ${detailStyle.detail_opacity}; ${detail_transitionFalse}`">
        <div class="cancel" @click.stop="">X</div>
        <h3>{{ drawerData.title }}</h3>
        <p class="desc">
          {{ drawerData.cparagraph }}
        </p>
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { onMounted, ref, watch, computed } from "vue";
import { contentArr } from '@/api/moke/index';
import { User } from '@/api/interface/index';

interface DrawerProps {
  rowData?: User.ResUserImgs;
}
interface DetailStyle {
  offsetleft?: number,
  offsetTop?: number,
  elWidth?: number,
  posterWidht?: number,
  imgWidht?: number,
  detail_textLeft?: number,
  detail_opacity?: number,
}

const drawerData = ref<DrawerProps>({});
// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {

  drawerData.value = params;
};
const detailStyle = ref<DetailStyle>({
});
const style = (params: DetailStyle): void => {
  detailStyle.value = params;
};
const props = defineProps({
  isShow: {
    type: Boolean,
  },
  detail_show: {
    type: String
  },
});

// 文本框过渡效果
const detail_transitionTrue = computed(() => {
  return `transition: all .1s cubic-bezier(.67, .13, .1, .81);`
})
const detail_transitionFalse = computed(() => {
  return `transition: all .7s cubic-bezier(.67, .13, .1, .81) .8s;`
})

defineExpose({
  acceptParams,
  style
})
</script>

<style lang="scss" scoped>
.detail_section {
  display: none;
  position: absolute;
  width: 80%;
  // height: 600px;
  height: 70%;
  top: 70%;
  left: 50%;
  transform: translate3d(-50%, -70%, 0);
  background-color: rgb(46, 85, 46, .2);
  align-items: flex-end;
  // text-align: center;
  transition: opacity .7s cubic-bezier(.67, .13, .1, .81);

  .movie {
    display: flex;
    justify-content: space-between;
    position: absolute;
    width: 20%;
    transition: all .7s cubic-bezier(.67, .13, .1, .81);

    .title {
      opacity: 0;
    }

    .poster {
      width: 100%;
      transition: all .7s cubic-bezier(.67, .13, .1, .81);

      img {
        width: 100%;
        border-radius: 15px;
        transition: all .7s cubic-bezier(.67, .13, .1, .81);
        // opacity: .8;
      }
    }

    .detail_text {
      box-sizing: border-box;
      position: absolute;
      top: 0;
      left: 0;
      // background-color: rgb(46, 85, 46, .2);
      opacity: 0;
      // transition: all .7s cubic-bezier(.67, .13, .1, .81) .8s;
      // transition-delay: .8s;
      padding: 30px;
      // opacity: 0;

      .cancel {
        position: absolute;
        padding: 4px 5px;
        border: 1px solid rgb(202, 202, 202, .8);
        border-radius: 50%;
        right: 20px;
        top: 30px;
        cursor: pointer;
        transition: all .3s cubic-bezier(.67, .13, .1, .81);
      }

      .cancel:hover {
        border: 1px solid rgba(79, 153, 250, 0.8);
        color: rgba(79, 153, 250, 0.8);
      }

      .desc {
        text-indent: 2em;
      }
    }
  }
}
</style>