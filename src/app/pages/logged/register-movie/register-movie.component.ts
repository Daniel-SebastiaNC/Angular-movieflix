import { Component } from '@angular/core';
import { MovieCreateComponent } from '../../../components/logged/movie-create/movie-create.component';
import { HeaderComponent } from '../../../components/logged/header/header.component';

@Component({
  selector: 'app-register-movie',
  imports: [HeaderComponent , MovieCreateComponent],
  templateUrl: './register-movie.component.html',
  styleUrl: './register-movie.component.css'
})
export class RegisterMovieComponent {

}
