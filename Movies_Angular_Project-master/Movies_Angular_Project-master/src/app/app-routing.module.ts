import { RouterModule, Routes } from "@angular/router";
import { NgModule } from "@angular/core";


const appRoutes:Routes = [  
  {
    path: 'catalogue',
    loadChildren: () =>
      import('./Catalogue/catalogue.module').then((m) => m.CatalogueModule),
  },

]

@NgModule({
    imports:[RouterModule.forRoot(appRoutes)],
    exports:[RouterModule]

})

export class AppRoutingModule{}