import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
//import { AuthService } from 'src/app/service/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
  //providers: [AuthService]
})
export class NavbarComponent {
  //public user$: Observable<any> = this.authSvc.afAuth.user;

  //constructor(public authSvc: AuthService, private router : Router) { }
  constructor(private router : Router) { }
  async ngOnInit() {
  }

  /*async onLogout(){
    
    try {
      await this.authSvc.logout();
      this.router.navigate(['/login']);
    } catch (error) {
      console.log(error);
    }
  }*/
  
}
