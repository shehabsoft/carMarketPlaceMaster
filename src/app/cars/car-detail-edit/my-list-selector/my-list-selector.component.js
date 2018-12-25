"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var car_edit_service_1 = require("../../shared/car-edit.service");
var my_list_selector_modal_view_component_1 = require("./my-list-selector-modal-view.component");
var capitalizeFirstLetter = function (s) { return s.charAt(0).toUpperCase() + s.slice(1); };
/* ***********************************************************
* The MyListSelector custom component uses a {N} modal page to let the user select and option
* from a list. You can also check out the my-list-selector-modal-view.component.ts to see the
* contents of the modal page. Learn more about modal pages in this documentation article:
* https://docs.nativescript.org/angular/code-samples/modal-page
*************************************************************/
var MyListSelectorComponent = /** @class */ (function () {
    function MyListSelectorComponent(_pageRoute, _modalService, _vcRef, _carEditService) {
        this._pageRoute = _pageRoute;
        this._modalService = _modalService;
        this._vcRef = _vcRef;
        this._carEditService = _carEditService;
        this.selectedValueChange = new core_1.EventEmitter();
    }
    MyListSelectorComponent.prototype.ngOnInit = function () {
        var carId = "";
        // use switchMap to get the latest activatedRoute instance
        this._pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            carId = params.id;
        });
        this._carEditModel = this._carEditService.getEditableCarById(carId);
    };
    MyListSelectorComponent.prototype.onSelectorTap = function () {
        var _this = this;
        var title = "Select Car " + capitalizeFirstLetter(this.tag);
        var selectedIndex = this.items.indexOf(this.selectedValue);
        var options = {
            viewContainerRef: this._vcRef,
            context: {
                items: this.items,
                title: title,
                selectedIndex: selectedIndex
            },
            fullscreen: false
        };
        this._modalService.showModal(my_list_selector_modal_view_component_1.MyListSelectorModalViewComponent, options)
            .then(function (selectedValue) {
            if (selectedValue) {
                _this.selectedValue = selectedValue;
                _this.selectedValueChange.emit(_this.selectedValue);
            }
        });
    };
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyListSelectorComponent.prototype, "tag", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", Array)
    ], MyListSelectorComponent.prototype, "items", void 0);
    __decorate([
        core_1.Input(),
        __metadata("design:type", String)
    ], MyListSelectorComponent.prototype, "selectedValue", void 0);
    __decorate([
        core_1.Output(),
        __metadata("design:type", Object)
    ], MyListSelectorComponent.prototype, "selectedValueChange", void 0);
    MyListSelectorComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            providers: [modal_dialog_1.ModalDialogService],
            selector: "MyListSelector",
            templateUrl: "./my-list-selector.component.html"
        }),
        __metadata("design:paramtypes", [router_1.PageRoute,
            modal_dialog_1.ModalDialogService,
            core_1.ViewContainerRef,
            car_edit_service_1.CarEditService])
    ], MyListSelectorComponent);
    return MyListSelectorComponent;
}());
exports.MyListSelectorComponent = MyListSelectorComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlzdC1zZWxlY3Rvci5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1saXN0LXNlbGVjdG9yLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFpRztBQUNqRyxrRUFBMkY7QUFDM0Ysc0RBQXdEO0FBQ3hELDRDQUEyQztBQUUzQyxrRUFBK0Q7QUFFL0QsaUdBQTJGO0FBRTNGLElBQU0scUJBQXFCLEdBQUcsVUFBQyxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsTUFBTSxDQUFDLENBQUMsQ0FBQyxDQUFDLFdBQVcsRUFBRSxHQUFHLENBQUMsQ0FBQyxLQUFLLENBQUMsQ0FBQyxDQUFDLEVBQXRDLENBQXNDLENBQUM7QUFFNUU7Ozs7OzhEQUs4RDtBQU85RDtJQVFJLGlDQUNZLFVBQXFCLEVBQ3JCLGFBQWlDLEVBQ2pDLE1BQXdCLEVBQ3hCLGVBQStCO1FBSC9CLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsa0JBQWEsR0FBYixhQUFhLENBQW9CO1FBQ2pDLFdBQU0sR0FBTixNQUFNLENBQWtCO1FBQ3hCLG9CQUFlLEdBQWYsZUFBZSxDQUFnQjtRQVJqQyx3QkFBbUIsR0FBRyxJQUFJLG1CQUFZLEVBQVUsQ0FBQztJQVFaLENBQUM7SUFFaEQsMENBQVEsR0FBUjtRQUNJLElBQUksS0FBSyxHQUFHLEVBQUUsQ0FBQztRQUVmLDBEQUEwRDtRQUMxRCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7YUFDekIsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUM7YUFDMUQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLEtBQUssR0FBRyxNQUFNLENBQUMsRUFBRSxDQUFDO1FBQ3RCLENBQUMsQ0FBQyxDQUFDO1FBRVAsSUFBSSxDQUFDLGFBQWEsR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLGtCQUFrQixDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3hFLENBQUM7SUFFRCwrQ0FBYSxHQUFiO1FBQUEsaUJBb0JDO1FBbkJHLElBQU0sS0FBSyxHQUFHLGdCQUFjLHFCQUFxQixDQUFDLElBQUksQ0FBQyxHQUFHLENBQUcsQ0FBQztRQUM5RCxJQUFNLGFBQWEsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsYUFBYSxDQUFDLENBQUM7UUFDN0QsSUFBTSxPQUFPLEdBQXVCO1lBQ2hDLGdCQUFnQixFQUFFLElBQUksQ0FBQyxNQUFNO1lBQzdCLE9BQU8sRUFBRTtnQkFDTCxLQUFLLEVBQUUsSUFBSSxDQUFDLEtBQUs7Z0JBQ2pCLEtBQUssT0FBQTtnQkFDTCxhQUFhLGVBQUE7YUFDaEI7WUFDRCxVQUFVLEVBQUUsS0FBSztTQUNwQixDQUFDO1FBRUYsSUFBSSxDQUFDLGFBQWEsQ0FBQyxTQUFTLENBQUMsd0VBQWdDLEVBQUUsT0FBTyxDQUFDO2FBQ2xFLElBQUksQ0FBQyxVQUFDLGFBQXFCO1lBQ3hCLElBQUksYUFBYSxFQUFFO2dCQUNmLEtBQUksQ0FBQyxhQUFhLEdBQUcsYUFBYSxDQUFDO2dCQUNuQyxLQUFJLENBQUMsbUJBQW1CLENBQUMsSUFBSSxDQUFDLEtBQUksQ0FBQyxhQUFhLENBQUMsQ0FBQzthQUNyRDtRQUNMLENBQUMsQ0FBQyxDQUFDO0lBQ1gsQ0FBQztJQTlDUTtRQUFSLFlBQUssRUFBRTs7d0RBQWE7SUFDWjtRQUFSLFlBQUssRUFBRTtrQ0FBUSxLQUFLOzBEQUFTO0lBQ3JCO1FBQVIsWUFBSyxFQUFFOztrRUFBdUI7SUFDckI7UUFBVCxhQUFNLEVBQUU7O3dFQUFrRDtJQUpsRCx1QkFBdUI7UUFObkMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtZQUNuQixTQUFTLEVBQUUsQ0FBQyxpQ0FBa0IsQ0FBQztZQUMvQixRQUFRLEVBQUUsZ0JBQWdCO1lBQzFCLFdBQVcsRUFBRSxtQ0FBbUM7U0FDbkQsQ0FBQzt5Q0FVMEIsa0JBQVM7WUFDTixpQ0FBa0I7WUFDekIsdUJBQWdCO1lBQ1AsaUNBQWM7T0FabEMsdUJBQXVCLENBZ0RuQztJQUFELDhCQUFDO0NBQUEsQUFoREQsSUFnREM7QUFoRFksMERBQXVCIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFdmVudEVtaXR0ZXIsIElucHV0LCBPbkluaXQsIE91dHB1dCwgVmlld0NvbnRhaW5lclJlZiB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBNb2RhbERpYWxvZ09wdGlvbnMsIE1vZGFsRGlhbG9nU2VydmljZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9tb2RhbC1kaWFsb2dcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuXG5pbXBvcnQgeyBDYXJFZGl0U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY2FyLWVkaXQuc2VydmljZVwiO1xuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jYXIubW9kZWxcIjtcbmltcG9ydCB7IE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50IH0gZnJvbSBcIi4vbXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudFwiO1xuXG5jb25zdCBjYXBpdGFsaXplRmlyc3RMZXR0ZXIgPSAocykgPT4gcy5jaGFyQXQoMCkudG9VcHBlckNhc2UoKSArIHMuc2xpY2UoMSk7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoZSBNeUxpc3RTZWxlY3RvciBjdXN0b20gY29tcG9uZW50IHVzZXMgYSB7Tn0gbW9kYWwgcGFnZSB0byBsZXQgdGhlIHVzZXIgc2VsZWN0IGFuZCBvcHRpb25cbiogZnJvbSBhIGxpc3QuIFlvdSBjYW4gYWxzbyBjaGVjayBvdXQgdGhlIG15LWxpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnQudHMgdG8gc2VlIHRoZVxuKiBjb250ZW50cyBvZiB0aGUgbW9kYWwgcGFnZS4gTGVhcm4gbW9yZSBhYm91dCBtb2RhbCBwYWdlcyBpbiB0aGlzIGRvY3VtZW50YXRpb24gYXJ0aWNsZTpcbiogaHR0cHM6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb2RlLXNhbXBsZXMvbW9kYWwtcGFnZVxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBDb21wb25lbnQoe1xuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgcHJvdmlkZXJzOiBbTW9kYWxEaWFsb2dTZXJ2aWNlXSxcbiAgICBzZWxlY3RvcjogXCJNeUxpc3RTZWxlY3RvclwiLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktbGlzdC1zZWxlY3Rvci5jb21wb25lbnQuaHRtbFwiXG59KVxuZXhwb3J0IGNsYXNzIE15TGlzdFNlbGVjdG9yQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBASW5wdXQoKSB0YWc6IHN0cmluZztcbiAgICBASW5wdXQoKSBpdGVtczogQXJyYXk8c3RyaW5nPjtcbiAgICBASW5wdXQoKSBzZWxlY3RlZFZhbHVlOiBzdHJpbmc7XG4gICAgQE91dHB1dCgpIHNlbGVjdGVkVmFsdWVDaGFuZ2UgPSBuZXcgRXZlbnRFbWl0dGVyPHN0cmluZz4oKTtcblxuICAgIHByaXZhdGUgX2NhckVkaXRNb2RlbDogQ2FyO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX3BhZ2VSb3V0ZTogUGFnZVJvdXRlLFxuICAgICAgICBwcml2YXRlIF9tb2RhbFNlcnZpY2U6IE1vZGFsRGlhbG9nU2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfdmNSZWY6IFZpZXdDb250YWluZXJSZWYsXG4gICAgICAgIHByaXZhdGUgX2NhckVkaXRTZXJ2aWNlOiBDYXJFZGl0U2VydmljZSkgeyB9XG5cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgbGV0IGNhcklkID0gXCJcIjtcblxuICAgICAgICAvLyB1c2Ugc3dpdGNoTWFwIHRvIGdldCB0aGUgbGF0ZXN0IGFjdGl2YXRlZFJvdXRlIGluc3RhbmNlXG4gICAgICAgIHRoaXMuX3BhZ2VSb3V0ZS5hY3RpdmF0ZWRSb3V0ZVxuICAgICAgICAgICAgLnBpcGUoc3dpdGNoTWFwKChhY3RpdmF0ZWRSb3V0ZSkgPT4gYWN0aXZhdGVkUm91dGUucGFyYW1zKSlcbiAgICAgICAgICAgIC5mb3JFYWNoKChwYXJhbXMpID0+IHtcbiAgICAgICAgICAgICAgICBjYXJJZCA9IHBhcmFtcy5pZDtcbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIHRoaXMuX2NhckVkaXRNb2RlbCA9IHRoaXMuX2NhckVkaXRTZXJ2aWNlLmdldEVkaXRhYmxlQ2FyQnlJZChjYXJJZCk7XG4gICAgfVxuXG4gICAgb25TZWxlY3RvclRhcCgpOiB2b2lkIHtcbiAgICAgICAgY29uc3QgdGl0bGUgPSBgU2VsZWN0IENhciAke2NhcGl0YWxpemVGaXJzdExldHRlcih0aGlzLnRhZyl9YDtcbiAgICAgICAgY29uc3Qgc2VsZWN0ZWRJbmRleCA9IHRoaXMuaXRlbXMuaW5kZXhPZih0aGlzLnNlbGVjdGVkVmFsdWUpO1xuICAgICAgICBjb25zdCBvcHRpb25zOiBNb2RhbERpYWxvZ09wdGlvbnMgPSB7XG4gICAgICAgICAgICB2aWV3Q29udGFpbmVyUmVmOiB0aGlzLl92Y1JlZixcbiAgICAgICAgICAgIGNvbnRleHQ6IHtcbiAgICAgICAgICAgICAgICBpdGVtczogdGhpcy5pdGVtcyxcbiAgICAgICAgICAgICAgICB0aXRsZSxcbiAgICAgICAgICAgICAgICBzZWxlY3RlZEluZGV4XG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAgZnVsbHNjcmVlbjogZmFsc2VcbiAgICAgICAgfTtcblxuICAgICAgICB0aGlzLl9tb2RhbFNlcnZpY2Uuc2hvd01vZGFsKE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50LCBvcHRpb25zKVxuICAgICAgICAgICAgLnRoZW4oKHNlbGVjdGVkVmFsdWU6IHN0cmluZykgPT4ge1xuICAgICAgICAgICAgICAgIGlmIChzZWxlY3RlZFZhbHVlKSB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZSA9IHNlbGVjdGVkVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuc2VsZWN0ZWRWYWx1ZUNoYW5nZS5lbWl0KHRoaXMuc2VsZWN0ZWRWYWx1ZSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSk7XG4gICAgfVxufVxuIl19