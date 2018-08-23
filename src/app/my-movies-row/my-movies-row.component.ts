import { Component, OnInit, Input, OnChanges, SimpleChanges } from '@angular/core';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { UserService } from '../user.service';

@Component({
  selector: 'app-my-movies-row',
  templateUrl: './my-movies-row.component.html',
  styleUrls: ['./my-movies-row.component.css']
})
export class MyMoviesRowComponent implements OnInit {
  myMovies: Movie[];
  moviesToPresent: any[];
  editMode: boolean;
  constructor(private movieService: MovieService, private userService: UserService) { }

  ngOnInit() {
    this.myMovies = this.userService.getMyMovies();
    this.editMode = this.movieService.getEditMode()
      .subscribe((mode) => {
        this.setEditMode(mode);
      })
  }

  setEditMode(newMode: boolean) {
    this.editMode = newMode;
  }

  get message() {
    return this.userService.message;
  }

  get lowBudget() {
    return this.userService.lowBudget;
  }

  get searchText() {
    return this.movieService.myMoviesSearchText;
  }

  get year() {
    return this.movieService.yearFilter;
  }

}
