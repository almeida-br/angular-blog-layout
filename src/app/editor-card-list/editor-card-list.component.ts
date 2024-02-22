import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CardComponent } from '../card/card.component';

@Component({
  selector: 'app-editor-card-list',
  standalone: true,
  imports: [CardComponent,CommonModule,FormsModule],
  templateUrl: './editor-card-list.component.html',
  styleUrl: './editor-card-list.component.css'
})
export class EditorCardListComponent {
  cardList:number[]=[1,2,3];
}
