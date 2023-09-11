import { Component, OnInit } from '@angular/core';
import { MovieApiService } from '../services/movie-api.service';
import { Observable, map } from 'rxjs';

@Component({
  selector: 'app-catalogue',
  templateUrl: './catalogue.component.html',
  styleUrls: ['./catalogue.component.css']
})
export class CatalogueComponent {

  movies$: Observable<any>
  isLoading = false;
  constructor(private service:MovieApiService) {
    this.movies$ = this.service.get_Movies()
  }

}
