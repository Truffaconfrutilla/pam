import { Component } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  public appPages = [
    { title: 'Inicio', url: '/home', icon: 'home' },
    { title: 'Perfil', url: '/user-profile', icon: 'person' },
    { title: 'Viajes', url: '', icon: 'car-sport' },
    { title: 'Ajustes', url: '', icon: 'build' },    
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' }, 
    { title: 'Inicio API', url: '/apihome', icon: 'home' },
    { title: 'List', url: '/apilist', icon: 'people-circle' },
    { title: 'Add', url: '/apiadd', icon: 'people' },
    { title: 'Delete', url: '/apidelete', icon: 'people' },
    { title: 'Update', url: '/apiupdate', icon: 'analytics' },
    { title: 'Detail', url: '/apidetail', icon: 'medal' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];
  public appApi = [
    { title: 'Inicio API', url: '/apihome', icon: 'home' },
    { title: 'List', url: '/apilist', icon: 'people-circle' },
    { title: 'Add', url: '/apiadd', icon: 'people' },
    { title: 'Delete', url: '/apidelete', icon: 'people' },
    { title: 'Update', url: '/apiupdate', icon: 'analytics' },
    { title: 'Detail', url: '/apidetail', icon: 'medal' },
    { title: 'Cerrar Sesión', url: '/login', icon: 'log-out' },
  ];


  constructor(private router: Router) {}

  mostrarMenu() {    
    return this.router.url !== '/login' && this.router.url !== '/register';
  }

  mostrarMenuApi() {
    const aux = ['apihome','apiadd','apidelete','apiupdate','apilist','apidetail']
    aux.includes(this.router.url.substring(1)) // ELIMINAMOS EL "/"
    return this.router.url !== '/login' && this.router.url !== '/register'    
  }


}
