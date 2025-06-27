import { Component } from '@angular/core';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { AuthService } from '../../../services/auth.service';
import { User } from '../../../models/user';
import { Router } from '@angular/router';

@Component({
    selector: 'app-sign-in',
    standalone: true,
    imports: [RouterModule, FormsModule, CommonModule],
    templateUrl: './sign-in.component.html',
    styleUrl: './sign-in.component.css'
})
export class SignInComponent {
    user: User = {
        email: '',
        password: ''
    };

    errorMessage: string = '';
    isLoading: boolean = false;

    constructor(
        private authService: AuthService,
        private router: Router
    ) { }

    onSubmit() {
        if (!this.user.email || !this.user.password) {
            this.errorMessage = 'Email e senha são obrigatórios';
            return;
        }

        this.isLoading = true;
        this.errorMessage = '';

        this.authService.login(this.user).subscribe({
            next: (response) => {
                if (response && response.token) {
                    const tokenSaved = this.authService.saveToken(response.token);
                    if (tokenSaved) {
                        this.router.navigate(['/']);
                    } else {
                        this.errorMessage = 'Erro: Não foi possível salvar o token';
                    }
                } else {
                    this.errorMessage = 'Erro: Token não recebido do servidor';
                }
                this.isLoading = false;
            },
            error: (error) => {
                this.isLoading = false;
                if (error.error) {
                    this.errorMessage = error.error;
                } else if (error.message) {
                    this.errorMessage = error.message;
                } else {
                    this.errorMessage = 'Erro desconhecido durante o login';
                }
            }
        });
    }
}
