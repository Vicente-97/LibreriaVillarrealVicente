import { Component } from '@angular/core';
import { UserService } from '../services/user.service';
import { user } from '../../interfaces/userCompleto';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styles: [
  ]
})
export class ListComponent {
  public users: user[]=[]
 
  username:string|null=localStorage.getItem("username")
  
  constructor(private servicio : UserService) { }

  


  ngOnInit(): void {
   this.getUser()
   console.log("peticion")
  

  }


  getUser(){
    this.servicio.getUsers().subscribe({
      next:(resp)=> {
        this.users=resp
      },
    })
  }


  
}
