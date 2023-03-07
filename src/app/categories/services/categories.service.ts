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


  //obtenemos las categorias
  getCategories():Observable<Categories[]>{
        return this.http.get<Categories[]>(environment.apiUrl+'/category')
      }

  //Método para poder añadir una categoria
  addCategory(name:string, description:string ):Observable<Categories>{
    const headers = { 'content-type': 'application/json'}   
    return this.http.post<Categories>(environment.apiUrl+'/category',{'name':name, 'description': description},{'headers':headers})
  }


  //Método para poder updatear una categoria
  updateCategory( name:string, description:string):Observable<Categories>{
    const headers = { 'content-type': 'application/json'}
    return this.http.put<Categories>(environment.apiUrl+'/category/'+ name,{'name':name, 'description': description},{'headers':headers})
  }

  //Método para poder borrar una categoria
  deleteCategory(name:string):Observable<Categories>{
    return this.http.delete<Categories>(environment.apiUrl+'/category/'+ name)
  }
//Método para obtener una categoria por su name o id.
  getCategoryId(name:string){
    return this.http.get<Categories>(environment.apiUrl+'/category/'+name)
  }
}
