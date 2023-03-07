import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../services/categories.service';
import { ActivatedRoute, Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-delete-category',
  templateUrl: './delete-category.component.html',
  styleUrls: ['./delete-category.component.css']
})
export class DeleteCategoryComponent implements OnInit {

  //definimos nuestro formulario.
  @ViewChild('deleteCategory') deleteCategoryForm!: NgForm
  constructor(private servicio : CategoryService , private route: ActivatedRoute, private router: Router) { }

  //variables
  name:string=''
  description:String =''


  //recuperamos los parámetros y mostramos nuestra categoria que vamos a borrar.
  ngOnInit(): void {
    this.name= this.route.snapshot.params['id']
    console.log(this.name);
    this.servicio.getCategoryId(this.name).subscribe({
      next:(resp)=> {
        this.description=resp.description
      },
    })
  }

  //método para poder verificar los campos
  nombreValido(campo:string): boolean {
    return this.deleteCategoryForm?.controls[campo]?.invalid
    && this.deleteCategoryForm?.controls[campo]?.touched;
  }

//Método que borra dicha categoría.
deleteCategories(){
    const name : string = this.name
    const description:String = this.description
    this.servicio.deleteCategory(name).subscribe({
      next: (resp)=> {
        if (resp) {
          console.log(resp)
          if(this.deleteCategoryForm.valid){
          
            Swal.fire({
              icon: 'success',
              title: 'Category successfully deleted',
              text: '¡Category deleted!',
          });
          this.router.navigate(['/category/list'])
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something has gone wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }}}})
  }



}
