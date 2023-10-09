import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  usuarios: Usuario[] = [];

  constructor() { }

  // Agregar un nuevo usuario
  agregarUsuario(usuario: Usuario) {
    this.usuarios.push(usuario);
  }

  // Obtener un usuario por correo electrónico
  obtenerUsuarioPorEmail(email: string): Usuario | undefined {
    return this.usuarios.find((usuario) => usuario.email === email);
  }
}
