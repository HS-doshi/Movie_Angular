import { Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { MovieComponent } from './movie/movie.component';
import { HeaderComponent } from './header/header.component';
import { AuthGuard } from './auth.guard';

export const routes: Routes = [
  {path : '' , redirectTo : 'login' , pathMatch:'full'},
  {path : 'home' ,
  component : HomeComponent
  },
  {
    path : 'movie/:type/:id' ,
    component : MovieComponent
  },
  {
    path : 'header' ,
    component : HeaderComponent
  },
  {
    path : '**' ,
    component : LoginComponent
  },
];
