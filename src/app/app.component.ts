import { Component } from '@angular/core';
import { MovieService } from './movie.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
 name = "moviesFinder";
 movie = "";
    
  
   constructor(public _movie: MovieService){
   }
   
   searchMovie() {
     this._movie.searchMovie(this.movie)
   }
   
  // getMovieData() {
  //   this._movie.getMovieInfoInput()
  //   .subscribe (
  //     (response) => {
  //       this.movieInfo = response;
  //       this._api.newMovieInfo = response;
  //       console.log (this.movieInfo);
  //       console.log (this._api.newMovieInfo);
        
  //     })
  //   }
    
  //   inputMovieData(){
  //     this._api.getMovieTitle()
  //     .subscribe (
  //       (response) => {
  //         this.movieInfo2 = response;
  //         this._api.newMovieInfo2 = response;
  //         console.log (this.movieInfo2);
  //         console.log (this._api.newMovieInfo2)
  //       })
  //   }
}
