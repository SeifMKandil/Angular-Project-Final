import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { LoginGuard } from "./guards/login.guard";
import { AuthComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";


const authRoutes: Routes = [

    { path: 'register', component: RegisterComponent , canActivate:[LoginGuard]},
    
    {
        path: 'login',
        component: AuthComponent,
        canActivate: [LoginGuard],
    },

    { path: '**', redirectTo: '' }, 

]
@NgModule({
    imports: [RouterModule.forChild(authRoutes)],
    exports: [RouterModule]

})

export class AuthenticationRoutingModule { }