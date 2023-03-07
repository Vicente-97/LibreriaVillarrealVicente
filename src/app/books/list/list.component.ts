import { Component, OnInit } from '@angular/core';
import { Books } from '../../interfaces/bookInterface';
import { BooksService } from '../services/books.service';
import { ShoppingCartService } from '../../shopping-cart/shopping-cart.service';
import { trigger, state, style, animate, transition } from '@angular/animations';
import { AuthService } from '../../auth/services/auth.service';


@Component({
  selector: 'app-list ',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
  animations: [
    trigger('agregarProducto', [
      state('void', style({ transform: 'scale(0)' })),
      transition(':enter', [
        animate('0.2s ease-out', style({ transform: 'scale(1.2)' })),
        animate('0.2s', style({ transform: 'scale(1)' })),
      ]),
    ]),
  ],
})

export class ListComponent implements OnInit {

  //variables que nos ayudarán en nuestra lógica, tanto para saber si es admin,
  // como para localizar el token o los libros y libros de respaldo.
  isAdmin=false;
  jwt: string | null = null;
  public books :Books[]=[]
  public booksFullDatos:Books[]=[]
 
  //variable para poder realizar el filtrado.
  filtroNombre!: string;
 
  constructor(private bookServ : BooksService, private shopping : ShoppingCartService, private servicio: AuthService) { }

  

  //Método del carrito para poder añadir al carrito un libro.
  addToCart(book:Books){
    this.shopping.agregarAlCarrito(book)
    window.sessionStorage.setItem('carrito', JSON.stringify(this.shopping.books));
  }
  
  
  //Método que nos proporciona la lógica necesaria para poder filtrar por títutlo.
  filtrar() {
    if(this.filtroNombre.trim().length!=0){
      this.books = this.books.filter(dato => dato.title.toLowerCase().includes(this.filtroNombre.toLowerCase()));
    }else{
      this.books=this.booksFullDatos
    }
  }

  //Recuperamos el token y vemos si es Admin utilizando nuestro servicio.
  ngOnInit(): void {
   this.getBooks()
   this.jwt = localStorage.getItem('jwt');
   
   if(this.jwt){
     this.isAdmin = this.servicio.isUserAdmin(this.jwt);
   }


   

  }

  //Método para obtener una lista de libros de respaldo.
  getBooks(){
    this.bookServ.getBooks().subscribe({
      next: (resp)=> {this.books=resp
        this.booksFullDatos=resp
      }
    })

  }

   
    selected! :any[];

    onSelect({ selected }:any) {
      this.selected.splice(0, this.selected.length);
      this.selected.push(...selected);
    }

    onActivate(event:any) {
      console.log(event);
    }

     }

    



