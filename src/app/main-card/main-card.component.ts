import { CommonModule } from '@angular/common';
import { Component, Input } from '@angular/core';
import { RouterModule } from '@angular/router';

@Component({
  selector: 'app-main-card',
  standalone: true,
  imports: [CommonModule,RouterModule],
  templateUrl: './main-card.component.html',
  styleUrls: ['./main-card.component.css']
})
export class MainCardComponent {
  @Input() id:string="0"
  @Input() img:string=''
  @Input() title:string=''
  @Input() content:string=''
}
