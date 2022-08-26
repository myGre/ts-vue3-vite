import { ref } from "vue";


export function useScroll() {

  const isBounce = ref(true)
  // 滚动条滚动事件
  function listenerFunction() {
    document.addEventListener('scroll', handleScroll, true);
  };
  function handleScroll() {
    // console.log(window.pageYOffset)
    window.pageYOffset > 0 ? isBounce.value = false : isBounce.value = true
  }
  return {
    listenerFunction,
    isBounce
  }
}
