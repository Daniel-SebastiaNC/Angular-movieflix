import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AuthGuardSimple implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): Observable<boolean> {
        // Verifica apenas se existe token no localStorage
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return of(false);
        }

        // Permite acesso se existe token (validação local apenas)
        return of(true);
    }
}
