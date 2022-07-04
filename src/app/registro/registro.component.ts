import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { RegistroService } from './registro.service';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  usuario: Usuario = new Usuario();
  clave2: string = "";

  constructor(
    private registroService: RegistroService
  ) { }

  ngOnInit(): void {
  }

  registrar(form: NgForm) {
    if (form && form.valid) {
      this.registroService.registrarUsuario(this.usuario);
    }
  }

}
