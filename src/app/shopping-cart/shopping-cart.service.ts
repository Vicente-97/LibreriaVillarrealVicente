import { Injectable } from '@angular/core';
import { Books } from '../interfaces/bookInterface';
import { CarritoItem } from '../interfaces/carritoInterface';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  books : CarritoItem[]=[]

  constructor() { 

    this.loadCartFromSession();
  }

  // addToCart(book: Books) {
  //   this.books.push(book);
  //   this.saveCartToSession();
  // }

  agregarAlCarrito(book: Books) {
    let itemExistente = this.books.find(item => item.book?.isbn === book.isbn);
  
    if (itemExistente) {
      itemExistente.cantidad++;
    } else {
      this.books.push({ book, cantidad: 1 });
    }
  }


  getItems() {
    return this.books;
  }


  clearCart() {
    this.books = [];
    this.saveCartToSession()
    return this.books;
  }

  getTotal() {   
      return this.books.reduce((total, item) => total + (item.book.price * item.cantidad), 0);
    
  }

   loadCartFromSession() {
    const carrito = window.sessionStorage.getItem('carrito');
    if (carrito) {
      this.books = JSON.parse(carrito);
    }
  }

   saveCartToSession() {
    window.sessionStorage.setItem('carrito', JSON.stringify(this.books));
  }

  eliminarDelCarrito(book: any) {
    let itemIndex = this.books.findIndex(item => item.book === book);
  
    if (itemIndex !== -1) {
      this.books.splice(itemIndex, 1);
    }
  }

  actualizarCantidad(item: CarritoItem, nuevaCantidad?: number) {
    if (nuevaCantidad) {
      item.cantidad = nuevaCantidad;
    }
  
  }
}
