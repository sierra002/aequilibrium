import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransformersComponent} from './transformers/transformers.component';
import {AddTransformerComponent} from './transformers/add-transformer/add-transformer.component';
import {TransformerRouting} from './transformer.routing';


@NgModule({
  declarations: [TransformersComponent, AddTransformerComponent],
  imports: [
    CommonModule,
    TransformerRouting
  ]
})
export class TransformerModule {
}
