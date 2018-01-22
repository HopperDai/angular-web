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

const test: MenuRelation[] = [{
  code: 'testSubmenu',
  label: '测试子菜单',
  url: '',
  iconUrl: ''
}, {
  code: 'submenu1',
  label: '子菜单1',
  url: '',
  iconUrl: ''
}, {
  code: 'submenu11',
  label: '子菜单11',
  url: '',
  iconUrl: ''
}];

const menuRelation = [
  ...index,
  ...demo,
  ...test
];

// 根据 code 获取菜单关系对象
export const getMenuRelation = (code) => {
  return menuRelation.find(relation => relation.code === code);
};
