import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Page12Component } from './page12.component';


const routes: Routes = [
  {
    path: '',
    component: Page12Component
  }
];

@NgModule({
  declarations: [
    Page12Component,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class Page12Module {
}
