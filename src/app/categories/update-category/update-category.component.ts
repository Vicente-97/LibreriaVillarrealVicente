import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../../auth/services/auth.service';
import { CategoryService } from '../services/categories.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-category',
  templateUrl: './update-category.component.html',
  styleUrls: ['./update-category.component.css']
})
export class UpdateCategoryComponent implements OnInit {

  @ViewChild('updateCategory') updateCategoryForm!: NgForm

  name:string=''
  description:string =''

  constructor(private servicio : CategoryService , private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.name= this.route.snapshot.params['id']
    console.log(this.name);
    
  }


  nombreValido(campo:string): boolean {
    return this.updateCategoryForm?.controls[campo]?.invalid
    && this.updateCategoryForm?.controls[campo]?.touched;
  }

  updateCategories(){
    const name : string = this.name
    const description:string = this.description
    this.servicio.updateCategory(name, description).subscribe({
      next: (resp)=> {
        if (resp) {
          console.log(resp)
          if(this.updateCategoryForm.valid){
          
            Swal.fire({
              icon: 'success',
              title: 'Formulario Editado con éxito',
              text: '¡Categoria añadida!',
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
