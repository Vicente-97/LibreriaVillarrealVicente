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

 public categories: Categories[]=[];
 isAdmin=false;
 jwt: string | null = null;

  constructor(private categoriesServ: CategoryService, private servicio: AuthService) { }

  ngOnInit(): void {
    this.jwt = localStorage.getItem('jwt');
    this.getCategoriesInit()
    if(this.jwt){
      this.isAdmin = this.servicio.isUserAdmin(this.jwt);
    }
  }

  getCategoriesInit() {
    this.categoriesServ.getCategories()
      .subscribe({
        next: resp => this.categories = resp,
        error: (error) => console.log(error)
      })
  }

  isAdminRol(){
    let rol = localStorage.getItem("role")
    if(rol==="ADMIN_ROLE"){
      this.isAdmin=true;
    }
  }

  

}
