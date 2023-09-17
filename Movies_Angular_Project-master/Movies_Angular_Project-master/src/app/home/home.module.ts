import { HttpClientModule, HttpClient } from "@angular/common/http";
import { NgModule } from "@angular/core";
import { TranslateModule } from "@ngx-translate/core";
import { SharedModule } from "../shared/shared.module";
import { CarouselComponent } from "./carousel/carousel.component";
import { HomeComponent } from "./home.component";
import { HomeRoutingModule } from "./home-routing.module";






@NgModule({
  declarations: [
    HomeComponent,
    CarouselComponent,
  ],
  imports: [
    HttpClientModule, 
    SharedModule,
    HomeRoutingModule,
  
    
    
    TranslateModule,
    
  ],
})
export class HomeModule { }




