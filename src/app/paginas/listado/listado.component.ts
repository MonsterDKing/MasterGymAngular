import { Component, OnInit } from "@angular/core";
import { PersonasService } from "../../Servicios/personas.service";
import { Observable } from "rxjs";
import { Persona } from "../../interfaces/persona";

@Component({
  selector: "app-listado",
  templateUrl: "./listado.component.html",
  styleUrls: ["./listado.component.css"]
})
export class ListadoComponent implements OnInit {
  private listadoPersonas = [];

  settings = {
    columns: {
      nombreCompleto: {
        title: 'Nombre Completo'
      },
      fechaIngreso: {
        title: 'Fecha de Ingreso'
      },
      fechaVencimiento: {
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
      addButtonContent: '<span class="add"><i class=""></i></span>',
      createButtonContent: '<i class="far fa-save"></i>',
      cancelButtonContent: '<i class="fas fa-times"></i>',
      confirmCreate: true
    }
  };

  constructor(private _ps: PersonasService) {
    this._ps.ListarTodos().subscribe((res: any) => {
      this.listadoPersonas = res.personas;
      this.cambiarFechas(this.listadoPersonas);
    });
  }

  ngOnInit() {}

   tranformDate(date) {
    let result = '';
    if (date) {
      const parts = date.split('-');
      result = `${parts[2]}/${parts[1]}/${parts[0]}`;
    }
    return result;
}

  cambiarFechas(Arreglo) {
    Arreglo.forEach(element => {
      element.fechaIngreso = this.tranformDate(element.fechaIngreso);
      element.fechaVencimiento = this.tranformDate(element.fechaVencimiento);
    });
  }
}
