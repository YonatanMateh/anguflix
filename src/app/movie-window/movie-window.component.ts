import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MovieService } from '../movie.service';
import { Movie } from '../movie';
import { error } from 'util';

@Component({
  selector: 'movie-window',
  templateUrl: './movie-window.component.html',
  styleUrls: ['./movie-window.component.css']
})
export class MovieWindowComponent implements OnInit {
  movie: Movie;
  constructor(private route: ActivatedRoute, private movieService: MovieService) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.movieService.getMovieById(params.id)
      .subscribe(
        data => this.movie = data,
        error => {console.log(error);}
      )
    })
  }

  addMovie() {
    console.log(this.movie);
  }

}
