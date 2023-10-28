import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs/tabs.page';
import { BookDetailsPage } from './book-details/book-details.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children:[
      {
        path: 'book-details/:bookisbn',
        loadChildren: () => import('./book-details/book-details.module').then( m => m.BookDetailsPageModule)
      },
    ]
  },
  {
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'tabs',
    loadChildren: () => import('./tabs/tabs.module').then( m => m.TabsPageModule)
  },
  {
    path: 'register-book',
    loadChildren: () => import('./register-book/register-book.module').then( m => m.RegisterBookPageModule)
  },
  {
    path: 'session',
    loadChildren: () => import('./session/session.module').then( m => m.SessionPageModule)
  },
  {
    path: 'lights',
    loadChildren: () => import('./lights/lights.module').then( m => m.LightsPageModule)
  },
  {
    path: 'testfirebase',
    loadChildren: () => import('./testfirebase/testfirebase.module').then( m => m.TestfirebasePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
