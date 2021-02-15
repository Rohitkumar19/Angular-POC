import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ParentLayoutComponent } from './components/parent-layout/parent-layout.component';

const routes: Routes = [
  {
    path: '',
    component: ParentLayoutComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Poc3RoutingModule { }
