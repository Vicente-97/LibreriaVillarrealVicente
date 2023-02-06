import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { FooterComponent } from './footer/footer.component';



@NgModule({
  declarations: [
    NavbarComponent,
    NotFoundComponent,
    FooterComponent
  ],
  imports: [
    CommonModule,
  ],
  exports:[NavbarComponent]
})
export class SharedModule { }
