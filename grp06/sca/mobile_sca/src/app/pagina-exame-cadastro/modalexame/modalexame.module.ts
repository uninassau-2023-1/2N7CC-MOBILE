import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalexamePageRoutingModule } from './modalexame-routing.module';

import { ModalexamePage } from './modalexame.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalexamePageRoutingModule
  ],
  declarations: [ModalexamePage]
})
export class ModalexamePageModule {}
