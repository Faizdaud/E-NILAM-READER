import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TestfirebasePage } from './testfirebase.page';

const routes: Routes = [
  {
    path: '',
    component: TestfirebasePage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TestfirebasePageRoutingModule {}
