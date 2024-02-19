import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AuthService } from '../auth.service';
import { Route, Router } from '@angular/router';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ FormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit {

  username= ''
  password =''
  error =''

  constructor(private auth : AuthService,private router : Router){}

  ngOnInit(): void {

  }
  login(){
      if(this.username.trim().length ===0){
        this.error = 'Username is required!'
      }
      else if(this.password.trim().length ===0){
        this.password = 'Password is required!'
      }
      else{
        this.error = '';

        let res = this.auth.login(this.username, this.password);
        if(res === 200){
          this.router.navigate(['home'])
        }
        if(res === 403){
          this.error = 'Invalid credentials!'
        }
      }
  }
}
