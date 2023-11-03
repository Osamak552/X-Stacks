import { NgModule } from "@angular/core";
import { MaterialModule } from "./material.module";
import { NgFor, NgIf } from "@angular/common";


@NgModule({
    exports:[
        MaterialModule,
        NgFor,
        NgIf
    ],
    imports:[
        MaterialModule,
        NgFor,
        NgIf
    ]
})


export class SharedModule{



}