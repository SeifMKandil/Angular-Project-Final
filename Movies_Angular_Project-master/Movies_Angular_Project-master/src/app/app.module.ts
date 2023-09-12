// import { LoginGuard } from './guards/login.guard';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { HomeComponent } from './home/home.component';
import { CarouselComponent } from './home/carousel/carousel.component';
import { CatalogueComponent } from './catalogue/catalogue.component';
import { MovieDetailsComponent } from './catalogue/movie-details/movie-details.component';



import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

import {MatProgressSpinnerModule} from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AuthGuard } from './guards/auth.guard';
import { LoginGuard } from './guards/login.guard';
import { AppRoutingModule } from './app-routing.module';
import { AuthenticationComponent } from './authentication/authentication.component';
import { AuthenticationModule } from './authentication/authentication.module';
import { SharedModule } from './shared/shared.module';
import { CatalogueModule } from './catalogue/catalogue.module';




@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    CarouselComponent,
    AuthenticationComponent,
  ],
  imports: [
    BrowserModule,
    MatProgressSpinnerModule,
    BrowserAnimationsModule,
    HttpClientModule, 
    AppRoutingModule,
    ReactiveFormsModule,
    AuthenticationModule,
    SharedModule,
    CatalogueModule,
  
    
    
    TranslateModule.forRoot({
      defaultLanguage:'en',
      loader:{
        provide:TranslateLoader,
        useFactory:createTranslateLoader,
        deps:[HttpClient]
      }

    }
    
    )
    
  ],
  providers: [
    AuthGuard,
    LoginGuard
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}


