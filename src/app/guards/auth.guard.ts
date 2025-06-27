import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Observable, of } from 'rxjs';
import { catchError, map } from 'rxjs/operators';

@Injectable({
    providedIn: 'root'
})
export class AuthGuard implements CanActivate {

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    canActivate(): Observable<boolean> {
        // Verifica se existe token no localStorage
        if (!this.authService.isAuthenticated()) {
            this.router.navigate(['/login']);
            return of(false);
        }

        // Opção 1: Validação simples (apenas verifica se existe token)
        // Descomente a linha abaixo se quiser usar apenas validação local
        // return of(true);

        // Opção 2: Validação completa no servidor
        return this.authService.validateToken().pipe(
            map(() => {
                return true; // Token válido
            }),
            catchError((error) => {
                console.error('Erro na validação do token:', error);

                // Se for erro de CORS ou qualquer outro erro, considera token inválido
                // Remove o token do localStorage e redireciona
                this.authService.logout();
                this.router.navigate(['/login']);
                return of(false);
            })
        );
    }
}
