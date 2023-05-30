import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ModalexamePage } from './modalexame.page';

const routes: Routes = [
  {
    path: '',
    component: ModalexamePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ModalexamePageRoutingModule {}
