import { NgModule } from "@angular/core";
import { AddTrainingComponent } from "./add-training/add-training.component";
import { TrainingComponent } from "./training/training.component";
import { SharedModule } from "../shared/shared.module";
import { authGuard } from "../shared/auth.guard";
import { traineeRoleGuard } from "../shared/trainee-role.guard";
import { RouterModule } from "@angular/router";



const trainingRoutes = [
    {
        path:'',children:[
            {
                path: "training-logs",
                component: TrainingComponent,
                canActivate: [authGuard]
              },
              {
                path: "add-training",
                component: AddTrainingComponent,
                canActivate: [authGuard,traineeRoleGuard]
              },
        ]
    }
]

@NgModule({
    declarations:[
        AddTrainingComponent,
        TrainingComponent
    ],
    exports: [
        AddTrainingComponent,
        TrainingComponent
    ],
    imports: [
        SharedModule,
        RouterModule.forChild(trainingRoutes)
    ]
})

export class TrainingModule{
    constructor(){
        console.log("Training Module initialized")
    }

}