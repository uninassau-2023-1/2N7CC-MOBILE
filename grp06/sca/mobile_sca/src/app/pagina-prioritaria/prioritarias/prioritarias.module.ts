import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { PrioritariasPageRoutingModule } from './prioritarias-routing.module';

import { PrioritariasPage } from './prioritarias.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    PrioritariasPageRoutingModule
  ],
  declarations: [PrioritariasPage]
})
export class PrioritariasPageModule {}
