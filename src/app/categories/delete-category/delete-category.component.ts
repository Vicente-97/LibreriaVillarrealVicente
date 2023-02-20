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

  @ViewChild('deleteCategory') deleteCategoryForm!: NgForm
  constructor(private servicio : CategoryService , private route: ActivatedRoute, private router: Router) { }

  name:string=''
  description:String =''
  ngOnInit(): void {
    this.name= this.route.snapshot.params['id']
    console.log(this.name);
    this.servicio.getCategoryId(this.name).subscribe({
      next:(resp)=> {
        this.description=resp.description
      },
    })
  }

  nombreValido(campo:string): boolean {
    return this.deleteCategoryForm?.controls[campo]?.invalid
    && this.deleteCategoryForm?.controls[campo]?.touched;
  }


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
              title: 'Categoria borrada con éxito',
              text: '¡Categoria Borrada!',
          });
          this.router.navigate(['/category/list'])
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
