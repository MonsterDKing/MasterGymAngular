import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { PersonasService } from '../../Servicios/personas.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-entrada-clientes',
  templateUrl: './entrada-clientes.component.html',
  styleUrls: ['./entrada-clientes.component.css']
})
export class EntradaClientesComponent implements OnInit {

  formulario = new FormGroup({
    codigo: new FormControl('', [Validators.required, Validators.max(9999)]),
  });
  cd;


  constructor(private _PS: PersonasService, private router: Router) { }

  ngOnInit() {
  }

  onSubmit() {
    console.log(this.formulario.status)
    if (this.formulario.get('codigo').hasError('required')) {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'Debes ingresar la clave de acceso',
      });
    }
    if (this.formulario.get('codigo').hasError('max')) {
      Swal.fire({
        type: 'error',
        title: 'Error',
        text: 'La clave de acceso es menor a 4 digitos',
      });
    }
    if (this.formulario.valid) {
      this.cd = this.formulario.get('codigo').value;
      this._PS.obtenerPersonaPorCodigo(this.cd).subscribe((res: any) => {


        if(res.error == 'true') {
          Swal.fire({
            type: 'error',
            title: 'Error',
            text: 'No se encontro a ningun cliente con esa clave',
          });
          return;
        }


        Swal.fire({
          type: 'success',
          title: 'Ingreso Correcto',
          text: 'Se ha ingresado correctamente',
        });
        this.router.navigateByUrl('cliente/' + res.persona.id);

      });
    }
  }

}
