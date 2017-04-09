import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { MoviesService } from '../../services/movies.service';

@Component({
  selector: 'movie',
  templateUrl: './movie.component.html'
})
export class MovieComponent implements OnInit {

    movie: Object;

    constructor(private _movieService: MoviesService, private _router: ActivatedRoute){

    }

    ngOnInit(){
        this._router.params.subscribe(
          params => {
            var id = params['id'];
            this._movieService.getMovie(id)
              .subscribe(movie => {
                this.movie = movie;
                console.log(movie);
              })
              
          }
        )
    }
}
