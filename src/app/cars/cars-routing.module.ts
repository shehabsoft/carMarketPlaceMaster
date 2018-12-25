import { NgModule } from "@angular/core";
import { Routes } from "@angular/router";
import { NativeScriptRouterModule } from "nativescript-angular/router";

import { CarDetailEditComponent } from "./car-detail-edit/car-detail-edit.component";
import { CarDetailComponent } from "./car-detail/car-detail.component";
import { CarListComponent } from "./car-list.component";
import { LoginComponent } from './login/login.component';
import { CarModelsComponent } from './car-models/car-models.component';

const routes: Routes = [
    { path: "", component: LoginComponent },
      { path: "cars", component: CarListComponent },
    { path: "car-detail/:id", component: CarDetailComponent },
      { path: "car-models", component: CarModelsComponent },
    { path: "car-detail-edit/:id", component: CarDetailEditComponent }
];

@NgModule({
    imports: [NativeScriptRouterModule.forChild(routes)],
    exports: [NativeScriptRouterModule]
})
export class CarsRoutingModule { }
