import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-my-movies-row',
  templateUrl: './my-movies-row.component.html',
  styleUrls: ['./my-movies-row.component.css']
})
export class MyMoviesRowComponent implements OnInit {
  myMovies: Movie[];
  moviesToPresent: any[];
  editMode: boolean;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.myMovies = this.movieService.getMyMovies();
    this.editMode = this.movieService.getEditMode()
      .subscribe((mode) => {
        this.setEditMode(mode);
      })
  }

  setEditMode(newMode: boolean) {
    this.editMode = newMode;
  }

  get message() {
    return this.movieService.message;
  }

  get lowBudget() {
    return this.movieService.lowBudget;
  }

  get searchText() {
    return this.movieService.myMoviesSearchText;
  }

  get year() {
    return this.movieService.yearFilter;
  }

}
