import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CastlesComponent} from './castles/castles.component';
import {CastleRouting} from './castle.routing';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {SharedModule} from '../shared/shared.module';

@NgModule({
  declarations: [CastlesComponent],
  imports: [
    CommonModule,
    CastleRouting,
    FormsModule,
    SharedModule
  ]
})
export class CastleModule {
  constructor() {
  }

}
