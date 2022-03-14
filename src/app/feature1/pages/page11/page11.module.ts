import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page11Component } from './page11.component';


const routes: Routes = [
  {
    path: '',
    component: Page11Component
  }
];

@NgModule({
  declarations: [
    Page11Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
  ]
})
export class Page11Module {
}
