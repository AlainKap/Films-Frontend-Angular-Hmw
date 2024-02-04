import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';
import { Film } from '../../interfaces/film.interface';
import { FilmService } from '../../services/film.service';

@Component({
  selector: 'app-add',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './add.component.html',
  styleUrl: './add.component.css',
})
export class AddComponent {
  showAddForm = false;

  @Input() showAddButton: boolean = false;
  @Input() showEditButton: boolean = false;

  errorOccurred: boolean = false;

  @Input() films: Film[] = [];

  @Output() createEmitter = new EventEmitter();
  @Output() editEmitter = new EventEmitter();

  @Input() selectedFilm: Film = {
    id: 0,
    nom: '',
    annee: 0,
    realisateur: '',
    synopsis: '',
    createdAt: '',
    updatedAt: new Date(),
  };

  ngOnInit() {
    this.selectedFilm = this.clone(this.selectedFilm);
    //this.selectedFilm = (this.selectedFilm);

    if (this.showAddButton) {
      this.toggleAddButton();
    } else if (this.showEditButton) {
      this.toggleEditButton();
    }
  }

  //constructor(private filmService: FilmService) {}

  // add(filmForm: NgForm) {
  //   if (filmForm.invalid) {
  //     this.errorOccurred = true;
  //     return;
  //   }
  //   this.filmService.addFilm(this.selectedFilm).subscribe((createdFilm) => {
  //     this.createEmitter.emit(createdFilm);
  //     this.closeAddForm();
  //   });
  // }

  // edit(filmForm: NgForm) {
  //   if (filmForm.invalid) {
  //     this.errorOccurred = true;
  //     return;
  //   }
  //   this.filmService.updateFilm(this.selectedFilm).subscribe((updatedFilm) => {
  //     this.editEmitter.emit(updatedFilm);
  //     this.closeAddForm();
  //   });
  // }


  add(filmForm: NgForm) {
    if (filmForm.invalid) {
      this.errorOccurred = true;
      return;
    }
    this.createEmitter.emit(this.selectedFilm);
    this.closeAddForm();
  }

  edit(filmForm: NgForm) {
    if (filmForm.invalid) {
      this.errorOccurred = true;
      return;
    }
    const toSend = this.clone(this.selectedFilm);
    this.editEmitter.emit(toSend);
    this.closeAddForm();
  }

  private clone(value: any) {
    return JSON.parse(JSON.stringify(value));
  }

  public toggleAddButton() {
    this.showAddButton = true;
    this.showEditButton = false;
  }
  public toggleEditButton() {
    this.showAddButton = false;
    this.showEditButton = true;
  }

  private closeAddForm() {
    this.showAddForm = false;
  }
}
