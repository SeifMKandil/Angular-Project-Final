import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AuthGuard } from "../Authentication/guards/catalogue.guard";
import { CatalogueComponent } from "./top-movies/catalogue.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";


const authRoutes:Routes = [
    { path: 'movieDetails/:id',component:MovieDetailsComponent},

    {
      path: '',
      component: CatalogueComponent,
      canActivate: [AuthGuard], 
    },
]

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports:[RouterModule]

})

export class CatalogueRoutingModule{
  constructor(){
    console.log("CatalougeComponent");
  }
}