import { Component, OnInit, Input } from '@angular/core';
import * as _ from "lodash";
import { MovieService } from '../movie.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  years: number[];
  @Input() isMyCollection;
  showFilter: boolean;
  isEditMode: boolean = false;
  filterText: string;
  year: number;
  constructor(private movieService: MovieService) { }

  ngOnInit() {
    this.years = _.range(1982, 2016);
    this.showFilter = this.isMyCollection;
    this.movieService.setEditMode(this.isEditMode);
  }

  deleteBtnClicked() {
    this.isEditMode = !this.isEditMode;
    this.movieService.setEditMode(this.isEditMode);
  }

  filterByTitle() {
    this.movieService.filterMovies(this.filterText, this.showFilter);
  }

  filterByYear() {
    this.movieService.filterByYear(this.year);
  }
}
