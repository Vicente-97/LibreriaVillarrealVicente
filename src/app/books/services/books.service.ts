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


}
