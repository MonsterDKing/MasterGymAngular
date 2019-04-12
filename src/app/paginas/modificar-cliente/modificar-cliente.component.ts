import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from "@angular/router";
import { FormControl, FormGroup } from '@angular/forms';
import { PersonasService } from '../../Servicios/personas.service';



@Component({
  selector: 'app-modificar-cliente',
  templateUrl: './modificar-cliente.component.html',
  styleUrls: ['./modificar-cliente.component.css']
})
export class ModificarClienteComponent implements OnInit {

  fileToUpload: File = null;
  imagenCargada = false;
  rutaImagen = '../../../assets/images/users/1.jpg';





  formulario = new FormGroup ({
    nombreCompleto: new FormControl(),
    fechaIngreso: new FormControl(),
    claverandom: new FormControl(),
    foto: new FormControl(),
  });

  id;
  constructor(private route: ActivatedRoute, private _PS: PersonasService) { }

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('idCliente');
      this._PS.buscarPersonaPorId(this.id).subscribe((data: any) =>{
      if (data.persona.foto != null){
        this.rutaImagen = 'http://localhost:8080/api/usuario/uploads/img/'+ data.persona.foto;
      }
      this.formulario.controls.nombreCompleto.setValue(data.persona.nombreCompleto);
      this.formulario.controls.fechaIngreso.setValue(data.persona.fechaIngreso);
      this.formulario.controls.claverandom.setValue(data.persona.randomAccess);
      this.formulario.controls.claverandom.disable();

    });
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this._PS.postFile(this.fileToUpload,this.id).subscribe( (data: any) => {
        console.log(data);
        this.imagenCargada = true;
        this.rutaImagen = 'http://localhost:8080/api/usuario/uploads/img/'+ data.persona.foto;
    }, error => {
      console.log(error);
    });

}




}
