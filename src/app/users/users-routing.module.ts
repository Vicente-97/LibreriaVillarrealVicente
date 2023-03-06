import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RolGuardGuard } from '../rol-guard.guard';
import { AdduserComponent } from './adduser/adduser.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { ListComponent } from './list/list.component';
import { UpdateUserComponent } from './update-user/update-user.component';



const routes: Routes = [
    {
      path: '',
      children: [
        { path: 'addUser', canActivate:[RolGuardGuard],component: AdduserComponent },
        { path: 'deleteUser/:id', canActivate:[RolGuardGuard], component: DeleteUserComponent  },
        { path: 'list',  canActivate:[RolGuardGuard],component: ListComponent },
        { path: 'updateUser/:id', component: UpdateUserComponent },
        { path: '**', redirectTo: 'user' }
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })

  export class UsersRoutingModule { }