import { ref } from "vue";
import { ElScrollbar } from 'element-plus'

export function useScroll() {

  const scrollbarRef = ref<InstanceType<typeof ElScrollbar>>() // 滚动组件
  const mainRef = ref() // 最外层包裹滚动对象的盒子
  const isBounce = ref(true)
  const currtent = ref(0) // 当前显示的盒子

  // 滚动盒子的最大高度
  let maxMainHeight: number = 0

  // 触发滚动事件
  function onScroll(scroll: { scrollLeft: number, scrollTop: number }) {
    // 是否显示或隐藏底部引导
    scroll.scrollTop > 0 ? isBounce.value = false : isBounce.value = true
    // console.log(scroll.scrollTop);
    let childrens = mainRef.value!.children;

    if (0 < scroll.scrollTop && scroll.scrollTop < 969) {
      currtent.value = 0
    }
    if (969 <= scroll.scrollTop && scroll.scrollTop < 2 * 969) {
      currtent.value = 1
    }
    if (2 * 969 <= scroll.scrollTop && scroll.scrollTop < 3 * 969) {
      currtent.value = 2
    }
    if (3 * 969 <= scroll.scrollTop && scroll.scrollTop < 4 * 969) {
      currtent.value = 3
    }
    if (scroll.scrollTop >= 4 * 969 && scroll.scrollTop < 5 * 969) {
      currtent.value = 4
    }
  }
  /**
 * @param {number} distance 当前位置
 * @param {number} total, 目标位置
 * @param {number} step 每步的长度
 * @return void
   */
  function moveSlow(distance: number, total: number, step: number) {
    // console.log(distance, total, step);
    let times: any
    // 向下走，步数为正
    if (total > 0) {
      // console.log(total);
      distance += step
      times = setInterval(() => {
        if (distance > total) {
          clearInterval(times)
        } else {
          console.log(distance);
          moveSlow(distance, total, total)
        }

      }, 10)
      // 设置指定滚动位置
      // scrollbarRef.value?.setScrollTop(distance)

    }

    // 向上走，步数为负
    if (total < 0) {
      // console.log(total);

    }

  }
  // 点击跳到第一条信息
  function btnClick() {
    // console.log(mainRef.value.children[1].offsetHeight);
    let options = mainRef.value!.children[1].clientHeight
    // 设置指定滚动位置
    scrollbarRef.value?.setScrollTop(options)

  }
  return {
    isBounce,
    scrollbarRef,
    mainRef,
    currtent,
    onScroll,
    btnClick,
    moveSlow
  }
}
