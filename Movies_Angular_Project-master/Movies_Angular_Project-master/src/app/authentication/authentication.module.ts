import { NgModule } from "@angular/core";
import { AuthComponent } from "./login/login.component";
import { RegisterComponent } from "./register/register.component";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule, ReactiveFormsModule } from "@angular/forms";

import {  TranslateModule } from "@ngx-translate/core";
import { AuthenticationRoutingModule } from "./authentication-routing.module";
import { SharedModule } from "../shared/shared.module";



@NgModule({
    declarations: [
        AuthComponent,
        RegisterComponent,
    ],
    imports: [
        FormsModule,
        ReactiveFormsModule,
        HttpClientModule,
        AuthenticationRoutingModule,
        SharedModule,
        TranslateModule,
    ],
})
export class AuthenticationModule {

}
