
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { CategoriesModule } from './categories/categories.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';
import { HomeModule } from './home/home.module';


const routes: Routes=[
  { 
  
    path: '',
    loadChildren: () => import('./auth/auth.module').then( m => m.AuthModule )
  },{ 
  
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksModule )
  },
  { 
    path: 'category',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesModule )
  },
  { 
    path: 'home',
    loadChildren: () => import('./home/home.module').then( m => m.HomeModule )
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