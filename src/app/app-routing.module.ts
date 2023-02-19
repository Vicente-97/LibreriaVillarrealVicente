
import { RouterModule, Routes,  } from '@angular/router';
import { NgModule } from '@angular/core';
import { CategoriesModule } from './categories/categories.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeModule } from './home/home.module';
import {  AuthGuardian } from './guardian.service';


const routes: Routes=[
  { 
  
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },{ 
  
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksModule ),canActivate:[AuthGuardian]
  },
  { 
    path: 'category',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesModule ),canActivate:[AuthGuardian]
  },
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule ), canActivate:[AuthGuardian]
  },
  // {
  //   path: '',
  //   redirectTo: 'books',
  //   pathMatch: 'full'
  // },
  {
    path: '**',
    component: NotFoundComponent
  }]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}