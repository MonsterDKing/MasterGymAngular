import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { AuthService } from './auth.service';



const rutaServidor = 'http://localhost:8080/api/usuario';
// const rutaServidor = 'http://192.168.1.64:8080/api/usuario';





@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  private httpOptions = new HttpHeaders({ 'Content-Type': 'application/json' })

  public isNoAutorizado(e): boolean{
    if(e.status==401 || e.status==403){
      this.router.navigate(['/login'])
      return true;
    }
    return false;
  }



  constructor(private http: HttpClient , private router: Router, private authService: AuthService) {}

  private agregarAuthorizationHeader() {
    let token = this.authService.token;
    if (token != null) {
      return this.httpOptions.append('Authorization', 'Bearer' + token);
    }
    return this.httpOptions;
  }

  ListarTodos() {
    return this.http.get(rutaServidor , {headers: this.agregarAuthorizationHeader()});
  }

  registrarCliente(data) {
    return this.http.post(rutaServidor, data, {headers: this.agregarAuthorizationHeader()});
  }

  buscarPersonaPorId(id) {
    return this.http.get(rutaServidor + '/' + id,{headers: this.agregarAuthorizationHeader()});
  }

  postFile(fileToUpload: File, id) {
    const formData: FormData = new FormData();
    formData.append('archivo', fileToUpload, fileToUpload.name);
    formData.append('id', id);
    return this.http.post(rutaServidor + '/cargarImagen/', formData);
}

  personasvencidasMes() {
    return this.http.get(rutaServidor + '/mensualidad/vencidos', {headers: this.agregarAuthorizationHeader()});
  }

 obtenerPersonaPorCodigo(codigo){
   return this.http.get(rutaServidor + '/random/' + codigo , {headers: this.agregarAuthorizationHeader()});
 }

}

