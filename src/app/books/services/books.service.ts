import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Books } from 'src/app/interfaces/bookInterface';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  constructor(private http: HttpClient) { }

 
  //Obtenemos los libros.
  getBooks():Observable<Books[]>{
    return this.http.get<Books[]>(environment.apiUrl+'/books')
  }

  //Obtenemos los libros de una categoria en concreto.
  getBooksByCat(nameCat:string):Observable<Books[]>{
    return this.http.get<Books[]>(environment.apiUrl+'/booksByCat/'+nameCat)
  }

  //Método para añadir un libro, necesita un json de libro y una foto.
  addBook(json:any, fotoperfil:File):Observable<any>{

    const datos: FormData = new FormData();
    datos.append('book', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    datos.append('file', fotoperfil, fotoperfil.name);

    return this.http.post<any>(`${environment.apiUrl}/books`,datos)
  }


  //Método para obtener un libro concreto por su id o name.
  getBook(id:string):Observable<any>{
    return this.http.get<any>(`${environment.apiUrl}/books/${id}`)
  }

  // Método para poder updatear un libro, recibe un id para localizar ese libro
  //un json de los campos nuevos a modificar y una foto.
  updateBook(id:string,json:any, fotoperfil:File):Observable<any>{
    const datos: FormData = new FormData();
    datos.append('book', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    datos.append('file', fotoperfil, fotoperfil.name);

    return this.http.put<any>(`${environment.apiUrl}/books/${id}`,datos)
  }

  //Método para poder borrar un libro, recibe un id o name del libro mediante el cual lo busca y lo borra.
  deletBook(id:string):Observable<any>{
    return this.http.delete<any>(`${environment.apiUrl}/books/${id}`)
  }

}
