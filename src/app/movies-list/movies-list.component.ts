import { Component, OnInit } from '@angular/core';
import {MovieService} from '../movie.service';
import { Movie } from '../movie';

@Component({
  selector: 'app-movies-list',
  templateUrl: './movies-list.component.html',
  styleUrls: ['./movies-list.component.css']
})
export class MoviesListComponent implements OnInit {
movies: Movie[];
  constructor(private movieService: MovieService) {
   }

  ngOnInit() {
    this.movies = this.movieService.getMovies();
  }

  get searchText() {
    return this.movieService.moviesSearchText;
  }
  
}
