"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var dialogs_1 = require("tns-core-modules/ui/dialogs");
var car_edit_service_1 = require("../shared/car-edit.service");
var car_service_1 = require("../shared/car.service");
var constants_1 = require("./constants");
/* ***********************************************************
* This is the item detail edit component.
* This component gets the selected data item, provides options to edit the item and saves the changes.
*************************************************************/
var CarDetailEditComponent = /** @class */ (function () {
    function CarDetailEditComponent(_carService, _carEditService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._carEditService = _carEditService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
        this._carClassOptions = [];
        this._carDoorOptions = [];
        this._carSeatOptions = [];
        this._carTransmissionOptions = [];
        this._isCarImageDirty = false;
        this._isUpdating = false;
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarDetailEditComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.initializeEditOptions();
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            var carId = params.id;
            _this._car = _this._carEditService.startEdit(carId);
        });
    };
    Object.defineProperty(CarDetailEditComponent.prototype, "isUpdating", {
        get: function () {
            return this._isUpdating;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "pricePerDay", {
        get: function () {
            return this._car.price;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.price = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "luggageValue", {
        get: function () {
            return this._car.luggage;
        },
        set: function (value) {
            // force iOS UISlider to work with discrete steps
            this._car.luggage = Math.round(value);
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carClassOptions", {
        get: function () {
            return this._carClassOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carDoorOptions", {
        get: function () {
            return this._carDoorOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carSeatOptions", {
        get: function () {
            return this._carSeatOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carTransmissionOptions", {
        get: function () {
            return this._carTransmissionOptions;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarDetailEditComponent.prototype, "carImageUrl", {
        get: function () {
            return this._car.imageUrl;
        },
        set: function (value) {
            this._car.imageUrl = value;
            this._isCarImageDirty = true;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The edit cancel button navigates back to the item details page.
    *************************************************************/
    CarDetailEditComponent.prototype.onCancelButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    /* ***********************************************************
    * The edit done button uses the data service to save the updated values of the data item details.
    * Check out the data service as cars/shared/car.service.ts
    *************************************************************/
    CarDetailEditComponent.prototype.onDoneButtonTap = function () {
        /* ***********************************************************
        * By design this app is set up to work with read-only sample data.
        * Follow the steps in the "Kinvey database setup" section in app/readme.md file
        * and uncomment the code block below to make it editable.
        *************************************************************/
        var _this = this;
        var queue = Promise.resolve();
        this._isUpdating = true;
        if (this._isCarImageDirty && this._car.imageUrl) {
            queue = queue
                .then(function () { return _this._carService.uploadImage(_this._car.imageStoragePath, _this._car.imageUrl); })
                .then(function (uploadedFile) {
                _this._car.imageUrl = uploadedFile.url;
            });
        }
        queue.then(function () { return _this._carService.update(_this._car); })
            .then(function () {
            _this._isUpdating = false;
            // this._routerExtensions.navigate(["/carlist"], {
            //     clearHistory: true,
            //     animated: true,
            //     transition: {
            //         name: "slideBottom",
            //         duration: 200,
            //         curve: "ease"
            //     }
            // });
            _this._routerExtensions.navigate(["/cars/car-models"], {
                animated: true,
                transition: {
                    name: "slide",
                    duration: 200,
                    curve: "ease"
                }
            });
        })
            .catch(function (errorMessage) {
            _this._isUpdating = false;
            dialogs_1.alert({ title: "Oops!", message: "Something went wrong. Please try again.", okButtonText: "Ok" });
        });
        /* ***********************************************************
        * Comment out the code block below if you made the app editable.
        *************************************************************/
        // const readOnlyMessage = "Check out the \"Kinvey database setup\" section in the readme file to make it editable."; // tslint:disable-line:max-line-length
        // const queue = Promise.resolve();
        // queue.then(() => alert({ title: "Read-Only Template!", message: readOnlyMessage, okButtonText: "Ok" }))
        //     .then(() => this._routerExtensions.navigate(["/cars"], {
        //         clearHistory: true,
        //         animated: true,
        //         transition: {
        //             name: "slideBottom",
        //             duration: 200,
        //             curve: "ease"
        //         }
        //     }));
    };
    CarDetailEditComponent.prototype.initializeEditOptions = function () {
        for (var _i = 0, carClassList_1 = constants_1.carClassList; _i < carClassList_1.length; _i++) {
            var classItem = carClassList_1[_i];
            this._carClassOptions.push(classItem);
        }
        for (var _a = 0, carDoorList_1 = constants_1.carDoorList; _a < carDoorList_1.length; _a++) {
            var doorItem = carDoorList_1[_a];
            this._carDoorOptions.push(doorItem);
        }
        for (var _b = 0, carSeatList_1 = constants_1.carSeatList; _b < carSeatList_1.length; _b++) {
            var seatItem = carSeatList_1[_b];
            this._carSeatOptions.push(seatItem);
        }
        for (var _c = 0, carTransmissionList_1 = constants_1.carTransmissionList; _c < carTransmissionList_1.length; _c++) {
            var transmissionItem = carTransmissionList_1[_c];
            this._carTransmissionOptions.push(transmissionItem);
        }
    };
    CarDetailEditComponent = __decorate([
        core_1.Component({
            moduleId: module.id,
            selector: "CarDetailEdit",
            templateUrl: "./car-detail-edit.component.html",
            styleUrls: ["./car-detail-edit.component.scss"]
        }),
        __metadata("design:paramtypes", [car_service_1.CarService,
            car_edit_service_1.CarEditService,
            router_1.PageRoute,
            router_1.RouterExtensions])
    ], CarDetailEditComponent);
    return CarDetailEditComponent;
}());
exports.CarDetailEditComponent = CarDetailEditComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci1kZXRhaWwtZWRpdC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBa0Q7QUFDbEQsc0RBQTBFO0FBQzFFLDRDQUEyQztBQUMzQyx1REFBb0Q7QUFFcEQsK0RBQTREO0FBRTVELHFEQUFtRDtBQUNuRCx5Q0FBMEY7QUFFMUY7Ozs4REFHOEQ7QUFPOUQ7SUFTSSxnQ0FDWSxXQUF1QixFQUN2QixlQUErQixFQUMvQixVQUFxQixFQUNyQixpQkFBbUM7UUFIbkMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsb0JBQWUsR0FBZixlQUFlLENBQWdCO1FBQy9CLGVBQVUsR0FBVixVQUFVLENBQVc7UUFDckIsc0JBQWlCLEdBQWpCLGlCQUFpQixDQUFrQjtRQVh2QyxxQkFBZ0IsR0FBa0IsRUFBRSxDQUFDO1FBQ3JDLG9CQUFlLEdBQWtCLEVBQUUsQ0FBQztRQUNwQyxvQkFBZSxHQUFrQixFQUFFLENBQUM7UUFDcEMsNEJBQXVCLEdBQWtCLEVBQUUsQ0FBQztRQUM1QyxxQkFBZ0IsR0FBWSxLQUFLLENBQUM7UUFDbEMsZ0JBQVcsR0FBWSxLQUFLLENBQUM7SUFPakMsQ0FBQztJQUVMOzs7O2tFQUk4RDtJQUM5RCx5Q0FBUSxHQUFSO1FBQUEsaUJBY0M7UUFiRyxJQUFJLENBQUMscUJBQXFCLEVBQUUsQ0FBQztRQUU3Qjs7O3NFQUc4RDtRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7YUFDekIsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUM7YUFDMUQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFFeEIsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMs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QUFDLElBQUksQ0FBQyxRQUFRLENBQUMsQ0FBQztTQUN2QztRQUVELEtBQXVCLFVBQVcsRUFBWCxnQkFBQSx1QkFBVyxFQUFYLHlCQUFXLEVBQVgsSUFBVyxFQUFFO1lBQS9CLElBQU0sUUFBUSxvQkFBQTtZQUNmLElBQUksQ0FBQyxlQUFlLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO1NBQ3ZDO1FBRUQsS0FBK0IsVUFBbUIsRUFBbkIsd0JBQUEsK0JBQW1CLEVBQW5CLGlDQUFtQixFQUFuQixJQUFtQixFQUFFO1lBQS9DLElBQU0sZ0JBQWdCLDRCQUFBO1lBQ3ZCLElBQUksQ0FBQyx1QkFBdUIsQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsQ0FBQztTQUN2RDtJQUNMLENBQUM7SUFwTFEsc0JBQXNCO1FBTmxDLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsUUFBUSxFQUFFLGVBQWU7WUFDekIsV0FBVyxFQUFFLGtDQUFrQztZQUMvQyxTQUFTLEVBQUUsQ0FBQyxrQ0FBa0MsQ0FBQztTQUNsRCxDQUFDO3lDQVcyQix3QkFBVTtZQUNOLGlDQUFjO1lBQ25CLGtCQUFTO1lBQ0YseUJBQWdCO09BYnRDLHNCQUFzQixDQXFMbEM7SUFBRCw2QkFBQztDQUFBLEFBckxELElBcUxDO0FBckxZLHdEQUFzQiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFBhZ2VSb3V0ZSwgUm91dGVyRXh0ZW5zaW9ucyB9IGZyb20gXCJuYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXJcIjtcbmltcG9ydCB7IHN3aXRjaE1hcCB9IGZyb20gXCJyeGpzL29wZXJhdG9yc1wiO1xuaW1wb3J0IHsgYWxlcnQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy91aS9kaWFsb2dzXCI7XG5cbmltcG9ydCB7IENhckVkaXRTZXJ2aWNlIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXItZWRpdC5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5tb2RlbFwiO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuLi9zaGFyZWQvY2FyLnNlcnZpY2VcIjtcbmltcG9ydCB7IGNhckNsYXNzTGlzdCwgY2FyRG9vckxpc3QsIGNhclNlYXRMaXN0LCBjYXJUcmFuc21pc3Npb25MaXN0IH0gZnJvbSBcIi4vY29uc3RhbnRzXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoaXMgaXMgdGhlIGl0ZW0gZGV0YWlsIGVkaXQgY29tcG9uZW50LlxuKiBUaGlzIGNvbXBvbmVudCBnZXRzIHRoZSBzZWxlY3RlZCBkYXRhIGl0ZW0sIHByb3ZpZGVzIG9wdGlvbnMgdG8gZWRpdCB0aGUgaXRlbSBhbmQgc2F2ZXMgdGhlIGNoYW5nZXMuXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQENvbXBvbmVudCh7XG4gICAgbW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgICBzZWxlY3RvcjogXCJDYXJEZXRhaWxFZGl0XCIsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXItZGV0YWlsLWVkaXQuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FyLWRldGFpbC1lZGl0LmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIENhckRldGFpbEVkaXRDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICAgIHByaXZhdGUgX2NhcjogQ2FyO1xuICAgIHByaXZhdGUgX2NhckNsYXNzT3B0aW9uczogQXJyYXk8c3RyaW5nPiA9IFtdO1xuICAgIHByaXZhdGUgX2NhckRvb3JPcHRpb25zOiBBcnJheTxudW1iZXI+ID0gW107XG4gICAgcHJpdmF0ZSBfY2FyU2VhdE9wdGlvbnM6IEFycmF5PHN0cmluZz4gPSBbXTtcbiAgICBwcml2YXRlIF9jYXJUcmFuc21pc3Npb25PcHRpb25zOiBBcnJheTxzdHJpbmc+ID0gW107XG4gICAgcHJpdmF0ZSBfaXNDYXJJbWFnZURpcnR5OiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfaXNVcGRhdGluZzogYm9vbGVhbiA9IGZhbHNlO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX2NhckVkaXRTZXJ2aWNlOiBDYXJFZGl0U2VydmljZSxcbiAgICAgICAgcHJpdmF0ZSBfcGFnZVJvdXRlOiBQYWdlUm91dGUsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHsgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gZ2V0IHRoZSBkYXRhIGl0ZW0gaWQgcGFyYW1ldGVyIHBhc3NlZCB0aHJvdWdoIG5hdmlnYXRpb24uXG4gICAgKiBHZXQgdGhlIGRhdGEgaXRlbSBkZXRhaWxzIGZyb20gdGhlIGRhdGEgc2VydmljZSB1c2luZyB0aGlzIGlkIGFuZCBhc3NpZ24gaXQgdG8gdGhlXG4gICAgKiBwcml2YXRlIHByb3BlcnR5IHRoYXQgaG9sZHMgaXQgaW5zaWRlIHRoZSBjb21wb25lbnQuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5pbml0aWFsaXplRWRpdE9wdGlvbnMoKTtcblxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIExlYXJuIG1vcmUgYWJvdXQgaG93IHRvIGdldCBuYXZpZ2F0aW9uIHBhcmFtZXRlcnMgaW4gdGhpcyBkb2N1bWVudGF0aW9uIGFydGljbGU6XG4gICAgICAgICogaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFzc2luZy1wYXJhbWV0ZXJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgdGhpcy5fcGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcklkID0gcGFyYW1zLmlkO1xuXG4gICAgICAgICAgICAgICAgdGhpcy5fY2FyID0gdGhpcy5fY2FyRWRpdFNlcnZpY2Uuc3RhcnRFZGl0KGNhcklkKTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBpc1VwZGF0aW5nKCk6IGJvb2xlYW4ge1xuICAgICAgICByZXR1cm4gdGhpcy5faXNVcGRhdGluZztcbiAgICB9XG5cbiAgICBnZXQgY2FyKCk6IENhciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXI7XG4gICAgfVxuXG4gICAgZ2V0IHByaWNlUGVyRGF5KCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXIucHJpY2U7XG4gICAgfVxuXG4gICAgc2V0IHByaWNlUGVyRGF5KHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gZm9yY2UgaU9TIFVJU2xpZGVyIHRvIHdvcmsgd2l0aCBkaXNjcmV0ZSBzdGVwc1xuICAgICAgICB0aGlzLl9jYXIucHJpY2UgPSBNYXRoLnJvdW5kKHZhbHVlKTtcbiAgICB9XG5cbiAgICBnZXQgbHVnZ2FnZVZhbHVlKCk6IG51bWJlciB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXIubHVnZ2FnZTtcbiAgICB9XG5cbiAgICBzZXQgbHVnZ2FnZVZhbHVlKHZhbHVlOiBudW1iZXIpIHtcbiAgICAgICAgLy8gZm9yY2UgaU9TIFVJU2xpZGVyIHRvIHdvcmsgd2l0aCBkaXNjcmV0ZSBzdGVwc1xuICAgICAgICB0aGlzLl9jYXIubHVnZ2FnZSA9IE1hdGgucm91bmQodmFsdWUpO1xuICAgIH1cblxuICAgIGdldCBjYXJDbGFzc09wdGlvbnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJDbGFzc09wdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IGNhckRvb3JPcHRpb25zKCk6IEFycmF5PG51bWJlcj4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyRG9vck9wdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IGNhclNlYXRPcHRpb25zKCk6IEFycmF5PHN0cmluZz4ge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyU2VhdE9wdGlvbnM7XG4gICAgfVxuXG4gICAgZ2V0IGNhclRyYW5zbWlzc2lvbk9wdGlvbnMoKTogQXJyYXk8c3RyaW5nPiB7XG4gICAgICAgIHJldHVybiB0aGlzLl9jYXJUcmFuc21pc3Npb25PcHRpb25zO1xuICAgIH1cblxuICAgIGdldCBjYXJJbWFnZVVybCgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyLmltYWdlVXJsO1xuICAgIH1cblxuICAgIHNldCBjYXJJbWFnZVVybCh2YWx1ZTogc3RyaW5nKSB7XG4gICAgICAgIHRoaXMuX2Nhci5pbWFnZVVybCA9IHZhbHVlO1xuICAgICAgICB0aGlzLl9pc0NhckltYWdlRGlydHkgPSB0cnVlO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgZWRpdCBjYW5jZWwgYnV0dG9uIG5hdmlnYXRlcyBiYWNrIHRvIHRoZSBpdGVtIGRldGFpbHMgcGFnZS5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uQ2FuY2VsQnV0dG9uVGFwKCk6IHZvaWQge1xuICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLmJhY2tUb1ByZXZpb3VzUGFnZSgpO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgZWRpdCBkb25lIGJ1dHRvbiB1c2VzIHRoZSBkYXRhIHNlcnZpY2UgdG8gc2F2ZSB0aGUgdXBkYXRlZCB2YWx1ZXMgb2YgdGhlIGRhdGEgaXRlbSBkZXRhaWxzLlxuICAgICogQ2hlY2sgb3V0IHRoZSBkYXRhIHNlcnZpY2UgYXMgY2Fycy9zaGFyZWQvY2FyLnNlcnZpY2UudHNcbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uRG9uZUJ1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICAgKiBCeSBkZXNpZ24gdGhpcyBhcHAgaXMgc2V0IHVwIHRvIHdvcmsgd2l0aCByZWFkLW9ubHkgc2FtcGxlIGRhdGEuXG4gICAgICAgICogRm9sbG93IHRoZSBzdGVwcyBpbiB0aGUgXCJLaW52ZXkgZGF0YWJhc2Ugc2V0dXBcIiBzZWN0aW9uIGluIGFwcC9yZWFkbWUubWQgZmlsZVxuICAgICAgICAqIGFuZCB1bmNvbW1lbnQgdGhlIGNvZGUgYmxvY2sgYmVsb3cgdG8gbWFrZSBpdCBlZGl0YWJsZS5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cblxuXG4gICAgICAgIGxldCBxdWV1ZSA9IFByb21pc2UucmVzb2x2ZSgpO1xuXG4gICAgICAgIHRoaXMuX2lzVXBkYXRpbmcgPSB0cnVlO1xuXG4gICAgICAgIGlmICh0aGlzLl9pc0NhckltYWdlRGlydHkgJiYgdGhpcy5fY2FyLmltYWdlVXJsKSB7XG4gICAgICAgICAgICBxdWV1ZSA9IHF1ZXVlXG4gICAgICAgICAgICAgICAgLnRoZW4oKCkgPT4gdGhpcy5fY2FyU2VydmljZS51cGxvYWRJbWFnZSh0aGlzLl9jYXIuaW1hZ2VTdG9yYWdlUGF0aCwgdGhpcy5fY2FyLmltYWdlVXJsKSlcbiAgICAgICAgICAgICAgICAudGhlbigodXBsb2FkZWRGaWxlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fY2FyLmltYWdlVXJsID0gdXBsb2FkZWRGaWxlLnVybDtcbiAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuXG4gICAgICAgIHF1ZXVlLnRoZW4oKCkgPT4gdGhpcy5fY2FyU2VydmljZS51cGRhdGUodGhpcy5fY2FyKSlcbiAgICAgICAgICAgIC50aGVuKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc1VwZGF0aW5nID0gZmFsc2U7XG4gICAgICAgICAgICAgICAgLy8gdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2FybGlzdFwiXSwge1xuICAgICAgICAgICAgICAgIC8vICAgICBjbGVhckhpc3Rvcnk6IHRydWUsXG4gICAgICAgICAgICAgICAgLy8gICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgIC8vICAgICB0cmFuc2l0aW9uOiB7XG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBuYW1lOiBcInNsaWRlQm90dG9tXCIsXG4gICAgICAgICAgICAgICAgLy8gICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgIC8vICAgICAgICAgY3VydmU6IFwiZWFzZVwiXG4gICAgICAgICAgICAgICAgLy8gICAgIH1cbiAgICAgICAgICAgICAgICAvLyB9KTtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXJzL2Nhci1tb2RlbHNcIl0sXG4gICAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG5hbWU6IFwic2xpZGVcIixcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAuY2F0Y2goKGVycm9yTWVzc2FnZTogYW55KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNVcGRhdGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIGFsZXJ0KHsgdGl0bGU6IFwiT29wcyFcIiwgbWVzc2FnZTogXCJTb21ldGhpbmcgd2VudCB3cm9uZy4gUGxlYXNlIHRyeSBhZ2Fpbi5cIiwgb2tCdXR0b25UZXh0OiBcIk9rXCIgfSk7XG4gICAgICAgICAgICB9KTtcblxuXG4gICAgICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgICAgICogQ29tbWVudCBvdXQgdGhlIGNvZGUgYmxvY2sgYmVsb3cgaWYgeW91IG1hZGUgdGhlIGFwcCBlZGl0YWJsZS5cbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgLy8gY29uc3QgcmVhZE9ubHlNZXNzYWdlID0gXCJDaGVjayBvdXQgdGhlIFxcXCJLaW52ZXkgZGF0YWJhc2Ugc2V0dXBcXFwiIHNlY3Rpb24gaW4gdGhlIHJlYWRtZSBmaWxlIHRvIG1ha2UgaXQgZWRpdGFibGUuXCI7IC8vIHRzbGludDpkaXNhYmxlLWxpbmU6bWF4LWxpbmUtbGVuZ3RoXG4gICAgICAgIC8vIGNvbnN0IHF1ZXVlID0gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgICAgIC8vIHF1ZXVlLnRoZW4oKCkgPT4gYWxlcnQoeyB0aXRsZTogXCJSZWFkLU9ubHkgVGVtcGxhdGUhXCIsIG1lc3NhZ2U6IHJlYWRPbmx5TWVzc2FnZSwgb2tCdXR0b25UZXh0OiBcIk9rXCIgfSkpXG4gICAgICAgIC8vICAgICAudGhlbigoKSA9PiB0aGlzLl9yb3V0ZXJFeHRlbnNpb25zLm5hdmlnYXRlKFtcIi9jYXJzXCJdLCB7XG4gICAgICAgIC8vICAgICAgICAgY2xlYXJIaXN0b3J5OiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAvLyAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgLy8gICAgICAgICAgICAgbmFtZTogXCJzbGlkZUJvdHRvbVwiLFxuICAgICAgICAvLyAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAvLyAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgLy8gICAgICAgICB9XG4gICAgICAgIC8vICAgICB9KSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBpbml0aWFsaXplRWRpdE9wdGlvbnMoKTogdm9pZCB7XG4gICAgICAgIGZvciAoY29uc3QgY2xhc3NJdGVtIG9mIGNhckNsYXNzTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5fY2FyQ2xhc3NPcHRpb25zLnB1c2goY2xhc3NJdGVtKTtcbiAgICAgICAgfVxuXG4gICAgICAgIGZvciAoY29uc3QgZG9vckl0ZW0gb2YgY2FyRG9vckxpc3QpIHtcbiAgICAgICAgICAgIHRoaXMuX2NhckRvb3JPcHRpb25zLnB1c2goZG9vckl0ZW0pO1xuICAgICAgICB9XG5cbiAgICAgICAgZm9yIChjb25zdCBzZWF0SXRlbSBvZiBjYXJTZWF0TGlzdCkge1xuICAgICAgICAgICAgdGhpcy5fY2FyU2VhdE9wdGlvbnMucHVzaChzZWF0SXRlbSk7XG4gICAgICAgIH1cblxuICAgICAgICBmb3IgKGNvbnN0IHRyYW5zbWlzc2lvbkl0ZW0gb2YgY2FyVHJhbnNtaXNzaW9uTGlzdCkge1xuICAgICAgICAgICAgdGhpcy5fY2FyVHJhbnNtaXNzaW9uT3B0aW9ucy5wdXNoKHRyYW5zbWlzc2lvbkl0ZW0pO1xuICAgICAgICB9XG4gICAgfVxufVxuIl19