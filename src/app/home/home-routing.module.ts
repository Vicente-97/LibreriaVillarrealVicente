import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: '', component: HomeComponent },
        { path: '**', redirectTo: 'home' }
      ]
    }
]

    @NgModule({
        imports: [
          RouterModule.forChild(routes)
        ]
    })
    
      export class HomeRoutingModule { }