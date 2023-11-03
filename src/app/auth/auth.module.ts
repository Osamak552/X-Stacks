import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { ChangePasswordComponent } from './change-password/change-password.component';
import { SharedModule } from '../shared/shared.module';


@NgModule({
    declarations:[
        LoginComponent,
        LogoutComponent,
        ChangePasswordComponent
    ],
    imports:[
        SharedModule
    ],
    exports:[
        LoginComponent,
        LogoutComponent,
        ChangePasswordComponent
    ]
})

export class AuthModule{
    constructor(){
        console.log("Auth Module initialized")
    }

}