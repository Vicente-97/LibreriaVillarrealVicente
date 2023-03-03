import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { RolGuardGuard } from '../rol-guard.guard';
import { ShoppingCartComponent } from './shopping-cart.component';



const routes: Routes = [
    {
      path: '',
      children: [
      
        { path: 'list', component: ShoppingCartComponent }
       
      ]
    }
  ];
  
  @NgModule({
    imports: [
      RouterModule.forChild(routes)
    ]
  })

  export class ShoppingRoutingModule { }