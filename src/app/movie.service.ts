import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class MovieService {

  private movie_url = 'https://api.themoviedb.org/3/';
  private api_key = 'b2fc6260e9f36837654c2b4714b2e7ef';
  private movie_string: string;
  private id: number;

  constructor(public _http: HttpClient) { }
  movies: any;
  moviesSearched: any;
  searched = "Upcoming Movies" 
  
  searchMovie(movie: string) {
    // this.movie_string = movie;
    this._http.get(this.movie_url + 'search/movie?query=' + movie + '&api_key=' + this.api_key + '&inlcude_adult=false')
    .subscribe(data => {
      this.movies = data['results'];
      console.log (this.movies, "its works!")
    })
  }

  getUpcomingMovies() {
    // tslint:disable-next-line:max-line-length
    this._http.get(this.movie_url + 'discover/movie?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-07-31' + '&api_key=' + this.api_key)
       .subscribe(data => {
      this.movies = data['results'];
      console.log(this.movies, "hit")
       });
    
  }

  getPopularMovies() {
    return this._http.get(this.movie_url + 'discover/movie?sort_by=popularity.desc' + '&api_key=' + this.api_key);
  }

  getMovie(id: number) {
    return this._http.get(this.movie_url + 'movie/' + id + '?api_key=' + this.api_key);
  }

}


// Get popular movies api
// https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=API_KEY

// Get upcoming movies api
// tslint:disable-next-line:max-line-length
// https://api.themoviedb.org/3/discover/movie?primary_release_date.gte=2018-04-15&primary_release_date.lte=2018-07-31&api_key=API_KEY

// Search movies api
// https://api.themoviedb.org/3/search/movie?query=SEARCH_STRING&api_key=API_KEY

// Get movie from api
// https://api.themoviedb.org/3/movie/ID?api_key=API_KEY