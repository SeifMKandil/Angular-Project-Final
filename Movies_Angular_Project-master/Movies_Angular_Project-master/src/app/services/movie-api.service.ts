import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';


@Injectable({
  providedIn: 'root'
})
export class MovieApiService {
  private domain :  string | undefined


  constructor(private httpClient: HttpClient) { 
  this.domain=environment.domain;
  }

  get_Movies(){
      return this.httpClient.get(`${this.domain}`);
  }
  
  get_Movies_Details(detailUrl:string){
    return this.httpClient.get(detailUrl);
  }
}
