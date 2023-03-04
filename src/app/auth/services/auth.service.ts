import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { catchError, Observable, of, switchMap } from 'rxjs';
import { RespuestaAuth } from '../../interfaces/jwtInterface';
import { userRegister, userCompleto } from '../../interfaces/userCompleto';
import { environment } from 'src/environments/environment';
import Swal from 'sweetalert2';
import jwt_decode from 'jwt-decode';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  
  httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
  };

  url:string = 'https://libreriavillarrealvicentebackend-production.up.railway.app/signin'
 usuarioActual!:userCompleto
 

  constructor(private http: HttpClient) { }

  
  //Método para hacer login
  login(username: string, password: string): Observable<boolean> {
    
    return this.http.post<RespuestaAuth>(this.url, {username, password }, this.httpOptions)
    .pipe(switchMap(resp => {
      localStorage.setItem("authenticated", "true")
      localStorage.setItem("jwt", resp.token)

      const decodedToken :userCompleto = jwt_decode(resp.token);

      localStorage.setItem("role", decodedToken.role)
      localStorage.setItem("username", decodedToken.sub)
      
        return of(true);
      }), catchError(error => {
        localStorage.removeItem("jwt");
        //localStorage.setItem("authenticated", "false");

        
        return of(false)
      })
      )
      
      
      
    }
    
  //   getCurrentUser(username:string):Observable <userCompleto> {
  //      return this.http.get<userCompleto>(environment.apiUrl+'/user'+username)
  // }


    //Método para hacer logout
    logout() {
      localStorage.setItem("authenticated", "false")
      localStorage.removeItem('jwt');
      localStorage.removeItem('role');
      localStorage.removeItem('username');
      //this.authenticated = false;
    }
    
    //Método para comprobar si esta autenticado
    isAuthenticated() {
      return localStorage.getItem('authenticated') === 'true'
    }



    register(username:string,email:string,password:string):Observable<boolean>{
      console.log(username,password)
      
      return this.http.post<any>(environment.apiUrl+"/register",{'username':username,'email':email,'password':password}, this.httpOptions)
      .pipe(switchMap(resp=>{
        //  let indice = resp.indexOf(" ");
        // console.log(resp.token.substring(indice, resp.token.length))
  
        return of(true);
      
    }),catchError(error=>{
      Swal.fire({
        icon: 'error',
        title: 'Oops...',
        text: 'Algo debe haber salido mal!',
        footer: '<a href="">Why do I have this issue?</a>'
      })
      
      
      return of(false)
    }))
    }

    
    isUserAdmin(jwt: string): boolean {
      // Decodifica el token JWT
      const decodedToken :userCompleto = jwt_decode(jwt);
    
      // Verifica si el rol del usuario es 'administrador'
      if (decodedToken.role === 'ADMIN') {
        return true;
      } else {
        return false;
      }
    }


    verify(username:string, code:string):Observable<boolean>{
        return this.http.get<any>(environment.apiUrl+`/verify?code=${code}&username=${username}`)
        .pipe(switchMap(resp=>{
          //  let indice = resp.indexOf(" ");
          // console.log(resp.token.substring(indice, resp.token.length))
    
          return of(true);
        
      }),catchError(error=>{
        Swal.fire({
          icon: 'error',
          title: 'Oops...',
          text: 'Algo debe haber salido mal al verificar!',
          footer: '<a href="">Why do I have this issue?</a>'
        })
        
        
        return of(false)
      }))
    }
   
  }
  


  

  
  