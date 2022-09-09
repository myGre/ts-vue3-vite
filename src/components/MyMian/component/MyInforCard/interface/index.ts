import { User } from '@/api/interface/index';

export interface DrawerProps {
  rowData: User.ResUserImgs;
}
export interface DetailStyle {
  offsetleft?: number, // 详情页位移目标值
  offsetTop?: number, // 详情页目标top值
  elWidth?: number, // 详情页内盒子宽度
  posterWidht?: number, // 图片盒子宽度
  imgWidht?: number, // 图片宽度
  detail_textLeft?: number, // 文本框left值
  detail_opacity?: number, // 文本框透明度值
}