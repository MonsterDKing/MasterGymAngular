import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from '../../Servicios/personas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-registrar-cliente',
  templateUrl: './registrar-cliente.component.html',
  styleUrls: ['./registrar-cliente.component.css']
})
export class RegistrarClienteComponent implements OnInit {

  completo = false;
  tiempo = 5;
  interval;

  formulario = new FormGroup({
    nombreCompleto: new FormControl(),
    fechaIngreso: new FormControl(),

  });

  registrarCheckbox = false;

  constructor(private _ps: PersonasService, private route: Router) { }

  ngOnInit() {
  }

  cambiarEstado() {
    this.registrarCheckbox = true;
  }


  onSubmit() {
    this._ps.registrarCliente(this.formulario.value).subscribe((data: any) => {
      console.log(data);
      if (data.error) {
        console.log('no encontro ningun fallo');
      }
      if (data.error === false) {
        this.completo = true;
        this.startTimer();
        this.redireccion(data.persona.id);
      }

    });
  }

  startTimer() {
    this.interval = setInterval( () => {
      if (this.tiempo > 0) {
        this.tiempo--;
      }
    }, 1000);
  }

  redireccion(idCliente) {
    setInterval(() => { this.route.navigate([`/modificarCliente/${idCliente}`])}, 5000);
    }

}
