import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {HttpClientModule} from '@angular/common/http';

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
import { UserService } from './user.service';
import { MovieWindowComponent } from './movie-window/movie-window.component';
import { RoutingModule } from './routing/routing.module';
import { ContainerComponent } from './container/container.component';

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
    FilterPipe,
    MovieWindowComponent,
    ContainerComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    NgbModule.forRoot(),
    HttpClientModule,
    RoutingModule
  ],
  providers: [
    MovieService,
    UserService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
