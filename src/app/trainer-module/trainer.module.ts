import { NgModule } from "@angular/core";
import { TrainerProfileComponent } from "./trainer-profile/trainer-profile.component";
import { TrainerRegistrationComponent } from "./trainer-registration/trainer-registration.component";
import { UpdateTrainerComponent } from "./update-trainer/update-trainer.component";
import { SharedModule } from "../shared/shared.module";
import { authGuard } from "../shared/auth.guard";
import { trainerRoleGuard } from "../shared/trainer-role.guard";
import { RouterModule } from "@angular/router";



const trainerRoutes = [
    {
        path:'',children:[
            {
                path:"trainer-register",
                component: TrainerRegistrationComponent
              },
              {
                path:'trainer-profile',
                component: TrainerProfileComponent,
                canActivate: [authGuard,trainerRoleGuard]
              },
              {
                path:"trainer-update",
                component: UpdateTrainerComponent,
                canActivate: [authGuard,trainerRoleGuard]
              },
        ]
    }
]

@NgModule({
    declarations:[
        TrainerProfileComponent,
        TrainerRegistrationComponent,
        UpdateTrainerComponent
    ],
    exports:[
        TrainerProfileComponent,
        TrainerRegistrationComponent,
        UpdateTrainerComponent
    ],
    imports:[
        SharedModule,
        RouterModule.forChild(trainerRoutes)
    ]
})

export class TrainerModule{

    constructor(){
        console.log("Trainer Module initialized")
    }
}