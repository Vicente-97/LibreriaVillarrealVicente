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

 
  
  getBooks():Observable<Books[]>{
    return this.http.get<Books[]>(environment.apiUrl+'/books')
  }

  getBooksByCat(nameCat:string):Observable<Books[]>{
    return this.http.get<Books[]>(environment.apiUrl+'/booksByCat/'+nameCat)
  }

  addBook(json:any, fotoperfil:File):Observable<any>{

    const datos: FormData = new FormData();
    datos.append('book', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    datos.append('file', fotoperfil, fotoperfil.name);

    return this.http.post<any>(`${environment.apiUrl}/books`,datos)
  }


  getBook(id:string):Observable<Books>{
    return this.http.get<any>(`${environment.apiUrl}/books/${id}`)
  }

  updateBook(id:string,json:any, fotoperfil:File):Observable<any>{
    const datos: FormData = new FormData();
    datos.append('book', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    datos.append('file', fotoperfil, fotoperfil.name);

    return this.http.put<any>(`${environment.apiUrl}/books/${id}`,datos)
  }

}
