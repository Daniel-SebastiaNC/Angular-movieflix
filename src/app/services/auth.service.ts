import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { User, UserResponse } from '../models/user';
import { environment } from '../../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class AuthService {
    private apiUrl = environment.apiUrl;

    constructor(private http: HttpClient) { }

    login(user: User): Observable<UserResponse> {
        return this.http.post<UserResponse>(`${this.apiUrl}/auth/login`, user);
    }

    validateToken(): Observable<any> {
        const token = localStorage.getItem('token');
        const headers = new HttpHeaders().set('Authorization', `Bearer ${token}`);
        return this.http.head(`${this.apiUrl}/auth/validate`, { headers });
    }

    isAuthenticated(): boolean {
        return !!localStorage.getItem('token');
    }

    getToken(): string | null {
        return localStorage.getItem('token');
    }

    logout(): void {
        localStorage.removeItem('token');
    }

    saveToken(token: string): boolean {
        try {
            localStorage.setItem('token', token);
            const savedToken = localStorage.getItem('token');
            return savedToken === token;
        } catch (error) {
            return false;
        }
    }
}
