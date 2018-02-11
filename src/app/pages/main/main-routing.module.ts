import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {IndexPageComponent} from './index-page/index-page.component';

const routes: Routes = [{
  path: '',
  component: MainPageComponent,
  children: [{
    path: '',
    component: IndexPageComponent
  }]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class MainRoutingModule {
}
