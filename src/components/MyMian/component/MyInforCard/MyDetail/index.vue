<template>
  <!-- 详情 -->
  <div class="detail_section" :style="`${props.detail_show};`">
    <div class="movie" :style="`width: ${elWidth}%; top:${offsetTop}px; left:${offsetleft}px;`">
      <div class="poster" :style="`width: ${posterWidht}%;`">
        <img :src="drawerData.image" alt="" :style="`width: ${imgWidht}%;`" />
      </div>
      <h3 class="title"></h3>
      <div class="detail_text"
        :style="isShow ? `left:${detail_textLeft}%; opacity: ${detail_opacity}; ${detail_transitionTrue}` : `left:${detail_textLeft}%; opacity: ${detail_opacity}; ${detail_transitionFalse}`">
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
import { ref } from "vue";
import { contentArr } from '@/api/moke/index';
import { User } from '@/api/interface/index';

interface DrawerProps {
  rowData?: User.ResUserImgs;
}

const drawerData = ref<DrawerProps>({});
// 接收父组件传过来的参数
const acceptParams = (params: DrawerProps): void => {
  drawerData.value = params;
};

const props = defineProps({
  isShow: {
    type: Boolean,
  },
  offsetleft: {
    type: Number,
  },
  offsetTop: {
    type: Number,
  },
  elWidth: {
    type: Number,
  },
  posterWidht: {
    type: Number,
  },
  imgWidht: {
    type: Number,
  },
  detail_textLeft: {
    type: Number,
  },
  detail_opacity: {
    type: Number,
  },
  detail_show: {
    type: String
  },
  detail_transitionTrue: {
    type: String
  },
  detail_transitionFalse: {
    type: String
  }
});

defineExpose({
  acceptParams
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