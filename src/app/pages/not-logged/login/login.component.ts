import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/not-logged/header/header.component';
import { SignInComponent } from '../../../components/not-logged/sign-in/sign-in.component';

@Component({
  selector: 'app-login',
  imports: [
    HeaderComponent,
    SignInComponent
  ],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {
  
}