import { Component, OnInit } from '@angular/core';
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-budget',
  templateUrl: './budget.component.html',
  styleUrls: ['./budget.component.css']
})
export class BudgetComponent implements OnInit {
  constructor(private movieService: MovieService) { }

  ngOnInit() {
  }

  get budget() {
    return this.movieService.budget;
  }

}
