import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import {CastlesComponent} from "./castles/castles.component";
import {CastleRouting} from "./castle.routing";

@NgModule({
  declarations: [CastlesComponent],
  imports: [
    CommonModule,
    CastleRouting
  ]
})
export class CastleModule {
  constructor() {
  }

}
