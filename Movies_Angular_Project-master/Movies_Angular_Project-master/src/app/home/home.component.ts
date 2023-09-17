import { environment } from 'src/environments/environment';
import { Component } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  movies: any;
  title:string;
  movieImage:string;
  constructor(private service: MovieApiService) { 
    this.title = environment.title;
    this.movieImage=environment.movieImage;
  }
  

  ngOnInit() {
    this.getMovies();
  }
  getMovies() {
    this.service.get_Movies().subscribe(response => {

      this.movies = response;
    })
  }
}
