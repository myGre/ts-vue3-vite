import { left } from "@popperjs/core"
import { ref } from "vue"

export default function useAlbum() {

  const img_MaxBoxRef = ref() // 最外层盒子
  const imgBoxRef = ref() // 装图片的盒子

  // 随机获取图片宽度
  function getWidth(index: number, imglenght: number) {

    const widthArr = getImgNuber(imglenght)

    for (let i = 0; i < widthArr.length; i++) {
      imgBoxRef.value.children[i].style.width = `${widthArr[i]}%`
    }

  }
  // 随机获取left/top/bottom/right值
  function getOffset(index: number, imglenght: number) {
    // console.log(index);
    const imgOffsetArr = getImgOffset(imglenght)
    console.log(imgOffsetArr);
    // 盒子的可视宽度
    const imgBoxClientWidth = imgBoxRef.value.clientWidth;
    // 盒子的可视高度
    const imgBoxClientHeight = imgBoxRef.value.clientHeight;

  }
  // 求随机宽度的值
  function getImgNuber(imglenght: number) {
    let widthArr: Array<number> = []
    for (let i = 0; i < imglenght; i++) {
      const width = Math.floor(Math.random() * 30 + 80)
      widthArr.push(width)
    }
    return widthArr
  }
  // 求每张图片的offset值
  /**
   * @param {number} imgNumber 渲染的图片数量
   */
  function getImgOffset(imgNumber: number) {
    let imgOffsetArr = []
    for (let i = 0; i < imgNumber; i++) {
      const imgs = imgBoxRef.value.children[i];
      let offset = {
        left: 0,
        top: 0,
        bottom: 0,
        right: 0
      }
      for (let f = 0; f < imgs.length; f++) {
        offset.left = Math.floor(-(Math.random() * 60 + 60));
        offset.right = Math.floor(-(Math.random() * 60 + 60));
        offset.top = Math.floor(-(Math.random() * 40 + 40));
        offset.bottom = Math.floor(-(Math.random() * 70 + 100));
      }
      imgOffsetArr.push(offset)
    }
    return imgOffsetArr
  }
  return {
    img_MaxBoxRef,
    imgBoxRef,
    getOffset,
    getWidth,
    getImgNuber
  }
}