import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ListComponent } from './list/list.component';
import { UpdateBookComponent } from './update-book/update-book.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'addBook', component: AddBookComponent },
        { path: 'deleteBook', component: DeleteBookComponent },
        { path: 'list', component: ListComponent },
        { path: 'updateBook', component: UpdateBookComponent },
        { path: '**', redirectTo: 'books' }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })

  export class BookRoutingModule { }