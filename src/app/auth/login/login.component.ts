import { Component, OnInit,ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild('loginForm') loginForm!: NgForm

  constructor(private router: Router) { }

  ngOnInit(): void {
  }


  nombreValido(): boolean {
    return this.loginForm?.controls['username'].invalid
    && this.loginForm?.controls['username'].touched;
  }

  passwordValida(): boolean {
    return this.loginForm?.controls['password'].invalid
    && this.loginForm?.controls['password'].touched;
  }

  onSubmit(){
    if (this.loginForm.valid) {
      Swal.fire({
        icon: 'success',
        title: 'Inicio de sesión exitoso',
        text: '¡Bienvenido de nuevo!',
      });
      this.router.navigate(['/home'])
    }else{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Nombre de usuario o contraseña incorrectos.',
      });
    }
  }
}
