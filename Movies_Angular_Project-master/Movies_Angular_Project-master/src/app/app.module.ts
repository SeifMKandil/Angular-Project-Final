import { NgModule } from '@angular/core';

import {  ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';

import { TranslateLoader, TranslateModule } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';


import { AppRoutingModule } from './app-routing.module';

import { SharedModule } from './shared/shared.module';


import { HomeModule } from './home/home.module';
import { AuthenticationModule } from './Authentication/authentication.module';




@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    HttpClientModule, 
    AppRoutingModule,
    HomeModule,
    AuthenticationModule,
    ReactiveFormsModule,
    SharedModule,
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
  bootstrap: [AppComponent]
})
export class AppModule { }

export function createTranslateLoader(http:HttpClient){
  return new TranslateHttpLoader(http,'./assets/i18n/','.json');
}


