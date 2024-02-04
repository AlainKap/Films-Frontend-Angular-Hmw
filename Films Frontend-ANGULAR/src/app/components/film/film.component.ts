import { Component, ViewChild, inject } from '@angular/core';
import { Film } from '../../interfaces/film.interface';
import { AddComponent } from '../add/add.component';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-film',
  standalone: true,
  imports: [AddComponent, FormsModule, CommonModule],
  templateUrl: './film.component.html',
  styleUrl: './film.component.css',
})
export class FilmComponent {
  showAddButton = false;
  showEditButton = false;
  showAddForm = false;
  selectedFilm!: Film;

  @ViewChild(AddComponent) addComponent!: AddComponent;

  service = inject(FilmService);

  films: Film[] = [];


  ngOnInit() {
    this.getMovies();
  }

  getMovies() {
    this.service.allFilms().subscribe({
      next: (result: any) => {
        this.films = result.data;
        console.log('Films récupérés avec succès :', this.films);
      },
      error: (error) => {
        console.error('Erreur lors de la récupération des films :', error);
      },
    });
  }

  addItem(item: Film) {
    this.service.addFilm(item).subscribe({
      next: (result: any) => {
        console.log('Film ajouté avec succès:', result);
        // Mettez à jour la liste côté client
        this.films.push(result.data);
        this.showAddButton = true;
        this.closeAddForm();
      },
      error: (error) => {
        console.error("Erreur lors de l'ajout du film:", error);
      },
    });
  }

  editItem(item: Film) {
    this.service.updateFilm(item).subscribe({
      next: (result: Film) => {
        // Mise à jour réussie, mettre à jour les données locales
        console.log('Film modifié avec succès:', result);

        const index = this.films.findIndex((f) => f.id === item.id);
        if (index !== -1) {
          this.films[index] = result;
          this.showEditButton = true;
          this.closeAddForm();
          // Ajouter la mise à jour en temps réel
          this.films.push(result);
          console.log('Liste mise à jour en temps réel :', this.films);
        }
      },
    });
  }

  removeItem(index: number, film: Film) {
    this.service.remove(film).subscribe({
      next: (response) => {
        console.log(response); // Affiche la réponse de l'API après la suppression
        this.films.splice(index, 1);
      },
      error: (error) => {
        console.error('Erreur lors de la suppression du film :', error);
      },
      complete: () => {
        console.log('Arrivé au bout');
      },
    });
  }

  selectFilm(item: Film) {
    this.selectedFilm = item;
    this.showEditButton = true;
  }

  closeAddForm() {
    this.showAddForm = false;
    this.showEditButton = false;
  }
}
