import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Persona, PersonaResponse, PersonasResponse } from '../interfaces/persona';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

const multipart = {
  headers: new HttpHeaders({ 'Content-Type': 'multipart/form-data' })
};



@Injectable({
  providedIn: 'root'
})
export class PersonasService {




  constructor(private http: HttpClient) {}

  ListarTodos() {
    return this.http.get('http://localhost:8080/api/usuario');
  }

  registrarCliente(data){
    return this.http.post('http://localhost:8080/api/usuario/', data, httpOptions);
  }

  buscarPersonaPorId(id){
    return this.http.get('http://localhost:8080/api/usuario/' + id);
  }

  postFile(fileToUpload: File,id){
    const formData: FormData = new FormData();
    formData.append('archivo', fileToUpload, fileToUpload.name);
    formData.append('id', id);
    return this.http.post('http://localhost:8080/api/usuario/cargarImagen/', formData);
}


}

