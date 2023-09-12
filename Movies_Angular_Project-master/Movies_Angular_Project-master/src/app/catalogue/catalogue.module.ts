import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { HttpClient, HttpClientModule } from '@angular/common/http';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppRoutingModule } from '../app-routing.module';
import { AuthenticationModule } from '../authentication/authentication.module';
import { SharedModule } from '../shared/shared.module';
import { CatalogueComponent } from './catalogue.component';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';

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
        CatalogueRoutingModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient],
            },
        }),
    ],
})
export class CatalogueModule { }
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
