import { Component, OnInit } from '@angular/core';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movies',
  templateUrl: './movies.component.html',
  providers:[MoviesService]
})
export class MoviesComponent implements OnInit {
  
    search:string;
    popularMovies: Array<Object>;
    theatreMovies: Array<Object>;
    searchMoviesRes: Array<Object>;

    constructor(private _moviesService: MoviesService){

    }

    ngOnInit(){
      this._moviesService.getMostPopularMovies()
          .subscribe(res => {
            this.popularMovies = res.results
           
        });

        this._moviesService.getInTheaters()
          .subscribe(res => {
            this.theatreMovies = res.results
           
          })

    }

    searchMovies(){
      this._moviesService.searchMovies(this.search)
          .subscribe(res => {
            this.searchMoviesRes = res.results
           
          })
    }
}
