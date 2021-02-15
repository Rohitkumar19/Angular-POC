import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

//Implemented Lazy Loading in Angular
const routes: Routes = [
  {
    path: 'poc1',
    loadChildren: () => import('./POC1/poc1.module').then(m => m.POC1Module)
  },
  {
    path: 'poc2',
    loadChildren: () => import('./POC2/poc2.module').then(m=>m.POC2Module)
  },
  {
    path: 'poc3',
    loadChildren: () => import('./POC3/poc3.module').then(m=>m.POC3Module)  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
