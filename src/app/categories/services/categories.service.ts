import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Categories } from '../../interfaces/categoriesInterface';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getCategories():Observable<Categories[]>{
    
    //  const  httpOptions = {
    //     headers: new HttpHeaders({ 'Authorization': `Bearer ${this.jwt}` })
    //   };
    
        return this.http.get<Categories[]>('http://localhost:8080/category')
      }



}
