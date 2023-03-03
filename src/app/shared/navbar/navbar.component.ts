import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../users/services/user.service';
import { user } from '../../interfaces/userCompleto';


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
  user:user = {} as user
  username:string|null=localStorage.getItem("username")
  constructor(private servicio: AuthService, private servicioUser: UserService) { }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.userDetails=localStorage.getItem('username')
    if(this.username!=null){
      this.servicioUser.getUser(this.username).subscribe({
        next:(resp=>{
          this.user=resp
        })
      })
    }
    


    if(this.jwt){
      this.isAdmin = this.servicio.isUserAdmin(this.jwt);
    }
  }


  

  logOut():void{
    this.servicio.logout();
    this.isLoggedIn=false;
  }

}
