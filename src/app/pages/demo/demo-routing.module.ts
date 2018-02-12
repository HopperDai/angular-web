import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {PdfPageComponent} from './pdf-page/pdf-page.component';

const routes: Routes = [{
  path: 'pdf',
  component: PdfPageComponent
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class DemoRoutingModule {
}
