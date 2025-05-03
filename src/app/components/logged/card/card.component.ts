import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input() title:string = '';
  @Input() description: string = '';
  @Input() releaseDate: string = '';
  @Input() rating: number = 0;
  @Input() categories: string[] = [];
  @Input() streamings: string[] = []
}
