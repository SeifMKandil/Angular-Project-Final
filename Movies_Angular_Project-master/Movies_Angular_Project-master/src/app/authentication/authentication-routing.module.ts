import { RouterModule, Routes } from "@angular/router";

import { NgModule } from "@angular/core";
import { LoginGuard } from "../guards/login.guard";
import { AuthComponent } from "./auth/auth.component";
import { RegisterComponent } from "./register/register.component";

const authRoutes:Routes = [
  { path: 'register' , component: RegisterComponent },
  {
    path: 'auth',
    component: AuthComponent,
    canActivate: [LoginGuard], 
  },
]

@NgModule({
    imports:[RouterModule.forChild(authRoutes)],
    exports:[RouterModule]

})

export class AuthRoutingModule{}