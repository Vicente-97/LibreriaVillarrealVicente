import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';

@Component({
  selector: 'app-verify',
  templateUrl: './verify.component.html',
  styles: [
  ]
})
export class VerifyComponent {

  constructor(private route: ActivatedRoute, private servicio :  AuthService, private router: Router) {}

  

  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      const code: any = params['code'] || null;
      const username: any = params['username'] || null
  
    console.log(code)
    console.log(username)


    this.servicio.verify(username, code).subscribe({
      next:(resp)=> {
        if(resp){
          console.log('correcto')
          this.router.navigate(['/'])
        }
      },error:(err)=> {
        console.log("error");
        
      },
    })
  })}





}
