import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { CardComponent } from '../../card/card.component';
import { MainCardComponent } from '../../main-card/main-card.component';
import { MenuBarComponent } from '../../menu-bar/menu-bar.component';
import { TitleComponent } from '../../title/title.component';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet,
    MenuBarComponent,
    MainCardComponent,
    CardComponent,
    TitleComponent,
    CommonModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.css'
})
export class HomeComponent {

}
