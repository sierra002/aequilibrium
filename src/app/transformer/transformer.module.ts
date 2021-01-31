import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {TransformersComponent} from './transformers/transformers.component';
import {AddTransformerComponent} from './transformers/add-transformer/add-transformer.component';
import {TransformerRouting} from './transformer.routing';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {ReactiveFormsModule} from "@angular/forms";
import { FightResultComponent } from './transformers/fight-result/fight-result.component';


@NgModule({
  declarations: [TransformersComponent, AddTransformerComponent, FightResultComponent],
  imports: [
    CommonModule,
    TransformerRouting,
    NgbModule,
    ReactiveFormsModule,
  ]
})
export class TransformerModule {
}
