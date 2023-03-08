import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { userCompleto, user } from '../../interfaces/userCompleto';
import Swal from 'sweetalert2';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

  //Variables que nos ayudarán a saber si el usuario esta logueado, el usuario actual, el token y el json de los datos que queremos cambiar.
   public user: user={} as user
  jwt = localStorage.getItem("jwt")
  username!:string
  userActual!:user
  json :any={

    username:'',
    name:'',
    password:'',
    email:''


  }



  userDetails!: string|null;


  constructor(private fb: FormBuilder, private router: Router, private servicio:UserService, private route : ActivatedRoute, private authSer: AuthService){}

  //definimos nuestro formulario
  myForm: FormGroup= this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.minLength(8)]],
    confirPassword:['', [Validators.required, Validators.minLength(8), this.match('password') ]],
    fotoPerfil:['',[Validators.required]],
    fileSource:['', [Validators.required]]
  });

  //método para validar los campos del formulario.
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

  //recuperamos los parámetros y comprobamos que el token no sea nulo, obtenemos el usuario y comprobamos que no pueda
  //editar un usuario distinto al que esta logueado, si pone en la url una url igual pero con la peculiaridad de que al final en vez
  // de su usuario es otro, lo redirije a la paagina de error.
  ngOnInit(): void {
    const id = this.route.snapshot.params["id"] 
    if(this.jwt!=null){
      this.username=this.authSer.returnUser(this.jwt)
    }

    this.servicio.getUser(this.username).subscribe({
      next:(resp=>{
        
        this.userActual=resp
        this.servicio.getUser(id).subscribe({
          next:(resp)=> {
            this.user=resp
            if(this.userActual.username!=this.user.username){
              this.router.navigate(['**'])
            }
          },
        })
      })
    })
  }

  saveUpdate(){
    this.json.username=this.user.username
    this.json.password = this.myForm.get('password')?.value
    this.json.email= this.myForm.get('email')?.value
    this.json.name=this.myForm.get('nombre')?.value

    if(this.myForm.get('fileSource')==null){
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'sorry, The photo cannot be empty!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      this.router.navigate(['/'])
    }
    this.servicio.UpdateUser(this.json,this.myForm.get('fileSource')?.value,this.user.username)
    .subscribe({
      next:(resp)=> {
        if(resp){
          window.location.reload()
          this.myForm.reset()
          Swal.fire({
            icon: 'success',
            title: 'User Updated',
            text: '¡User Update sucess!',
        });
        }
      },error:(err)=> {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'sorry!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        console.log(this.json,this.myForm.get('fileSource')?.value,this.user.username );
        
      },
    })
  }

  

  save(){
    if(this.myForm.valid){
      this.myForm.markAllAsTouched()
      
    }
  }


  onFileChange(event:any) {
    
    
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }


  
}

