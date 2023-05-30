import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { GeraisPage } from './gerais.page';

const routes: Routes = [
  {
    path: '',
    component: GeraisPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GeraisPageRoutingModule {}
