import { NgModule,CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListComponent } from './list/list.component';
import { AddBookComponent } from './add-book/add-book.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { BookRoutingModule } from './book-routing.module';
import { SharedModule } from '../shared/shared.module';
import { NgxDatatableModule } from '@swimlane/ngx-datatable';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';




@NgModule({
  declarations: [
    ListComponent,
    AddBookComponent,
    UpdateBookComponent,
    DeleteBookComponent,
    
  ],
  imports: [
    CommonModule,
    BookRoutingModule,
    SharedModule,
    TableModule,
    ButtonModule
    
  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA // Agregar aquí
  ]
})
export class BooksModule { }
