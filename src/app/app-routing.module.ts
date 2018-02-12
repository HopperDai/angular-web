import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';

const routes: Routes = [{
  path: '',
  loadChildren: 'app/pages/main/main.module#MainModule'
}, {
  path: 'demo',
  loadChildren: 'app/pages/demo/demo.module#DemoModule'
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
