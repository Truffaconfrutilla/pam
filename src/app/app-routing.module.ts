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
    path: 'add',
    loadChildren: () => import('./api/add/add.module').then( m => m.AddPageModule)
  },
  {
    path: 'delete',
    loadChildren: () => import('./api/delete/delete.module').then( m => m.DeletePageModule)
  },
  {
    path: 'update',
    loadChildren: () => import('./api/update/update.module').then( m => m.UpdatePageModule)
  },
  {
    path: 'detail',
    loadChildren: () => import('./api/detail/detail.module').then( m => m.DetailPageModule)
  },
  {
    path: 'list',
    loadChildren: () => import('./api/list/list.module').then( m => m.ListPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./api/home/home.module').then( m => m.HomePageModule)
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
    path: 'usuarios',
    loadChildren: () => import('./users/usuarios/usuarios.module').then( m => m.UsuariosPageModule)
  },
  {
    path: 'user-profile',
    loadChildren: () => import('./pages/profiles/user-profile/user-profile.module').then( m => m.UserProfilePageModule)
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
