import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { CatalogueComponent } from './top-movies/catalogue.component';
import { CatalogueRoutingModule } from './catalogue-routing.module';
import { TranslateModule } from '@ngx-translate/core';
import { MovieDetailsComponent } from './movie-details/movie-details.component';
import { CommonModule } from '@angular/common';
import { MatProgressSpinnerModule } from '@angular/material/progress-spinner';

@NgModule({
    declarations: [CatalogueComponent, MovieDetailsComponent],
    imports: [
        HttpClientModule,
        CommonModule,
        CatalogueRoutingModule,
        TranslateModule,
        MatProgressSpinnerModule
    ],
})

export class CatalogueModule {}
