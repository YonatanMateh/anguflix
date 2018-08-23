import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { MovieWindowComponent } from '../movie-window/movie-window.component';
import { AppComponent } from '../app.component';
import { ContainerComponent } from '../container/container.component'
const routes: Routes = [
  { path: '', component: ContainerComponent},
  { path: 'movieWindow/:id', component: MovieWindowComponent}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
