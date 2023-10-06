import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model'; // Importamos la definición de Usuario

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private usuarios: Usuario[] = []; // Aquí guardaremos los usuarios registrados

  constructor() {}

  // Método para registrar un nuevo usuario
  registrarUsuario(usuario: Usuario): void {
    // Verificamos si el usuario ya existe por su correo electrónico
    const usuarioExistente = this.usuarios.find((u) => u.email === usuario.email);

    if (usuarioExistente) {
      throw new Error('El usuario ya existe');
    }

    // Generamos un ID único para el usuario (puedes usar UUID u otros métodos)
    usuario.id = this.generateUniqueId();
    // Agregamos el nuevo usuario a la lista
    this.usuarios.push(usuario);
  }

  // Método para iniciar sesión
  iniciarSesion(email: string, password: string): Usuario | undefined {
    // Buscamos al usuario por su correo electrónico y contraseña
    const usuario = this.usuarios.find((u) => u.email === email && u.password === password);

    return usuario;
  }

  // Método para generar un ID único (puedes personalizarlo)
  private generateUniqueId(): string {
    return Math.random().toString(36).substring(2) + Date.now().toString(36);
  }
}
