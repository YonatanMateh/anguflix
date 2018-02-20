import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  currentMovie: Movie;
  @Input() isMyMovies: boolean;

  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.currentMovie = this.movie;
  }

  movieChosen(i) {
    if(!this.isMyMovies) {
    this.movieService.videoChosen(this.currentMovie);
    }
  }

  removeMovie(movie: Movie) {
    this.movieService.removeMovieFromMyMovies(movie);
  }
}
