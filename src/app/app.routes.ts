import { Routes } from '@angular/router';
import { RegisterComponent } from './pages/not-logged/register/register.component';
import { HomeComponent } from './pages/logged/home/home.component';
import { LoginComponent } from './pages/not-logged/login/login.component';
import { RegisterMovieComponent } from './pages/logged/register-movie/register-movie.component';
import { AuthGuardSimple } from './guards/auth.guard.simple';
import { NoAuthGuard } from './guards/no-auth.guard';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent,
        canActivate: [AuthGuardSimple]
    },
    {
        path: 'register-movie',
        component: RegisterMovieComponent,
        canActivate: [AuthGuardSimple]
    },
    {
        path: 'login',
        component: LoginComponent,
        canActivate: [NoAuthGuard]
    },
    {
        path: 'register',
        component: RegisterComponent,
        canActivate: [NoAuthGuard]
    }
];
