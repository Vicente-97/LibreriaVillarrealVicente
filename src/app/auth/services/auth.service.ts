import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { RespuestaAuth } from '../../interfaces/jwtInterface';

@Injectable({
  providedIn: 'root'
})
export class AuthService {


  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url:string = 'http://localhost:8080/signin'
 
 

  constructor(private http: HttpClient) { }

  
  //Método para hacer login
  login(username: string, password: string): Observable<boolean> {
    console.log(username)
        console.log(password)
    return this.http.post<RespuestaAuth>(this.url, {username, password }, this.httpOptions)
    .pipe(switchMap(resp => {
      console.log(resp)
      localStorage.setItem("authenticated", "true")
      localStorage.setItem("jwt", resp.token)
     
        return of(true);
      }), catchError(error => {
        localStorage.removeItem("jwt");
        //localStorage.setItem("authenticated", "false");

        
        return of(false)
      })
      )
      
      
      
    }
    
    //Método para hacer logout
    logout() {
      localStorage.setItem("authenticated", "false")
      localStorage.removeItem('jwt');
      //this.authenticated = false;
    }
    
    //Método para comprobar si esta autenticado
    isAuthenticated() {
      return localStorage.getItem('authenticated') === 'true'
    }
  }

  
  