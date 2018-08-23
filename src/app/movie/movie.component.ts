import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Movie } from '../movie';
import { MovieService } from '../movie.service';
import { UserService } from '../user.service';
@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.css']
})
export class MovieComponent implements OnInit {
  @Input() movie;
  currentMovie: Movie;
  @Input() isMyMovies: boolean;

  constructor(private movieService: MovieService, private userService: UserService) { }

  ngOnInit() {
    this.currentMovie = this.movie;
  }

  movieChosen(i) {
    if(!this.isMyMovies) {
    this.userService.videoChosen(this.currentMovie);
    }
  }

  removeMovie(movie: Movie) {
    this.userService.removeMovieFromMyMovies(movie);
  }
}
