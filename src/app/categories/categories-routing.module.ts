import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RolGuardGuard } from '../rol-guard.guard';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { ListComponent } from './list/list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'addCategory', canActivate:[RolGuardGuard], component: AddCategoryComponent },
        { path: 'deleteCategory/:id',canActivate:[RolGuardGuard], component: DeleteCategoryComponent  },
        { path: 'list', component: ListComponent },
        { path: 'updateCategory/:id',canActivate:[RolGuardGuard], component: UpdateCategoryComponent },
        { path: '**', redirectTo: 'category' }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })

  export class CategoryRoutingModule { }