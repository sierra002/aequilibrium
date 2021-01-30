import {RouterModule, Routes} from "@angular/router";
import {NgModule} from "@angular/core";
import {CastlesComponent} from "./castles/castles.component";

const routes: Routes = [
  {
    path: '',
    component: CastlesComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class CastleRouting {}
