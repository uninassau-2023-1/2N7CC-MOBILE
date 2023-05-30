import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalprioritariaPage } from './modalprioritaria.page';

const routes: Routes = [
  {
    path: '',
    component: ModalprioritariaPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalprioritariaPageRoutingModule {}
