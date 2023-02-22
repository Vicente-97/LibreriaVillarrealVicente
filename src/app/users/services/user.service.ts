import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userCompleto } from '../../interfaces/userCompleto';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';



@Injectable({
  providedIn: 'root'
})
export class UserService {

  httpOptions = {
    headers: new HttpHeaders({
      'content-type': 'application/json',
      'Content-type': 'application/octet-stream'
    })
};
  constructor(private http : HttpClient) { }


  UpdateUser(name:string, email:string, password:string, fotoperfil:File, username:string):Observable<any>{
    
    const datos: FormData = new FormData();
    datos.append('email', email);
    datos.append('file', fotoperfil);
    datos.append('name', name);
    datos.append('password', password);
    return this.http.put<any>(environment.apiUrl+'/users/'+username,datos,this.httpOptions)
  }

}
