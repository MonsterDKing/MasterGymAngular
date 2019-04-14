import { Component, OnInit } from '@angular/core';
import { AuthService } from '../Servicios/auth.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';
import { PersonasService } from '../Servicios/personas.service';

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: []
})
export class PagesComponent implements OnInit {

  constructor(private authService: AuthService, private route: Router, private personaService: PersonasService) {
    // this.personaService.isNoAutorizado();
   }

  ngOnInit() {
    if (!this.authService.isAuthenticated()) {
      Swal.fire({
        type: 'error',
        title: 'Acceso Restringido',
      });
      this.route.navigate(['/login']);
    }
  }
}


