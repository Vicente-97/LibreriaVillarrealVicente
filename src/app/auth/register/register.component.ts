import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';
import { userRegister } from '../../interfaces/userCompleto';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  

  constructor(private fb: FormBuilder, private router: Router, private servicio : AuthService) { }

  //definimos nuestro formulario Reactive.
  myForm: FormGroup= this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.minLength(8)]],
    confirPassword:['', [Validators.required, Validators.minLength(8), this.match('password') ]]
  });

  //Método que completa el registro.
  saveRegister(){
    const username:string =this.myForm.get('nombre')?.value
    const password:string = this.myForm.get('password')?.value
    const email:string =this.myForm.get('email')?.value
    console.log(username,email,password)
    this.servicio.register(username,email,password
    ).subscribe({
        next: (resp) => {
          if (resp) {
            console.log(resp)
            if(this.myForm.valid){
            
              Swal.fire({
                icon: 'success',
                title: 'Please check your email and verify your account',
                text: '¡Welcome to Libreria Villarreal, please verify your account!',
            });
            this.router.navigate(['/'])

          }else {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something has gone wrong!',
              footer: '<a href="">Why do I have this issue?</a>'
            })
          }}}})
       }
  

  //Método que valida los campos
  isValidField(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched && this.myForm?.controls[field].invalid
  }

  //Para validar la contraseña, igual que el anterior pero también recoge la opción del objeto mismatch. Para que funcione tenemos que ponerle el ? para decirle que sabemos que el objeto puede venir nulo.
  isValidPass(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched && this.myForm?.controls[field].invalid || this.myForm?.controls[field].errors?.['mismatch']
  }
  
  //. Si los valores de las contraseñas no son iguales, la función devuelve un objeto con la propiedad mismatch igual a true, lo que indica que la validación ha fallado.
  match(controlName: string) {
    return (control: FormControl) => {
      if (!control.parent) {
        return null;
      }

      return control.value === control.parent.get(controlName)?.value? null : { mismatch: true };
    };
  }

  ngOnInit(): void {
  }


  save(){
    if(this.myForm.valid){
      this.myForm.markAllAsTouched()
      
    }
  }
}
