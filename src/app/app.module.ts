import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';
import { MoviesService } from '../app/services/movies.service';

import { AppComponent } from './app.component';
import { MoviesComponent } from '../app/components/movies/movies.component';
import { MovieComponent } from '../app/components/movie/movie.component';

import { routing } from '../app/app.routing'

@NgModule({
  declarations: [
    AppComponent,
    MoviesComponent,
    MovieComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    JsonpModule,
    routing
  ],
  providers: [MoviesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
