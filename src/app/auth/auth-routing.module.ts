import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';


const routes: Routes = [

    {
      path:"", component: LoginComponent, pathMatch: "full"
    },
    //verificacion
    //codigo verficacion
    //registro
  ];
  
  @NgModule({
    imports: [[RouterModule.forChild(routes)]],
  })
  export class AuthRoutingModule { }