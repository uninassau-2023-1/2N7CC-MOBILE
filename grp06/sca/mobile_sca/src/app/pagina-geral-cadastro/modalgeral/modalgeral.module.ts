import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalgeralPageRoutingModule } from './modalgeral-routing.module';

import { ModalgeralPage } from './modalgeral.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalgeralPageRoutingModule
  ],
  declarations: [ModalgeralPage]
})
export class ModalgeralPageModule {}
