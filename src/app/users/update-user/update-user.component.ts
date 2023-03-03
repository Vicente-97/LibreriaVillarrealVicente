import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators, FormControl } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { UserService } from '../services/user.service';
import { userCompleto, user } from '../../interfaces/userCompleto';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent {

   public user: user={} as user

  json :any={

    username:'',
    name:'',
    password:'',
    email:''


  }



  userDetails!: string|null;
  constructor(private fb: FormBuilder, private router: Router, private servicio:UserService, private route : ActivatedRoute){}

  myForm: FormGroup= this.fb.group({
    nombre:['', [Validators.required, Validators.minLength(3)]],
    email:['', [Validators.required, Validators.email] ],
    password:['', [Validators.required, Validators.minLength(8)]],
    confirPassword:['', [Validators.required, Validators.minLength(8), this.match('password') ]],
    fotoPerfil:['',[Validators.required]],
    fileSource:['', [Validators.required]]
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
    const id = this.route.snapshot.params["id"] 
    this.servicio.getUser(id).subscribe({
      next:(resp=>{
        this.user=resp
        
      })
    })
    
  }

  saveUpdate(){
    this.json.username=this.user.username
    this.json.password = this.myForm.get('password')?.value
    this.json.email= this.myForm.get('email')?.value
    this.json.name=this.myForm.get('nombre')?.value


    this.servicio.UpdateUser(this.json,this.myForm.get('fileSource')?.value,this.user.username)
    .subscribe({
      next:(resp)=> {
        if(resp){
          window.location.reload()
          this.myForm.reset()
          alert("USUARIO CAMBIADO")
        }
      },error:(err)=> {
        alert("ERRORRRRRRRRRR")
        this.myForm.reset()
      },
    })
  }

  

  save(){
    if(this.myForm.valid){
      this.myForm.markAllAsTouched()
      
    }
  }


  onFileChange(event:any) {
    console.log(event);
    
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      this.myForm.patchValue({
        fileSource: file
      });
    }
  }


  
}

