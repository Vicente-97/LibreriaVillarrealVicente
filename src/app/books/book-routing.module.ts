import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddBookComponent } from './add-book/add-book.component';
import { DeleteBookComponent } from './delete-book/delete-book.component';
import { ListComponent } from './list/list.component';
import { UpdateBookComponent } from './update-book/update-book.component';
import { RolGuardGuard } from '../rol-guard.guard';
import { ListByCatComponent } from './list-by-cat/list-by-cat.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'addBook',canActivate:[RolGuardGuard], component: AddBookComponent },
        { path: 'deleteBook/:id',canActivate:[RolGuardGuard], component: DeleteBookComponent },
        { path: 'list', component: ListComponent },
        { path: 'updateBook/:id',canActivate:[RolGuardGuard], component: UpdateBookComponent },
        { path: 'listByCat/:id', component: ListByCatComponent },
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