"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var common_1 = require("nativescript-angular/common");
var forms_1 = require("nativescript-angular/forms");
var angular_1 = require("nativescript-ui-listview/angular");
var car_detail_edit_component_1 = require("./car-detail-edit/car-detail-edit.component");
var my_image_add_remove_component_1 = require("./car-detail-edit/my-image-add-remove/my-image-add-remove.component");
var my_list_selector_modal_view_component_1 = require("./car-detail-edit/my-list-selector/my-list-selector-modal-view.component"); // tslint:disable-line:max-line-length
var my_list_selector_component_1 = require("./car-detail-edit/my-list-selector/my-list-selector.component");
var car_detail_component_1 = require("./car-detail/car-detail.component");
var car_list_component_1 = require("./car-list.component");
var cars_routing_module_1 = require("./cars-routing.module");
var login_component_1 = require("./login/login.component");
var car_models_component_1 = require("./car-models/car-models.component");
var CarsModule = /** @class */ (function () {
    function CarsModule() {
    }
    CarsModule = __decorate([
        core_1.NgModule({
            imports: [
                cars_routing_module_1.CarsRoutingModule,
                common_1.NativeScriptCommonModule,
                forms_1.NativeScriptFormsModule,
                angular_1.NativeScriptUIListViewModule
            ],
            declarations: [
                car_list_component_1.CarListComponent,
                car_detail_component_1.CarDetailComponent,
                car_detail_edit_component_1.CarDetailEditComponent,
                my_list_selector_component_1.MyListSelectorComponent,
                my_list_selector_modal_view_component_1.MyListSelectorModalViewComponent,
                my_image_add_remove_component_1.MyImageAddRemoveComponent,
                car_models_component_1.CarModelsComponent,
                login_component_1.LoginComponent
            ],
            entryComponents: [
                login_component_1.LoginComponent
            ],
            providers: [],
            schemas: [
                core_1.NO_ERRORS_SCHEMA
            ]
        })
    ], CarsModule);
    return CarsModule;
}());
exports.CarsModule = CarsModule;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2Fycy5tb2R1bGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXJzLm1vZHVsZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyRDtBQUMzRCxzREFBdUU7QUFDdkUsb0RBQXFFO0FBQ3JFLDREQUFnRjtBQUVoRix5RkFBcUY7QUFDckYscUhBQWdIO0FBQ2hILGtJQUE0SCxDQUFDLHNDQUFzQztBQUNuSyw0R0FBd0c7QUFDeEcsMEVBQXVFO0FBQ3ZFLDJEQUF3RDtBQUN4RCw2REFBMEQ7QUFFMUQsMkRBQXlEO0FBQ3pELDBFQUF1RTtBQTJCdkU7SUFBQTtJQUEwQixDQUFDO0lBQWQsVUFBVTtRQXpCdEIsZUFBUSxDQUFDO1lBQ04sT0FBTyxFQUFFO2dCQUNMLHVDQUFpQjtnQkFDakIsaUNBQXdCO2dCQUN4QiwrQkFBdUI7Z0JBQ3ZCLHNDQUE0QjthQUMvQjtZQUNELFlBQVksRUFBRTtnQkFDVixxQ0FBZ0I7Z0JBQ2hCLHlDQUFrQjtnQkFDbEIsa0RBQXNCO2dCQUN0QixvREFBdUI7Z0JBQ3ZCLHdFQUFnQztnQkFDL0IseURBQXlCO2dCQUN6Qix5Q0FBa0I7Z0JBQ25CLGdDQUFjO2FBQ2pCO1lBQ0QsZUFBZSxFQUFFO2dCQUNiLGdDQUFjO2FBQ2pCO1lBQ0QsU0FBUyxFQUFFLEVBQUU7WUFDYixPQUFPLEVBQUU7Z0JBQ0wsdUJBQWdCO2FBQ25CO1NBQ0osQ0FBQztPQUNXLFVBQVUsQ0FBSTtJQUFELGlCQUFDO0NBQUEsQUFBM0IsSUFBMkI7QUFBZCxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IE5nTW9kdWxlLCBOT19FUlJPUlNfU0NIRU1BIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdENvbW1vbk1vZHVsZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9jb21tb25cIjtcbmltcG9ydCB7IE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL2Zvcm1zXCI7XG5pbXBvcnQgeyBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC11aS1saXN0dmlldy9hbmd1bGFyXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgQ2FyRGV0YWlsRWRpdENvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1kZXRhaWwtZWRpdC9jYXItZGV0YWlsLWVkaXQuY29tcG9uZW50XCI7XG5pbXBvcnQgeyBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWRldGFpbC1lZGl0L215LWltYWdlLWFkZC1yZW1vdmUvbXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnRcIjtcbmltcG9ydCB7IE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWRldGFpbC1lZGl0L215LWxpc3Qtc2VsZWN0b3IvbXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudFwiOyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lOm1heC1saW5lLWxlbmd0aFxuaW1wb3J0IHsgTXlMaXN0U2VsZWN0b3JDb21wb25lbnQgfSBmcm9tIFwiLi9jYXItZGV0YWlsLWVkaXQvbXktbGlzdC1zZWxlY3Rvci9teS1saXN0LXNlbGVjdG9yLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyRGV0YWlsQ29tcG9uZW50IH0gZnJvbSBcIi4vY2FyLWRldGFpbC9jYXItZGV0YWlsLmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2FyTGlzdENvbXBvbmVudCB9IGZyb20gXCIuL2Nhci1saXN0LmNvbXBvbmVudFwiO1xuaW1wb3J0IHsgQ2Fyc1JvdXRpbmdNb2R1bGUgfSBmcm9tIFwiLi9jYXJzLXJvdXRpbmcubW9kdWxlXCI7XG5cbmltcG9ydCB7IExvZ2luQ29tcG9uZW50IH0gZnJvbSAnLi9sb2dpbi9sb2dpbi5jb21wb25lbnQnO1xuaW1wb3J0IHsgQ2FyTW9kZWxzQ29tcG9uZW50IH0gZnJvbSAnLi9jYXItbW9kZWxzL2Nhci1tb2RlbHMuY29tcG9uZW50JztcblxuQE5nTW9kdWxlKHtcbiAgICBpbXBvcnRzOiBbXG4gICAgICAgIENhcnNSb3V0aW5nTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRDb21tb25Nb2R1bGUsXG4gICAgICAgIE5hdGl2ZVNjcmlwdEZvcm1zTW9kdWxlLFxuICAgICAgICBOYXRpdmVTY3JpcHRVSUxpc3RWaWV3TW9kdWxlXG4gICAgXSxcbiAgICBkZWNsYXJhdGlvbnM6IFtcbiAgICAgICAgQ2FyTGlzdENvbXBvbmVudCxcbiAgICAgICAgQ2FyRGV0YWlsQ29tcG9uZW50LFxuICAgICAgICBDYXJEZXRhaWxFZGl0Q29tcG9uZW50LFxuICAgICAgICBNeUxpc3RTZWxlY3RvckNvbXBvbmVudCxcbiAgICAgICAgTXlMaXN0U2VsZWN0b3JNb2RhbFZpZXdDb21wb25lbnQsXG4gICAgICAgICBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50LFxuICAgICAgICAgQ2FyTW9kZWxzQ29tcG9uZW50LFxuICAgICAgICBMb2dpbkNvbXBvbmVudFxuICAgIF0sXG4gICAgZW50cnlDb21wb25lbnRzOiBbXG4gICAgICAgIExvZ2luQ29tcG9uZW50XG4gICAgXSxcbiAgICBwcm92aWRlcnM6IFtdLFxuICAgIHNjaGVtYXM6IFtcbiAgICAgICAgTk9fRVJST1JTX1NDSEVNQVxuICAgIF1cbn0pXG5leHBvcnQgY2xhc3MgQ2Fyc01vZHVsZSB7IH1cbiJdfQ==