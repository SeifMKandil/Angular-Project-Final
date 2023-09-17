import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { SharedModule } from '../../shared/shared.module';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent implements OnInit {

  movies:any;
  errorMessage= '';
  movieImage:string;

  constructor(private service:MovieApiService) {
    this.movieImage=environment.movieImage;
  }
  title = 'Movies_Project';

  ngOnInit() {
    this.getMovies();
  }

  getMovies(){
    this.service.get_Movies().subscribe(
      (response) => {
        this.movies = response;
      },
      (error: any) => {
        this.errorMessage = 'An error occurred';
      }
    );
  }
}