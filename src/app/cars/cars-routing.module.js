"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var car_detail_edit_component_1 = require("./car-detail-edit/car-detail-edit.component");
var car_detail_component_1 = require("./car-detail/car-detail.component");
var car_list_component_1 = require("./car-list.component");
var login_component_1 = require("./login/login.component");
var car_models_component_1 = require("./car-models/car-models.component");
var routes = [
    { path: "", component: login_component_1.LoginComponent },
    { path: "cars", component: car_list_component_1.CarListComponent },
    { path: "car-detail/:id", component: car_detail_component_1.CarDetailComponent },
    { path: "car-models", component: car_models_component_1.CarModelsComponent },
    { path: "car-detail-edit/:id", component: car_detail_edit_component_1.CarDetailEditComponent }
];
var CarsRoutingModule = /** @class */ (function () {
    function CarsRoutingModule() {
    }
    CarsRoutingModule = __decorate([
        core_1.NgModule({
            imports: [router_1.NativeScriptRouterModule.forChild(routes)],
            exports: [router_1.NativeScriptRouterModule]
        })
    ], CarsRoutingModule);
    return CarsRoutingModule;
}());
exports.CarsRoutingModule = CarsRoutingModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy1yb3V0aW5nLm1vZHVsZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhcnMtcm91dGluZy5tb2R1bGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBeUM7QUFFekMsc0RBQXVFO0FBRXZFLHlGQUFxRjtBQUNyRiwwRUFBdUU7QUFDdkUsMkRBQXdEO0FBQ3hELDJEQUF5RDtBQUN6RCwwRUFBdUU7QUFFdkUsSUFBTSxNQUFNLEdBQVc7SUFDbkIsRUFBRSxJQUFJLEVBQUUsRUFBRSxFQUFFLFNBQVMsRUFBRSxnQ0FBYyxFQUFFO0lBQ3JDLEVBQUUsSUFBSSxFQUFFLE1BQU0sRUFBRSxTQUFTLEVBQUUscUNBQWdCLEVBQUU7SUFDL0MsRUFBRSxJQUFJLEVBQUUsZ0JBQWdCLEVBQUUsU0FBUyxFQUFFLHlDQUFrQixFQUFFO0lBQ3ZELEVBQUUsSUFBSSxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUseUNBQWtCLEVBQUU7SUFDdkQsRUFBRSxJQUFJLEVBQUUscUJBQXFCLEVBQUUsU0FBUyxFQUFFLGtEQUFzQixFQUFFO0NBQ3JFLENBQUM7QUFNRjtJQUFBO0lBQWlDLENBQUM7SUFBckIsaUJBQWlCO1FBSjdCLGVBQVEsQ0FBQztZQUNOLE9BQU8sRUFBRSxDQUFDLGlDQUF3QixDQUFDLFFBQVEsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNwRCxPQUFPLEVBQUUsQ0FBQyxpQ0FBd0IsQ0FBQztTQUN0QyxDQUFDO09BQ1csaUJBQWlCLENBQUk7SUFBRCx3QkFBQztDQUFBLEFBQWxDLElBQWtDO0FBQXJCLDhDQUFpQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvdXRlcyB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgQ2FyRGV0YWlsRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwtZWRpdC9jYXItZGV0YWlsLWVkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJEZXRhaWxDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsL2Nhci1kZXRhaWwuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBDYXJMaXN0Q29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWxpc3QuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBMb2dpbkNvbXBvbmVudCB9IGZyb20gJy4vbG9naW4vbG9naW4uY29tcG9uZW50JztcbmltcG9ydCB7IENhck1vZGVsc0NvbXBvbmVudCB9IGZyb20gJy4vY2FyLW1vZGVscy9jYXItbW9kZWxzLmNvbXBvbmVudCc7XG5cbmNvbnN0IHJvdXRlczogUm91dGVzID0gW1xuICAgIHsgcGF0aDogXCJcIiwgY29tcG9uZW50OiBMb2dpbkNvbXBvbmVudCB9LFxuICAgICAgeyBwYXRoOiBcImNhcnNcIiwgY29tcG9uZW50OiBDYXJMaXN0Q29tcG9uZW50IH0sXG4gICAgeyBwYXRoOiBcImNhci1kZXRhaWwvOmlkXCIsIGNvbXBvbmVudDogQ2FyRGV0YWlsQ29tcG9uZW50IH0sXG4gICAgICB7IHBhdGg6IFwiY2FyLW1vZGVsc1wiLCBjb21wb25lbnQ6IENhck1vZGVsc0NvbXBvbmVudCB9LFxuICAgIHsgcGF0aDogXCJjYXItZGV0YWlsLWVkaXQvOmlkXCIsIGNvbXBvbmVudDogQ2FyRGV0YWlsRWRpdENvbXBvbmVudCB9XG5dO1xuXG5ATmdNb2R1bGUoe1xuICAgIGltcG9ydHM6IFtOYXRpdmVTY3JpcHRSb3V0ZXJNb2R1bGUuZm9yQ2hpbGQocm91dGVzKV0sXG4gICAgZXhwb3J0czogW05hdGl2ZVNjcmlwdFJvdXRlck1vZHVsZV1cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyc1JvdXRpbmdNb2R1bGUgeyB9XG4iXX0=