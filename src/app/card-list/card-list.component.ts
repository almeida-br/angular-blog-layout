import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-card-list',
  standalone: true,
  imports: [CardComponent,CommonModule],
  templateUrl: './card-list.component.html',
  styleUrls: ['./card-list.component.css','../styles.css']
})
export class CardListComponent {
  cardList:number[]=[1,2,3];
}
