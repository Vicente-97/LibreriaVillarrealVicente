
import { RouterModule, Routes } from "@angular/router";
import { NgModule } from '@angular/core';
import { CategoriesModule } from './categories/categories.module';
import { NotFoundComponent } from './shared/not-found/not-found.component';


const routes: Routes=[{ 
    path: 'books',
    loadChildren: () => import('./books/books.module').then( m => m.BooksModule )
  },
  { 
    path: 'category',
    loadChildren: () => import('./categories/categories.module').then( m => m.CategoriesModule )
  },
  {
    path: '',
    redirectTo: 'books',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: NotFoundComponent
  }]

@NgModule({
    imports:[RouterModule.forRoot(routes)],
    exports:[RouterModule]
})
export class AppRoutingModule{}