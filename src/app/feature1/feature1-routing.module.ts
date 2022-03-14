import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';


const routes: Routes = [
  {
    path: '',
    loadChildren: () => import('./pages/page11/page11.module').then(m => m.Page11Module)
  },
  {
    path: ':id',
    loadChildren: () => import('./pages/page12/page12.module').then(m => m.Page12Module)
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Feature1RoutingModule {
}
