import { Component } from '@angular/core';
import { HeaderComponent } from '../../../components/logged/header/header.component';
import { CardComponent } from '../../../components/logged/card/card.component';
import { NgFor } from '@angular/common';
import { Movie } from '../../../interfaces/Movie';

@Component({
  selector: 'app-home',
  imports: [
    HeaderComponent,
    CardComponent,
    NgFor
  ],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {
  movies: Movie[] = [
    {
      id: 1,
      title: "Coringa 2",
      description: "Continuação da história de Arthur Fleck, explorando sua transformação completa no vilão Coringa.",
      releaseDate: "24/09/2024",
      rating: 4.5,
      categories: ['Ação', 'Aventura', 'Ficção Científica'],
      streamings: ['Netflix', 'Prime Video']
    },
    {
      id: 2,
      title: "Duna: Parte 2",
      description: "Paul Atreides une-se a Chani e aos Fremen para liderar a revolução contra aqueles que destruíram sua família.",
      releaseDate: "01/03/2024",
      rating: 4.8,
      categories: ['Ficção Científica', 'Aventura', 'Drama'],
      streamings: ['HBO Max', 'Prime Video']
    },
    {
      id: 3,
      title: "Deadpool 3",
      description: "Wade Wilson retorna em mais uma aventura repleta de ação e humor irreverente.",
      releaseDate: "26/07/2024",
      rating: 4.2,
      categories: ['Ação', 'Comédia', 'Aventura'],
      streamings: ['Disney+', 'Star+']
    }
  ];
}
