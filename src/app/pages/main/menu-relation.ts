// 菜单的配置内容

import {MenuRelation} from '../../model/menu.model';

const index: MenuRelation[] = [{
  code: 'index',
  label: '首页',
  url: '',
  iconUrl: ''
}];

const demo: MenuRelation[] = [{
  code: 'faAwesome',
  label: 'fa 图标',
  url: '',
  iconUrl: ''
}];

const menuRelation = [
  ...index,
  ...demo
];

// 根据 code 获取菜单关系对象
export const getMenuRetion = (code) => {
  return menuRelation.find(relation => relation.code === code);
};
