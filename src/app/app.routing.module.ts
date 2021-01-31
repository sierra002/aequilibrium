import {RouterModule, Routes} from '@angular/router';
import {NgModule} from '@angular/core';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        redirectTo: '/castle',
        pathMatch: 'full'
      },
      {
        path: 'castle',
        loadChildren: () => import('./castle/castle.module').then(m => m.CastleModule)
      },
      {
        path: 'transformers',
        loadChildren: () => import('./transformer/transformer.module').then(m => m.TransformerModule)
      },
    ]
  },
  {
    path: '**',
    redirectTo: '',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
