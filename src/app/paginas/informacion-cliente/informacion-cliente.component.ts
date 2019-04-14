import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-informacion-cliente',
  templateUrl: './informacion-cliente.component.html',
  styleUrls: ['./informacion-cliente.component.css']
})
export class InformacionClienteComponent implements OnInit {

  formulario = new FormGroup({
    codigo: new FormControl(''),
  });


  constructor() { }

  ngOnInit() {
  }

}
