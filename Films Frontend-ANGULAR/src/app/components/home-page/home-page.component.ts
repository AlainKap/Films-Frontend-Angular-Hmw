import { Component } from '@angular/core';
import { AddComponent } from '../add/add.component';
import { FilmComponent } from '../film/film.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  imports: [AddComponent, FilmComponent],
  templateUrl: './home-page.component.html',
  styleUrl: './home-page.component.css'
})
export class HomePageComponent {
  showAddForm = false;

  toggleFilmComponent() {
    this.showAddForm = !this.showAddForm;
  }

  // private closeAddForm() {
  //   this.showAddForm = false;
  // }
}
