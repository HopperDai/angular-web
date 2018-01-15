import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MainRoutingModule} from './main-routing.module';
import {MainPageComponent} from './main-page/main-page.component';
import {NgZorroAntdModule} from 'ng-zorro-antd';

@NgModule({
  imports: [
    CommonModule,
    MainRoutingModule,
    NgZorroAntdModule
  ],
  declarations: [MainPageComponent]
})
export class MainModule {
}
