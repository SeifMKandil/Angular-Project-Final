
import { NgModule } from '@angular/core';

import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';


import { HeaderComponent } from './header/header.component';
import { SpinnerComponent } from './spinner.component';
import { CommonModule } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';

import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import {  RouterLink } from '@angular/router';

@NgModule({
    declarations: [HeaderComponent, SpinnerComponent],
    imports: [
        BrowserModule,
        MatProgressSpinnerModule,
        BrowserAnimationsModule,
        RouterLink,
        CommonModule,
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

    exports: [HeaderComponent, SpinnerComponent],
})
export class SharedModule { }
export function createTranslateLoader(http: HttpClient) {
    return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}
