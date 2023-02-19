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

  @ViewChild('addCategory') addCategoryForm!: NgForm

  name:string=''
  description:string =''

  constructor(private servicio : CategoryService, private route : Router) { }

  ngOnInit(): void {
  }

  nombreValido(campo:string): boolean {
    return this.addCategoryForm?.controls[campo]?.invalid
    && this.addCategoryForm?.controls[campo]?.touched;
  }


  addCategories(){
    const name : string = this.name
    const description:string = this.description
    this.servicio.addCategory(name, description).subscribe({
      next: (resp)=> {
        if (resp) {
          console.log(resp)
          if(this.addCategoryForm.valid){
          
            Swal.fire({
              icon: 'success',
              title: 'Formulario completado con éxito',
              text: '¡Categoria añadida!',
          });
          this.route.navigate(['/category/list'])
      }else{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo debe haber salido mal!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
      }}}})
  }

}
