import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-title',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './title.component.html',
  styleUrls: ['./title.component.css']
})
export class TitleComponent {

}
