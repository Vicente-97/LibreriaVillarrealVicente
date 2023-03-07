import { Component, OnInit } from '@angular/core';
import { Categories } from '../../interfaces/categoriesInterface';
import { CategoryService } from '../services/categories.service';
import { AuthService } from '../../auth/services/auth.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  //Variables que nos servirán para poder recuperar el token, ver si es admin y obtener las categorias.
 public categories: Categories[]=[];
 isAdmin=false;
 jwt: string | null = null;



  constructor(private categoriesServ: CategoryService, private servicio: AuthService) { }

  //Comprovamos si el usuario que esta entrando al recurso es admin
  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.getCategoriesInit()
    if(this.jwt){
      this.isAdmin = this.servicio.isUserAdmin(this.jwt);
    }
  }

  //Obtenemos las categorias para poder mostrarlas
  getCategoriesInit() {
    this.categoriesServ.getCategories()
      .subscribe({
        next: resp => this.categories = resp,
        error: (error) => console.log(error)
      })
  }

  //Comprobamos si su rol es admin.
  isAdminRol(){
    let rol = localStorage.getItem("role")
    if(rol==="ADMIN_ROLE"){
      this.isAdmin=true;
    }
  }

  

}
