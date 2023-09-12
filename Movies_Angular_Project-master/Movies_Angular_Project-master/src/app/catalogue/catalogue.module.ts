// import { LoginGuard } from './guards/login.guard';

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { SharedModule, } from '../shared/shared.module';
import { CatalogueComponent } from './catalogue.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';

@NgModule({
    declarations: [CatalogueComponent, MovieDetailsComponent],
    imports: [
        BrowserModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule,
        ReactiveFormsModule,
        AuthenticationModule,
        SharedModule,
    ],
})
export class CatalogueModule { }
