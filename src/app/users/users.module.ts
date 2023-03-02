import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdduserComponent } from './adduser/adduser.component';
import { ListComponent } from './list/list.component';
import { DeleteUserComponent } from './delete-user/delete-user.component';
import { UpdateUserComponent } from './update-user/update-user.component';
import { UsersRoutingModule } from './users-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { TableModule } from 'primeng/table';
import { ButtonModule } from 'primeng/button';
import { PaginatorModule } from 'primeng/paginator';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [
    AdduserComponent,
    ListComponent,
    DeleteUserComponent,
    UpdateUserComponent
  ],
  imports: [
    CommonModule,
    UsersRoutingModule,
    SharedModule,
    ReactiveFormsModule,
    TableModule,
    ButtonModule,
    PaginatorModule,
    RouterModule,
    FormsModule
  ]
})
export class UsersModule { }
