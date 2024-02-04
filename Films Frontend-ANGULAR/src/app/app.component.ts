import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { AddComponent } from './components/add/add.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { FilmComponent } from './components/film/film.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet, AddComponent, HomePageComponent, FilmComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'AngularDevoir1';



}
