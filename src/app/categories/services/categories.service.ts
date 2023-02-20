import { Injectable } from '@angular/core';
import { Observable, switchMap, catchError } from 'rxjs';
import { Categories } from '../../interfaces/categoriesInterface';
import { HttpClient } from '@angular/common/http';
import { environment } from '../../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }


  getCategories():Observable<Categories[]>{
        return this.http.get<Categories[]>(environment.apiUrl+'/category')
      }

  addCategory(name:string, description:string ):Observable<Categories>{
    const headers = { 'content-type': 'application/json'}   
    return this.http.post<Categories>(environment.apiUrl+'/category',{'name':name, 'description': description},{'headers':headers})
  }


  updateCategory( name:string, description:string):Observable<Categories>{
    const headers = { 'content-type': 'application/json'}
    return this.http.put<Categories>(environment.apiUrl+'/category/'+ name,{'name':name, 'description': description},{'headers':headers})
  }

  deleteCategory(name:string):Observable<Categories>{
    return this.http.delete<Categories>(environment.apiUrl+'/category/'+ name)
  }

  getCategoryId(name:string){
    return this.http.get<Categories>(environment.apiUrl+'/category/'+name)
  }
}
