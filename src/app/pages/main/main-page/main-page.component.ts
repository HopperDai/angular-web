import {Component, OnInit} from '@angular/core';
import {menu} from '../menu';
import {getMenuRelation} from '../menu-relation';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.scss']
})
export class MainPageComponent implements OnInit {

  menuData = [];

  constructor() {
  }

  ngOnInit() {
    this.menuData = [...menu];
    console.log(this.menuData);
  }

  // 获取菜单的 title
  getMenuTitleByCode(code) {
    return getMenuRelation(code) && getMenuRelation(code).label || '';
  }

}
