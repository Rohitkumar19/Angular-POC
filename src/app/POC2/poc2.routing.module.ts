import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { WellListComponent } from './components/well-list/well-list.component';

const routes: Routes = [
  {
    path: '',
    component: WellListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class Poc2RoutingModule { }
