import { Injectable } from '@angular/core';
import { Books } from '../interfaces/bookInterface';
import { CarritoItem } from '../interfaces/carritoInterface';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShoppingCartService {

  books : CarritoItem[]=[]

  constructor(private http: HttpClient) { 

    this.loadCartFromSession();
  }

  // addToCart(book: Books) {
  //   this.books.push(book);
  //   this.saveCartToSession();
  // }

  agregarAlCarrito(book: Books) {
    let encontrado=false;
    
    let itemExistente = this.books.find(item => item.book?.isbn === book.isbn);
    for(let item of this.books){
      if(item.book.isbn==book.isbn){
        encontrado=true;
      }
    }
    if (itemExistente) {
      itemExistente.cantidad++;
    } else if(encontrado==false) {
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

  addBuy(json:any, cantidad:any, username:string):Observable<any>{
    const datos: FormData = new FormData();
    
    console.log(cantidad);
    console.log(username);
    console.log(json);
    



    const jsonIsbn = [{
      "isbn": json,
      "cantidad": cantidad, 
    }];
    
    console.log(jsonIsbn);
    
    
    
    datos.append('isbn', new Blob([JSON.stringify(jsonIsbn)], {type: 'application/json'}))
    datos.append('username', username);
    
    
    return this.http.post<any>(`${environment.apiUrl}`, datos)
  }

   
}
