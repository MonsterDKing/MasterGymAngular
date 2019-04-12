import { Component, OnInit } from '@angular/core';
import { PersonasService } from '../../Servicios/personas.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  arregloPersonas = [];

  constructor(private _PS: PersonasService ) {
    this._PS.personasvencidasMes().subscribe((res: any ) => {
      console.log(res);
      this.arregloPersonas = res.personas;
    });
  }

  ngOnInit() {
  }

}
