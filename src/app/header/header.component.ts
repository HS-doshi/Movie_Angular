import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-header',
  standalone: true,
  imports: [HeaderComponent],
  templateUrl: './header.component.html',
  styleUrl: './header.component.css'
})
export class HeaderComponent  implements OnInit{

  constructor(private router : Router , private auth : AuthService){}

  ngOnInit(): void {

  }
  gotoHome(){
    this.router.navigate(['home'])
  }
  logout(){
    this.auth.logout();
  }
}
