import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { userCompleto, user } from '../../interfaces/userCompleto';
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

//Método para poder updatear un usuario. necesitamos un json con los datos a modificar, el username para poder localizar
//el usuario que vamos a updatear y la foto de perfil.
  UpdateUser(json:any, fotoperfil:File, username:string):Observable<any>{
    
    const datos: FormData = new FormData();
    datos.append('file', fotoperfil, fotoperfil.name);
    datos.append('user', new Blob([JSON.stringify(json)], {type: 'application/json'}))
    
    return this.http.put<any>(`${environment.apiUrl}/users/${username}`,datos)
  }

  //Método por el cual obtenemos un usuario en concreto, pasandole su id o username.
  getUser(id:string):Observable<user>{
    return this.http.get<any>(`${environment.apiUrl}/users/${id}`)
  }

  //Método por el cuál obtenemos los usuarios.
  getUsers():Observable<user[]>{
    return this.http.get<any[]>(`${environment.apiUrl}/users`)
  }

//Método para poder eliminar un usuario.
  deleteUser(username:string):Observable<user>{
    return this.http.delete<any>(`${environment.apiUrl}/users/${username}`)
  }

}
