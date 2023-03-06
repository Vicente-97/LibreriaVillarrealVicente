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
  public users: user[]=[]
 
  username:string|null=localStorage.getItem("username")
  jwt: string | null = null;
  userDetails!: string|null;
  isAdmin!: boolean;

  constructor(private servicio : UserService, private authService : AuthService) { }

  


  ngOnInit(): void {
   this.getUser()
   this.jwt = localStorage.getItem('jwt');
   this.userDetails=localStorage.getItem('username')
   if(this.jwt){
    this.isAdmin = this.authService.isUserAdmin(this.jwt);
  }

  }


  getUser(){
    this.servicio.getUsers().subscribe({
      next:(resp)=> {
        this.users=resp
      },
    })
  }


  
}
