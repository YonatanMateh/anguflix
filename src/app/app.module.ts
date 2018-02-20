import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { MyCollectionComponent } from './my-collection/my-collection.component';
import { MyHeaderComponent } from './my-header/my-header.component';
import { AllMoviesComponent } from './all-movies/all-movies.component';
import { MovieComponent } from './movie/movie.component';
import { MovieService } from './movie.service';
import { FilterComponent } from './filter/filter.component';
import { MyMoviesRowComponent } from './my-movies-row/my-movies-row.component';
import { MoviesListComponent } from './movies-list/movies-list.component';
import { BudgetComponent } from './budget/budget.component';
import { FilterPipe } from './filter.pipe'

@NgModule({
  declarations: [
    AppComponent,
    MyCollectionComponent,
    MyHeaderComponent,
    AllMoviesComponent,
    MovieComponent,
    FilterComponent,
    MyMoviesRowComponent,
    MoviesListComponent,
    BudgetComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [MovieService],
  bootstrap: [AppComponent]
})
export class AppModule { }
