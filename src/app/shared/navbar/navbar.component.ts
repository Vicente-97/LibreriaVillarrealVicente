import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../auth/services/auth.service';
import { UserService } from '../../users/services/user.service';
import { user } from '../../interfaces/userCompleto';
import { CarritoItem } from '../../interfaces/carritoInterface';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  
})
export class NavbarComponent implements OnInit {

//variables que nos proporcionaran si el usuario esta logueado, si es admin, y el username entre otros.
  logueado!:boolean;
  jwt: string | null = null;
 
  userDetails!: string|null;
  isAdmin!: boolean;
  isLoggedIn!: boolean;
  user:user = {} as user
  username:string|null=localStorage.getItem("username")

  
  
  constructor(private servicio: AuthService, private servicioUser: UserService, private serviceShop:ShoppingCartService) { }

  //variable de creacion del carrito.
  carrito: CarritoItem[]=[]

  //recuperamos los items del carrito para que se actualize visualmente para el cliente.
  ngOnInit(): void {
    this.carrito= this.serviceShop.getItems()
    this.jwt = localStorage.getItem('jwt');
    this.userDetails=localStorage.getItem('username')
    if(this.username!=null){
      this.servicioUser.getUser(this.username).subscribe({
        next:(resp=>{
          this.user=resp
          this.logueado=true
        })
      })
    }
    


    if(this.jwt){
      this.isAdmin = this.servicio.isUserAdmin(this.jwt);
    }
  }

  //Método para ver si esta logueado.
  userLogueado(){
    if(localStorage.getItem("authenticated")==="true"){
      this.logueado=true;
    }
  }

//Método logOut
  logOut():void{
    this.servicio.logout();
    this.isLoggedIn=false;
    window.location.reload()
  }

}
