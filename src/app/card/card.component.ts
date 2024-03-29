import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css','../styles.css']
})
export class CardComponent {
  @Input() id:string="0"
  @Input() img:string=''
  @Input() title:string=''
}
