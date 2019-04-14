import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../clases/usuario';
import Swal from 'sweetalert2';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../../Servicios/auth.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  usuario: Usuario;

  formulario = new FormGroup({
    username: new FormControl(''),
    password: new FormControl('')
  });



  constructor(private authService: AuthService, private route: Router) {
    this.usuario = new Usuario();
  }

  ngOnInit() {
    if(this.authService.isAuthenticated()) {
      Swal.fire({
        type: 'info',
        title: 'Ya estas autenticado',
        text: `Hola ${this.authService.usuario.username} tu ya estas autenticado`,
      });
      this.route.navigate(['/listado'])
    }
  }

  login(): void {
    if (this.formulario.controls.username.value == null || this.formulario.controls.password.value == null) {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Usuario o contrase;a vacia',
      });
      return;
    }

    this.usuario.username = this.formulario.controls.username.value;
    this.usuario.password = this.formulario.controls.password.value;
    this.authService.login(this.usuario).subscribe(response => {
      this.authService.guardarUsuario(response.access_token);
      this.authService.guardarToken(response.access_token);
      const usuario = this.authService.usuario;
      Swal.fire({
        type: 'success',
        title: 'Ingreso Correcto',
        text: `Se ha ingresado corectamente Bienvenido ${usuario.nombre}`,
      });
      this.route.navigate(['/dashboard']);
    }, err => {
      if(err.status == 400) {
        Swal.fire({
          type: 'error',
          title: 'Datos invalidos',
          text: `Usuario o clave incorrecta`,
        });
      }
    })

  }

}
