import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Books } from '../interfaces/bookInterface';
import { CarritoItem } from '../interfaces/carritoInterface';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {


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

  constructor( private shopping : ShoppingCartService) { }

 books = this.shopping.getItems();

  total= this.shopping.getTotal();


  updateTotalPrice(): void {
    this.total = this.shopping.getTotal();
  }
  clearCart() {
    this.shopping.clearCart();
    this.books = [];
    this.total = 0;
  }

  removeItem(book: Books) {
    this.shopping.eliminarDelCarrito(book);
    this.books = this.shopping.getItems();
    this.shopping.saveCartToSession()
    this.total=this.shopping.getTotal();

    }


    updateItem(item: CarritoItem, cantidad: number) {
      this.shopping.actualizarCantidad(item, cantidad);
      this.shopping.getTotal()
      this.updateTotalPrice()
      this.shopping.saveCartToSession()
      
    }


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

              }
            }
          })
        }
        cantidad=0
      }
      
    }
}
