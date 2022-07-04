import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { Router } from '@angular/router';
import { Usuario } from '../model/usuario';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private firestore: AngularFirestore,
    private route: Router) { }

  public login(user: Usuario) {
    this.firestore
      .collection('usuarios')
      .doc(user.email) // Si no encuentra este documento, lo creará.
      .set(Object.assign({}, user))
      .then(data => {
        this.route.navigate(["inicio"]);
      })
      .catch(function () {
        alert('Error al registrar usuario');
      }
      ); // Establecemos el contenido del documento.
  }
}
