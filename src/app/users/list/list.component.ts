import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../../interfaces/userCompleto';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'
  ]
})
export class ListComponent {

  //variables que nos proporcionaran utilidad para localizar el usuario, el token, el username, saber si es admin e incluso la lista de usuarios.
  public users: user[]=[]
 
  username:string|null=localStorage.getItem("username")
  jwt: string | null = null;
  userDetails!: string|null;
  isAdmin!: boolean;

  constructor(private servicio : UserService, private authService : AuthService) { }

  

//recuperamos el token y el username, comprobamos si es admin.
  ngOnInit(): void {
   this.getUser()
   this.jwt = localStorage.getItem('jwt');
   this.userDetails=localStorage.getItem('username')
   if(this.jwt){
    this.isAdmin = this.authService.isUserAdmin(this.jwt);
  }

  }

//Método para obtener los usuarios.
  getUser(){
    this.servicio.getUsers().subscribe({
      next:(resp)=> {
        this.users=resp
      },
    })
  }


  
}
