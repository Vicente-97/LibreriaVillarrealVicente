import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {

  jwt: string | null = null;
 
  userDetails!: string|null;
  isAdmin!: boolean;
  isLoggedIn!: boolean;
  constructor(private servicio: AuthService) { }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.userDetails=localStorage.getItem('username')


    if(this.jwt){
      this.isAdmin = this.servicio.isUserAdmin(this.jwt);
    }
  }


  

  logOut():void{
    this.servicio.logout();
    this.isLoggedIn=false;
  }

}
