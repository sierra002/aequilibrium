import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';
import {TransformersComponent} from './transformers/transformers.component';

const routes: Routes = [
  {
    path: '',
    component: TransformersComponent,
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TransformerRouting {
}
