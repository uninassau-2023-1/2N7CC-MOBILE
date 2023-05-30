import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ExamesPage } from './exames.page';

const routes: Routes = [
  {
    path: '',
    component: ExamesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExamesPageRoutingModule {}
