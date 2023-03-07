import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { CategoryService } from '../services/categories.service';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {

  //establecemos nuestro formulario.
  @ViewChild('addCategory') addCategoryForm!: NgForm

  //variasbles vinculadas con NGModel
  name:string=''
  description:string =''

  constructor(private servicio : CategoryService, private route : Router) { }

  ngOnInit(): void {
  }

  //Método para poder validar los campos del formulario.
  nombreValido(campo:string): boolean {
    return this.addCategoryForm?.controls[campo]?.invalid
    && this.addCategoryForm?.controls[campo]?.touched;
  }


  //Método para poder añadir una categoria.
  addCategories(){
    const name : string = this.name
    const description:string = this.description
    this.servicio.addCategory(name, description).subscribe({
      next: (resp)=> {
        if (resp) {
          
          if(this.addCategoryForm.valid){
          
            Swal.fire({
              icon: 'success',
              title: 'Form completed successfully',
              text: '¡Category added!',
          });
          this.route.navigate(['/category/list'])
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something has gone wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }}},error:(err)=> {
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Something has gone wrong!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        this.route.navigate(['/category/list'])
      },
    })
  }

}
