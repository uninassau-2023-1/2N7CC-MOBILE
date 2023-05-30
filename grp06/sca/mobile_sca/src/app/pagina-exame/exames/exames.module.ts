import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ExamesPageRoutingModule } from './exames-routing.module';

import { ExamesPage } from './exames.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ExamesPageRoutingModule
  ],
  declarations: [ExamesPage]
})
export class ExamesPageModule {}
