import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";

import { AuthGuard } from "../guards/auth.guard";
import { CatalogueComponent } from "./catalogue.component";
import { MovieDetailsComponent } from "./movie-details/movie-details.component";


const authRoutes:Routes = [
    { path: 'movieDetails/:id',component:MovieDetailsComponent},
    {
      path: 'catalogue',
      component: CatalogueComponent,
      canActivate: [AuthGuard], 
    },
]

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports:[RouterModule]

})

export class CatalogueRoutingModule{}