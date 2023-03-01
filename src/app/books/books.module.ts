import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { AuthInterceptorService } from '../auth-interceptor.service';
import {DropdownModule} from 'primeng/dropdown';
import { ListByCatComponent } from './list-by-cat/list-by-cat.component'
import { RouterModule } from '@angular/router';
import { InputTextModule } from 'primeng/inputtext';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';





@NgModule({
  declarations: [
    ListComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    ListByCatComponent,
    
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    HttpClientModule,
    DropdownModule,
    RouterModule,
    InputTextModule,
    ReactiveFormsModule,
    FormsModule
    
    
    
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptorService, multi: true }
  ]
 
  
})
export class BooksModule { }
