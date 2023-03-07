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

  
//Método para poder agregar un libro a nuestro carrito de compra, si pulsamos dos veces sobre el añadir, 
//este solo aumentará la cantidad que podemos ver dentro de nuestro carrito.
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

//Método para obtener los libros del carrito.
  getItems() {
    return this.books;
  }

//Método para limpiar el carrito.
  clearCart() {
  
    this.books = [];
    this.saveCartToSession()
    return this.books;
  }
//Método que utilizo para poder obtener el precio total y convertirlo a moneda.
  getTotal() {   
      return this.books.reduce((total, item) => total + (item.book.price * item.cantidad), 0);
    
  }

  //Método para cargar el carrito en sesion.
   loadCartFromSession() {
    const carrito = window.sessionStorage.getItem('carrito');
    if (carrito) {
      this.books = JSON.parse(carrito);
    }
  }

  //Método para poder guardar el carrito en la sesion.
   saveCartToSession() {
    window.sessionStorage.setItem('carrito', JSON.stringify(this.books));
  }

  eliminarDelCarrito(book: any) {
    let itemIndex = this.books.findIndex(item => item.book === book);
  
    if (itemIndex !== -1) {
      this.books.splice(itemIndex, 1);
    }
  }
//Método para poder actualizar la cantidad.
  actualizarCantidad(item: CarritoItem, nuevaCantidad?: number) {
    if (nuevaCantidad) {
      item.cantidad = nuevaCantidad;
    }
  
  }

  //metodo para poder realizar la peticion de compra.
  addBuy(json:any, cantidad:any, username:string):Observable<any>{

    //creamos un formdata para pasarle los datos que recibira nuestro controlador spring.
    const datos: FormData = new FormData();
    
    


    //creamos un array de json que recibira un isbn que será el libro en si y 
    //un parámetro cantidad que será la cantidad de compra de ese producto
    const jsonIsbn = [{
      "isbn": json,
      "cantidad": cantidad, 
    }];
    
    
    
    
    //le añadimos al form data los campos y decimos que vamos a añadirle un tipo Blob que será nuestro array de json, lo transformacion a json 
    //le añadimos la cabecera application json y tmb le añadimos otro parámetro que será el username para poder asignarle esa compra, ya que es una relacion M:N
    datos.append('isbn', new Blob([JSON.stringify(jsonIsbn)], {type: 'application/json'}))
    datos.append('username', username);
    
    //hacemos la peticion de tipo post, la enviroment, es la url del despliegue de la aplicación y le añadimos nuestro FormData.
    return this.http.post<any>(`${environment.apiUrl}/buy`, datos)
  }

   
}
