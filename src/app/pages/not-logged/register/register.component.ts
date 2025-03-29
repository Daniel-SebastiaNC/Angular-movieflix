import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/not-logged/header/header.component';
import { SignUpComponent } from '../../../components/not-logged/sign-up/sign-up.component';

@Component({
  selector: 'app-register',
  imports: [
    HeaderComponent,
    SignUpComponent
  ],
  templateUrl: './register.component.html',
  styleUrl: './register.component.css'
})
export class RegisterComponent {

}
