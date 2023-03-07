import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interfaces/categoriesInterface';
import { BooksService } from '../services/books.service';
import { Router,  } from '@angular/router';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { CategoryService } from '../../categories/services/categories.service';
import { UserService } from '../../users/services/user.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css']
})
export class AddBookComponent implements OnInit {


  category!:Categories
  categories:Categories[]=[]
  


  json :any={

    isbn:'',
    title:'',
    dateBook:'',
    author:'',
    price:'',
    stock:'',
    category:''
  }



  constructor(private fb: FormBuilder, private router: Router, private servicio:BooksService, private servicioCat: CategoryService, private servicioUser:UserService) { }


  //Definimos nuestro Formulario Reactivve
  myForm: FormGroup= this.fb.group({
    isbn:['', [Validators.required, Validators.minLength(5)]],
    title:['', [Validators.required, Validators.minLength(5)] ],
    date:['', [Validators.required]],
    author:['', [Validators.required ]],
    price:['', [Validators.required, Validators.min(5) ]],
    stock:['', [Validators.required, Validators.min(5) ]],
    opcionSeleccionado:['', [Validators.required]],
    fotoPerfil:['',[Validators.required]],
    fileSource:['', [Validators.required]]
  });


  //Obtenemos nuestras categorias nada más acceder a la página
  ngOnInit(): void {
    this.servicioCat.getCategories().subscribe({
      next:(resp)=> {
        this.categories=resp
      },error:(err)=> {
        console.log(err)
      },
    })


  }


  //Método para la validación del formulario
  isValidField(field: string){
    return this.myForm?.controls[field].errors
    && this.myForm?.controls[field].touched && this.myForm?.controls[field].invalid
  }


  //Método para poder añadir un libro, obtenemos las categorias y añadimos una imagen y el libro.
  saveAdd(){
    this.json.isbn=this.myForm.get('isbn')?.value
    this.json.title = this.myForm.get('title')?.value
    this.json.dateBook= this.myForm.get('date')?.value
    this.json.author=this.myForm.get('author')?.value
    this.json.price=this.myForm.get('price')?.value
    this.json.stock=this.myForm.get('stock')?.value
    
    this.servicioCat.getCategoryId(this.myForm.get('opcionSeleccionado')?.value).subscribe({
      next:(resp)=> {
        this.category=resp
        this.json.category=this.category
        this.servicio.addBook(this.json,this.myForm.get('fileSource')?.value).subscribe({

          next:(resp)=> {
            if(resp){
              window.location.reload()
              this.myForm.reset()
              Swal.fire({
                icon: 'success',
                title: 'Book successfully added',
                text: '¡Book added!',
            })
            this.router.navigate(['/'])
            }
          },error:(err)=> {
            Swal.fire({
              icon: 'error',
              title: 'Oops...',
              text: 'Something has gone wrong!',
            })
            this.router.navigate(['/'])
          },
    
    
        })
      },
    })
   

  }



  save(){
    if(this.myForm.valid){
      this.myForm.markAllAsTouched()
      
    }
  }

  //Método necesario para poder transformar la foto y subirla.
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
