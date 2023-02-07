import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddCategoryComponent } from './add-category/add-category.component';
import { DeleteCategoryComponent } from './delete-category/delete-category.component';
import { ListComponent } from './list/list.component';
import { UpdateCategoryComponent } from './update-category/update-category.component';


const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'addCategory', component: AddCategoryComponent },
        { path: 'deleteCategory', component: DeleteCategoryComponent  },
        { path: 'list', component: ListComponent },
        { path: 'updateCategory', component: UpdateCategoryComponent },
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