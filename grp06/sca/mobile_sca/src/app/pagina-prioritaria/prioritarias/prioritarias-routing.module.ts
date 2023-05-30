import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { PrioritariasPage } from './prioritarias.page';

const routes: Routes = [
  {
    path: '',
    component: PrioritariasPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PrioritariasPageRoutingModule {}
