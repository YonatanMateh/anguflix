import { Injectable } from '@angular/core';
import { Movie } from './movie';
const BUDGET: number = 9;

@Injectable()

export class UserService {
  myMovies: Movie[] = [];
  budget: number = BUDGET;
  message: string;
  lowBudget: boolean;

  constructor() { 
    this.setMessage('Select movies from below to add to your collection');
  }
  getBudget() {
    return this.budget;
  }

  getMyMovies() {
    return this.myMovies;
  }
  videoChosen(movie: Movie) {
    this.lowBudget = false;
    if (!this.containObject(movie)) {
      if (this.budget - movie.price > 0) {
        this.budget -= movie.price;
        this.myMovies.push(movie);
      } else {
        this.lowBudget = true;
        this.setMessage("You're out of money =[ Can't buy any more movies. Refresh the page to get your $9 back.");
      }
    }
  }

  setMessage(text: string) {
    this.message = text;
  }

  private containObject(movie: Movie) {
    let temp = this.myMovies.find(({ _id }) => {
      return _id == movie._id;
    });
    return temp ? true : false;
  }

  removeMovieFromMyMovies(movie) {
    let index = this.myMovies.findIndex(item => item._id == movie._id);
    this.myMovies.splice(index, 1);
  }
}
