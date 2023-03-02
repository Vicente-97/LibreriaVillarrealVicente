import { Component, OnInit } from '@angular/core';
import { Books } from '../../interfaces/bookInterface';
import { ActivatedRoute, Router } from '@angular/router';
import { BooksService } from '../services/books.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Categories } from '../../interfaces/categoriesInterface';
import { CategoryService } from 'src/app/categories/services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-book',
  templateUrl: './delete-book.component.html',
  styleUrls: ['./delete-book.component.css']
})
export class DeleteBookComponent implements OnInit {

  book:any= {} as any


  constructor(private route: ActivatedRoute, private servicio:BooksService, private servicioCat:CategoryService, private fb : FormBuilder, private routes: Router) { }

  category:Categories={} as Categories

  myForm: FormGroup= this.fb.group({
    isbn:['', [Validators.required, Validators.minLength(3)]],
    title:['', [Validators.required, Validators.minLength(5)] ],
    date:['', [Validators.required]],
    author:['', [Validators.required ]],
    price:['', [Validators.required, Validators.min(5) ]],
    stock:['', [Validators.required, Validators.min(5) ]],
  })

  ngOnInit(): void {
    
    const isbn=this.route.snapshot.params['id']
    this.servicio.getBook(isbn).subscribe({
      next:(resp)=> {
        this.book=resp
        this.servicioCat.getCategoryId(this.book.category.name).subscribe({
          next:(resp)=> {
            this.category=resp
            console.log(this.category);
            
          },
        })
   
      },
    })

  }

  saveDelete(){

    this.servicio.deletBook(this.book.isbn).subscribe({
      next:(resp)=> {
        if(resp){
        
          this.myForm.reset()
          Swal.fire({
            icon: 'success',
            title: ' Book Deleted',
            text: '¡sucess Book Deleted!',
            
        })
        this.routes.navigate(['/books/list'])
        }
      },error:(err)=> {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Cant delete workbook',
        })
        
      },
    })



  }

save(){
  if(this.myForm.valid){
    this.myForm.markAllAsTouched()
    
  }
}

}
