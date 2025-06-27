import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class NoAuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): Observable<boolean> {
        // Se não há token, permite acesso
        if (!this.authService.isAuthenticated()) {
            return of(true);
        }

        // Se há token, valida no servidor
        return this.authService.validateToken().pipe(
            map(() => {
                // Token válido, redireciona para home
                this.router.navigate(['/']);
                return false;
            }),
            catchError((error) => {
                console.error('Erro na validação do token:', error);
                // Token inválido ou erro de CORS, remove e permite acesso
                this.authService.logout();
                return of(true);
            })
        );
    }
}
