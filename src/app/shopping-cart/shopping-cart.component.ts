import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Books } from '../interfaces/bookInterface';
import { CarritoItem } from '../interfaces/carritoInterface';
import Swal from 'sweetalert2';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {

//json para poder añaadir al carrito el libro.
  json :any={

    isbn:'',
    title:'',
    dateBook:'',
    author:'',
    price:'',
    stock:'',
    category:'',
    cantidad:0
  }

  constructor( private shopping : ShoppingCartService, private route: Router) { }
//variable para obtener los items del carrito
 books = this.shopping.getItems();
//variable para poder obtener el total del precio.
  total= this.shopping.getTotal();

//método para poder updatear el precio total.
  updateTotalPrice(): void {
    this.total = this.shopping.getTotal();
  }
  //Método para poder vaciar el carrito de compra.
  clearCart() {
    this.shopping.clearCart();
    this.books = this.shopping.getItems();
    this.shopping.saveCartToSession()
    this.total=this.shopping.getTotal();
    
  }
//Método de lógica que borra ese objeto de la lista de nuestro carrito guardado en sesion.
  removeItem(book: Books) {
    this.shopping.eliminarDelCarrito(book);
    this.books = this.shopping.getItems();
    this.shopping.saveCartToSession()
    this.total=this.shopping.getTotal();

    }

// Método para poder updatear la cantidad de un objeto al comprar, con el máximo de stock permitido.
    updateItem(item: CarritoItem, cantidad: number) {
      this.shopping.actualizarCantidad(item, cantidad);
      this.shopping.getTotal()
      this.updateTotalPrice()
      this.shopping.saveCartToSession()
      
    }

//Método para poder añadir la compra y guardarla, restará el stock y redirigirá a la lista de libros.
    addBuy(){
      for(let item of this.books){
        this.json.isbn=item.book.isbn
        this.json.title=item.book.title
        this.json.datebook=item.book.dateBook
        this.json.author=item.book.author
        this.json.price=item.book.price
        this.json.stock=item.book.stock
        this.json.category=item.book.category
        this.json.cantidad= item.cantidad
        let cantidad= item.cantidad
        let username= localStorage.getItem("username") 
        console.log(cantidad);
        console.log(username);
        console.log(this.json);
        
        
        
        if(username!=null){
          this.shopping.addBuy(this.json,cantidad, username).subscribe({
            next:(resp)=> {
              if(resp){
                Swal.fire({
                  icon: 'success',
                  title: 'Compra exitosa',
                  text: '¡Disfuta sus libros!',
              })
                this.shopping.clearCart()
                this.route.navigate(['/books/list'])
              }
            }
          })
        }
        cantidad=0
      }
      
    }
}
