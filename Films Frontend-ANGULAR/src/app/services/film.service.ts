import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Film } from '../interfaces/film.interface';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root',
})
export class FilmService {
  constructor(private http: HttpClient) {}


  // Méthode pour récupérer tous les films
  allFilms() {
    return this.http.get('http://localhost:4501/films');
  }

  // Méthode pour ajouter un film
  addFilm(film: Film): Observable<any> {
    return this.http.post(`http://localhost:4501/films`, { films: film });
  }

 //   return this.http.post<Film>('http://localhost:4501/films', film)
  //     .pipe(
  //       tap((createdFilm) => this.filmUpdatedSubject.next(createdFilm))
  //     );
  // }

  // Méthode pour mettre à jour un film
  updateFilm(film: Film): Observable<Film> {
    return this.http.put<Film>(`http://localhost:4501/films/${film.id}`, film);
  }

  // updateFilm(film: Film): Observable<Film> {
  //   return this.http.put<Film>(`http://localhost:4501/films/${film.id}`, film)
  //     .pipe(tap(updatedFilm => this.filmUpdatedSubject.next(updatedFilm)));
  // }

  // getFilmUpdatedObservable(): Observable<Film> {
  //   return this.filmUpdatedSubject.asObservable();
  // }


  // Méthode pour supprimer un film
  remove(film: Film): Observable<any> {
    return this.http.delete(`http://localhost:4501/films/${film.id}`);
  }
}
