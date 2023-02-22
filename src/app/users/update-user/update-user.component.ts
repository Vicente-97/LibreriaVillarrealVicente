import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { UserService } from '../services/user.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {


  userDetails!: string|null;
  constructor(private fb: FormBuilder, private router: Router, private servicio:UserService){}

  myForm: FormGroup= this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.minLength(8)]],
    confirPassword:['', [Validators.required, Validators.minLength(8), this.match('password') ]],
    fotoPerfil:['',[Validators.required]]
  });

  
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
    this.userDetails=localStorage.getItem('username')
  }

  saveUpdate(){
    this.userDetails=localStorage.getItem('username')
    this.servicio.UpdateUser(this.myForm.get('email')?.value, this.myForm.get('name')?.value, this.myForm.get('password')?.value, this.myForm.get('fotoPerfil')?.value, localStorage.getItem('username')!)
    .subscribe({
      next:(resp)=> {
        if(resp){
          alert("cambiado")
        }
      },error:(err)=> {
        alert("ERRORRRRRRRRRR")
      },
    })
  }

  

  save(){
    if(this.myForm.valid){
      this.myForm.markAllAsTouched()
      
    }
  }
}

