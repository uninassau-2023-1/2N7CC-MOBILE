import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { GeraisPageRoutingModule } from './gerais-routing.module';

import { GeraisPage } from './gerais.page';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    GeraisPageRoutingModule,
  ],
  declarations: [GeraisPage]
})
export class GeraisPageModule {}
