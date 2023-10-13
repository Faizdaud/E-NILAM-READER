import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterBookPageRoutingModule } from './register-book-routing.module';

import { RegisterBookPage } from './register-book.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    RegisterBookPageRoutingModule
  ],
  declarations: [RegisterBookPage]
})
export class RegisterBookPageModule {}
