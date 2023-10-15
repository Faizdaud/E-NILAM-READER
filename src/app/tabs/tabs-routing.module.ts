import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: '',
    component: TabsPage,
    children:[
      {
        path: 'home',
        loadChildren: () => import('../home/home.module').then( m => m.HomePageModule)
      },

      {
        path: 'book-details',
        loadChildren: () => import('../book-details/book-details.module').then( m => m.BookDetailsPageModule)
      },
      {
        path: 'register-book',
        loadChildren: () => import('../register-book/register-book.module').then( m => m.RegisterBookPageModule)
      },
      {
        path: 'session',
        loadChildren: () => import('../session/session.module').then( m => m.SessionPageModule)
      },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TabsPageRoutingModule {}