
import { NgModule } from '@angular/core';



import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { RouterLink } from '@angular/router';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

@NgModule({
    declarations: [HeaderComponent, SpinnerComponent],
    imports: [
        CommonModule,
        
        RouterLink,
        MatProgressSpinnerModule,
        BrowserModule,
        BrowserAnimationsModule,
        TranslateModule.forRoot({
            defaultLanguage: 'en',
            loader: {
                provide: TranslateLoader,
                useFactory: createTranslateLoader,
                deps: [HttpClient]
            }

        }

        )
    ],

    exports: 
    [
    HeaderComponent, 
    SpinnerComponent,
    CommonModule,
    MatProgressSpinnerModule,
    BrowserModule,
    BrowserAnimationsModule,
    
],
})
export class SharedModule { }
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
