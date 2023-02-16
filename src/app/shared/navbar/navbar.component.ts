import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  isLoggedIn!: boolean;
  constructor(private servicio: AuthService) { }

  ngOnInit(): void {
  }


  logOut():void{
    this.servicio.logout();
    this.isLoggedIn=false;
  }

}
