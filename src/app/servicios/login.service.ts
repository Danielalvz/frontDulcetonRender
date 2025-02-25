import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  url = "https://dulceton.fwh.is/controlador/UsuarioControlador.php";

  constructor(private http: HttpClient) {}

  consultarUsuario(email: any, password: any) {
    return this.http.get(`${this.url}?control=login&email=${email}&password=${password}`);
  }
}
