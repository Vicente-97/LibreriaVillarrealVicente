import { Component } from '@angular/core';
import { ShoppingCartService } from './shopping-cart.service';
import { Books } from '../interfaces/bookInterface';
import { CarritoItem } from '../interfaces/carritoInterface';

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})
export class ShoppingCartComponent {




  constructor( private shopping : ShoppingCartService) { }

 books = this.shopping.getItems();

  total= this.shopping.getTotal();


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
      this.shopping.saveCartToSession()
    }

}
