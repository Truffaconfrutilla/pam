import { Injectable } from '@angular/core';
import { Usuario } from '../models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {
  
  constructor(private http: HttpClient) { }

  listUsuarios(): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiURL}/usuarios`);
  }

  addUsuarios(usuario: Usuario): Observable<Usuario> {
    return this.http.post<Usuario>(`${environment.apiURL}/usuarios`, usuario);
  }

  getUsuarios(id: Number): Observable<Usuario> {
    return this.http.get<Usuario>(`${environment.apiURL}/usuarios/?id=${id}`);
  }

  updateUsuarios(usuario: any): Observable<Usuario> {
    return this.http.put<Usuario>(`${environment.apiURL}/usuarios/${usuario.id}`, usuario);
  }

  deleteUsuarios(usuario: any): Observable<Usuario> {
    return this.http.delete<Usuario>(`${environment.apiURL}/usuarios/${usuario.id}`);
  }

}
