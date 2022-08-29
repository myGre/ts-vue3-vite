import { ref } from "vue";


export function useScroll() {

  const scrollbarRef = ref() // 滚动盒子对象
  const isBounce = ref(true)
  // 滚动条滚动事件
  // function listenerFunction() {
  //   console.log(scrollbarRef);
  //   // document.addEventListener('scroll', handleScroll, true);
  // };
  // 触发滚动事件
  function onScroll(scroll: { scrollLeft: number, scrollTop: number }) {
    // console.log(scroll);
    scroll.scrollTop > 0 ? isBounce.value = false : isBounce.value = true
  }

  return {
    isBounce,
    scrollbarRef,
    onScroll
  }
}
