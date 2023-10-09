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
  {
    path: 'add-user',
    loadChildren: () => import('./user-crud/add-user/add-user.module').then( m => m.AddUserPageModule)
  },
  {
    path: 'delete-user',
    loadChildren: () => import('./user-crud/delete-user/delete-user.module').then( m => m.DeleteUserPageModule)
  },
  {
    path: 'detail-user',
    loadChildren: () => import('./user-crud/detail-user/detail-user.module').then( m => m.DetailUserPageModule)
  },
  {
    path: 'list-user',
    loadChildren: () => import('./user-crud/list-user/list-user.module').then( m => m.ListUserPageModule)
  },
  {
    path: 'update-user',
    loadChildren: () => import('./user-crud/update-user/update-user.module').then( m => m.UpdateUserPageModule)
  },


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
