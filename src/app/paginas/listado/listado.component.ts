import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../Servicios/personas.service';
import { Observable } from 'rxjs';
import { Persona } from '../../interfaces/persona';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {

  private listadoPersonas = [];


  settings = {
    columns: {
      id: {
        title: 'ID'
      },
      nombreCompleto: {
        title: 'Nombre Completo'
      },
      fechaIngreso: {
        title: 'Fecha de vencimiento'
      },
      randomAccess: {
        title: 'Clave de acceso'
      }
    },
    actions: {
      add: false,
      edit: false,
      delete: false,
      },
  };

  constructor(private _ps: PersonasService ) {
     this._ps.ListarTodos().subscribe( (res: any) => {
     this.listadoPersonas = res.personas;
   });

  }

  ngOnInit() {
  }

}
