import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: '',
    redirectTo: 'home',
    pathMatch: 'full'
  },
  {
    path: 'login',
    loadChildren: () => import('./pages/login/login.module').then( m => m.LoginPageModule)
  },
  {
    path: 'register',
    loadChildren: () => import('./pages/register/register.module').then( m => m.RegisterPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/profiles/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },
  {
    path: 'apiadd',
    loadChildren: () => import('./api/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'apidelete',
    loadChildren: () => import('./api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'apiupdate',
    loadChildren: () => import('./api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'apidetail',
    loadChildren: () => import('./api/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'apilist',
    loadChildren: () => import('./api/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'apihome',
    loadChildren: () => import('./api/home/home.module').then( m => m.HomePageModule)
  },
  
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
