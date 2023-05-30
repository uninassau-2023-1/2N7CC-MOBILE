import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ModalprioritariaPageRoutingModule } from './modalprioritaria-routing.module';

import { ModalprioritariaPage } from './modalprioritaria.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ModalprioritariaPageRoutingModule
  ],
  declarations: [ModalprioritariaPage]
})
export class ModalprioritariaPageModule {}
