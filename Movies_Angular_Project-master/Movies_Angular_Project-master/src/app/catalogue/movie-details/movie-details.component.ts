import { Component } from '@angular/core';
import { MovieApiService } from '../../services/movie-api.service';
import { ActivatedRoute } from '@angular/router';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-movie-details',
  templateUrl: './movie-details.component.html',
  styleUrls: ['./movie-details.component.css']
})
export class MovieDetailsComponent {

  apiLangaugeKey:string;
  movieDetail: any;
  movieImage:string;
  movieDetailAr: any;
  isArabic?: boolean;
  isLoading = false;
  baseApiUrl? :string;
  apiKey?:string;
  detailUrlEn:string;
  detailUrlAr:string;



  constructor(private service: MovieApiService, private route: ActivatedRoute) {
    this.apiLangaugeKey=environment.apiLanguageArabicKey;
    this.movieImage=environment.movieImage;
    this.baseApiUrl=environment.baseApiUrl;
    this.apiKey=environment.apiKey;
    this.detailUrlEn = this.baseApiUrl + this.id + this.apiKey;
    this.detailUrlAr = this.baseApiUrl + this.id + this.apiKey +this.apiLangaugeKey;

  }
  title = 'Movies_Project';
  id = this.route.snapshot.params['id'];  

  currentLang = localStorage.getItem('currentLang');
  ngOnInit() {
    this.getMovieDetails();
    }

  getMovieDetails(){
    this.isLoading=true;
    this.service.get_Movies_Details(this.detailUrlEn).subscribe(response => {
      this.movieDetail = response;
      this.isLoading=false;
    })

    this.service.get_Movies_Details(this.detailUrlAr).subscribe(response => {
      this.movieDetailAr = response;



      if (this.currentLang == 'ar') {
        this.isArabic = true;
      } else {

      }


    })


  }
}