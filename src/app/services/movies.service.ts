import { Injectable } from '@angular/core';
import { Http, Jsonp } from '@angular/http'
import 'rxjs/Rx';

@Injectable()
export class MoviesService{

    private _url:string;
    private _mostPopular:string;
    private _inTheatres:string;
    private _apiKey = '4c3121426fd4081a7bb9bc62683480f1';

    constructor(private _jsonp: Jsonp){

        this._url = 'https://api.themoviedb.org/3/movie';
    }

   getMostPopularMovies(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&sort_by=popularity.desc&api_key='+this._apiKey)
            .map(res => res.json());
    }
    
    getInTheaters(){
        return this._jsonp.get('https://api.themoviedb.org/3/discover/movie?callback=JSONP_CALLBACK&primary_release_date.gte=2017-03-1&primary_release_date.lte=2017-3-10&api_key='+this._apiKey)
            .map(res => res.json());
    }

    getMovie(id:string){
        return this._jsonp.get('https://api.themoviedb.org/3/movie/'+id+'?callback=JSONP_CALLBACK&api_key='+this._apiKey)
            .map(res => res.json());
    }

    searchMovies(searchStr:string){
        return this._jsonp.get('https://api.themoviedb.org/3/search/movie?callback=JSONP_CALLBACK&query='+searchStr+'&sort_by=popularity.desc&api_key='+this._apiKey)
            .map(res => res.json());
    }

}