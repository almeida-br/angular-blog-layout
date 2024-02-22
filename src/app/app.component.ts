import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MenuBarComponent } from './menu-bar/menu-bar.component';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    RouterOutlet,
    MenuBarComponent,
    CommonModule],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css','./styles.css']
})
export class AppComponent {
  title = 'blog-proj';
}
