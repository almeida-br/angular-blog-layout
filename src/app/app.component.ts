import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { EditorCardListComponent } from './editor-card-list/editor-card-list.component';
import { CardComponent } from './card/card.component';
import { CardListComponent } from './card-list/card-list.component';
import { TitleComponent } from './title/title.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuBarComponent,
    EditorCardListComponent,
    CardListComponent,
    CardComponent,
    TitleComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./styles.css']
})
export class AppComponent {
  title = 'blog-proj';
}
