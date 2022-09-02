import { left } from "@popperjs/core"
import { ref } from "vue"

export default function useAlbum() {

  const img_MaxBoxRef = ref();// 最外层盒子
  const imgBoxRef = ref(); // 装图片的盒子
  const widthArr = ref<number[]>([]);
  const imgOffsetArr = ref<string[]>([]);

  // 随机获取left/top/bottom/right/width值
  function getOffsetOrWidth(index: number, imglenght: number) {
    imgOffsetArr.value = getImgOffset(imglenght);
    widthArr.value = getImgNuber(imglenght);
  }
  // 求随机宽度的值
  function getImgNuber(imglenght: number) {
    let widthArr: Array<number> = [];
    for (let i = 0; i < imglenght; i++) {
      const width = Math.floor(Math.random() * 30 + 80)
      widthArr.push(width);
    }
    return widthArr
  }
  // 求每张图片的offset值
  /**
   * @param {number} imgNumber 渲染的图片数量
   */
  function getImgOffset(imgNumber: number) {
    // 随机二二组合
    let imgOffsetArr = [];
    for (let i = 0; i < imgNumber; i++) {
      const imgs = imgBoxRef.value.children[i];
      // 分两组
      let leftOrRight: Array<number> = [Math.floor(-(Math.random() * 60 + 60)), Math.floor(-(Math.random() * 60 + 60))];
      let topORBottom = [Math.floor(-(Math.random() * 60 + 60)), Math.floor(-(Math.random() * 60 + 60))];
      let leftOrTop: string = ''
      if (i == 0) {
        leftOrTop = `left: ${leftOrRight[Math.round(Math.random())]}%; top: ${topORBottom[Math.round(Math.random())]}%;`
      }
      if (i == 1) {
        leftOrTop = `right: ${leftOrRight[Math.round(Math.random())]}%; top: ${topORBottom[Math.round(Math.random())]}%;`
      }
      if (i == 2) {
        leftOrTop = `left: ${leftOrRight[Math.round(Math.random())]}%; bottom: ${topORBottom[Math.round(Math.random())]}%;`
      }
      if (i == 3) {
        leftOrTop = `right: ${leftOrRight[Math.round(Math.random())]}%; bottom: ${topORBottom[Math.round(Math.random())]}%;`
      }
      imgOffsetArr.push(leftOrTop)
    }
    return imgOffsetArr
  }
  return {
    img_MaxBoxRef,
    imgBoxRef,
    getOffsetOrWidth,
    getImgNuber,
    widthArr,
    imgOffsetArr
  }
}