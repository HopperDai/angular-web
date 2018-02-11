// 前端的菜单列表

interface Menu {
  code: string;
  subMenu?: any;
}

export const menu: Menu[] = [{
  code: 'index',
}, {
  code: 'faAwesome',
}, {
  code: 'testSubmenu',
  subMenu: [{
    code: 'submenu1',
  }]
}];
