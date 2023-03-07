import { Component, ViewChild } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { user } from '../../interfaces/userCompleto';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css'
  ]
})
export class DeleteUserComponent {


  user!:user

  username!:string
  name!:String
  email!:String
  img!:String

  constructor(private servicio : UserService , private route: ActivatedRoute, private router: Router) { }

//Establecemos nuestro formulario.
  @ViewChild('deleteUser') deleteUserForm!: NgForm


//recuperamos el usuario por parámetros y lo obtenemos, linkeamos las propiedades para mostrarlos
  ngOnInit(): void {
    this.username= this.route.snapshot.params['id']
    console.log(this.username);
    this.servicio.getUser(this.username).subscribe({
      next:(resp)=> {
        this.username=resp.username
        this.name=resp.name
        this.email=resp.email
        this.img=resp.img
        this.user=resp
      },
    })
  }

//método paraa poder borrar un usuario
  deletedUser(){
    this.servicio.deleteUser(this.username).subscribe({   

      next: (resp)=> {
        if (resp) {
          console.log(resp)
          if(this.deleteUserForm.valid){
          
            Swal.fire({
              icon: 'success',
              title: 'User deleted sucess',
              text: '¡User deleted!',
          });
          this.router.navigate(['/user/list'])
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'sorry!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }}}})
  }
    }

  


