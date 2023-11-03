import { NgModule } from "@angular/core";
import { TraineeProfileComponent } from "./trainee-profile/trainee-profile.component";
import { TraineeRegistrationComponent } from "./trainee-registration/trainee-registration.component";
import { UpdateTraineeComponent } from "./update-trainee/update-trainee.component";
import { SharedModule } from "../shared/shared.module";
import { authGuard } from "../shared/auth.guard";
import { traineeRoleGuard } from "../shared/trainee-role.guard";
import { RouterModule } from "@angular/router";



const traineeRoutes = [
    {
        path:'',children:[
            {
                path:"trainee-register",
                component: TraineeRegistrationComponent
              },
              {
                path:'trainee-profile',
                component: TraineeProfileComponent,
                canActivate: [authGuard,traineeRoleGuard],
                
              },
              {
                path:"trainee-update",
                component: UpdateTraineeComponent,
                canActivate: [authGuard,traineeRoleGuard]
              },
           
        ]
    }
]

@NgModule(
    {
        declarations:[
            TraineeProfileComponent,
            TraineeRegistrationComponent,
            UpdateTraineeComponent
        ],
        exports:[
            TraineeProfileComponent,
            TraineeRegistrationComponent,
            UpdateTraineeComponent
        ],
        imports:[
            SharedModule,
            RouterModule.forChild(traineeRoutes)
        ]
    }
)
export class TraineeModule{
    constructor(){
        console.log("Trainee Module initialized")
    }

}