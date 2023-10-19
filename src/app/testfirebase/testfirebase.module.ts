import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { TestfirebasePageRoutingModule } from './testfirebase-routing.module';

import { TestfirebasePage } from './testfirebase.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    TestfirebasePageRoutingModule
  ],
  declarations: [TestfirebasePage]
})
export class TestfirebasePageModule {}
