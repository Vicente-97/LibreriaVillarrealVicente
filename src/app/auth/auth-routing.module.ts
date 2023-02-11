import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router'
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';



  const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: LoginComponent },
        { path: 'register', component: RegisterComponent },
        // { path: '**', redirectTo: 'home' }
      ]
    }
  ];
  
  @NgModule({
    imports: [[RouterModule.forChild(routes)]],
  })
  export class AuthRoutingModule { }