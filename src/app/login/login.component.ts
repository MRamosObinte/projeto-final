import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Usuario } from '../model/usuario';
import { LoginService } from './login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario = new Usuario();

  constructor(
    private loginService: LoginService
  ) { }

  ngOnInit(): void {
  }

  login(form: NgForm) {
    if (form && form.valid) {
      this.loginService.login(this.usuario);
    }
  }

}
