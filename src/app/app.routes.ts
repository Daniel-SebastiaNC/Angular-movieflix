import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/not-logged/register/register.component';
import { HomeComponent } from './pages/logged/home/home.component';
import { LoginComponent } from './pages/not-logged/login/login.component';
import { RegisterMovieComponent } from './pages/logged/register-movie/register-movie.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'register-movie',
        component: RegisterMovieComponent
    },
    {
        path: 'login',
        component: LoginComponent
    },
    {
        path: 'register',
        component: RegisterComponent
    }
];
