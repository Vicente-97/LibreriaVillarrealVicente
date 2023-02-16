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

  jwt = localStorage.getItem("jwt");

  
  getBooks():Observable<Books[]>{
    
    // const headers = new HttpHeaders()
    //     .set('Authorization', `Bearer ${localStorage.getItem('jwt')}`  || '' );

    // {headers}
    return this.http.get<Books[]>(environment.apiUrl+'/books')
  }


}
