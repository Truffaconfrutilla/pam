import { Injectable } from '@angular/core';
import { AngularFireAuth } from '@angular/fire/auth';
import { AngularFirestore } from '@angular/fire/firestore';
import { Usuario } from '../models/usuario.model';

@Injectable({
  providedIn: 'root',
})
export class UsuarioService {
  constructor(private afAuth: AngularFireAuth, private firestore: AngularFirestore) {}

  // Método para registrar un usuario en la base de datos
  async registrarUsuario(usuario: Usuario, password: string) {
    try {
      const result = await this.afAuth.createUserWithEmailAndPassword(usuario.email, password);
      const user = result.user;
      usuario.id = user.uid;
      await this.firestore.collection('usuarios').doc(user.uid).set(usuario);
      return { success: true, user };
    } catch (error) {
      return { success: false, error };
    }
  }

  // Método para iniciar sesión con un usuario registrado
  async iniciarSesion(correo: string, password: string) {
    try {
      const result = await this.afAuth.signInWithEmailAndPassword(correo, password);
      return { success: true, user: result.user };
    } catch (error) {
      return { success: false, error };
    }
  }
}
