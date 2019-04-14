import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../Servicios/auth.service';
import { Usuario } from '../../clases/usuario';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  usuario: Usuario;
  constructor(private authService: AuthService) {
    this.usuario = this.authService.usuario;
  }

  ngOnInit() {
  }

}
