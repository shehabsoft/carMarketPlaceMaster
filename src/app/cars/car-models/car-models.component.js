"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var car_service_1 = require("../shared/car.service");
var CarModelsComponent = /** @class */ (function () {
    function CarModelsComponent(_carService, _routerExtensions) {
        this._carService = _carService;
        this._routerExtensions = _routerExtensions;
        this._isLoading = false;
        this._cars = new observable_array_1.ObservableArray([]);
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarModelsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._isLoading = true;
        /* ***********************************************************
        * The data is retrieved remotely from FireBase.
        * The actual data retrieval code is wrapped in a data service.
        * Check out the service in cars/shared/car.service.ts
        *************************************************************/
        this._carService.begin()
            .then(function (cars) {
            _this._cars = new observable_array_1.ObservableArray(cars);
            _this._isLoading = false;
        })
            .catch(function () {
            _this._isLoading = false;
        });
    };
    Object.defineProperty(CarModelsComponent.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarModelsComponent.prototype, "isLoading", {
        get: function () {
            return this._isLoading;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * Use the "itemTap" event handler of the <RadListView> to navigate to the
    * item details page. Retrieve a reference for the data item (the id) and pass it
    * to the item details page, so that it can identify which data item to display.
    * Learn more about navigating with a parameter in this documentation article:
    * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
    *************************************************************/
    CarModelsComponent.prototype.onCarItemTap = function (args) {
        var tappedCarItem = args.view.bindingContext;
        this._routerExtensions.navigate(["/cars/car-detail", tappedCarItem.id], {
            animated: true,
            transition: {
                name: "slide",
                duration: 200,
                curve: "ease"
            }
        });
    };
    CarModelsComponent = __decorate([
        core_1.Component({
            selector: 'ns-car-models',
            templateUrl: './car-models.component.html',
            styleUrls: ['./car-models.component.css'],
            moduleId: module.id,
        }),
        __metadata("design:paramtypes", [car_service_1.CarService,
            router_1.RouterExtensions])
    ], CarModelsComponent);
    return CarModelsComponent;
}());
exports.CarModelsComponent = CarModelsComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLW1vZGVscy5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXItbW9kZWxzLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUVsRCxzREFBK0Q7QUFFL0QsMkVBQXlFO0FBR3pFLHFEQUFtRDtBQVFuRDtJQUtFLDRCQUNZLFdBQXVCLEVBQ3ZCLGlCQUFtQztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBTHZDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsVUFBSyxHQUF5QixJQUFJLGtDQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7SUFLL0QsQ0FBQztJQUVMOzs7a0VBRzhEO0lBQzlELHFDQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2Qjs7OztzRUFJOEQ7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7YUFDbkIsSUFBSSxDQUFDLFVBQUMsSUFBZ0I7WUFDbkIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0JBQUksb0NBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHlDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7O2tFQU04RDtJQUM5RCx5Q0FBWSxHQUFaLFVBQWEsSUFBdUI7UUFDaEMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFDdEU7WUFDSSxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsTUFBTTthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUEzRFUsa0JBQWtCO1FBTjlCLGdCQUFTLENBQUM7WUFDVCxRQUFRLEVBQUUsZUFBZTtZQUN6QixXQUFXLEVBQUUsNkJBQTZCO1lBQzFDLFNBQVMsRUFBRSxDQUFDLDRCQUE0QixDQUFDO1lBQ3pDLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtTQUNwQixDQUFDO3lDQU95Qix3QkFBVTtZQUNKLHlCQUFnQjtPQVBwQyxrQkFBa0IsQ0E2RDlCO0lBQUQseUJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gJ0Bhbmd1bGFyL2NvcmUnO1xuXG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcblxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXIubW9kZWxcIjtcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuICBzZWxlY3RvcjogJ25zLWNhci1tb2RlbHMnLFxuICB0ZW1wbGF0ZVVybDogJy4vY2FyLW1vZGVscy5jb21wb25lbnQuaHRtbCcsXG4gIHN0eWxlVXJsczogWycuL2Nhci1tb2RlbHMuY29tcG9uZW50LmNzcyddLFxuICBtb2R1bGVJZDogbW9kdWxlLmlkLFxufSlcbmV4cG9ydCBjbGFzcyBDYXJNb2RlbHNDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuXG4gIHByaXZhdGUgX2lzTG9hZGluZzogYm9vbGVhbiA9IGZhbHNlO1xuICBwcml2YXRlIF9jYXJzOiBPYnNlcnZhYmxlQXJyYXk8Q2FyPiA9IG5ldyBPYnNlcnZhYmxlQXJyYXk8Q2FyPihbXSk7XG5cbiAgY29uc3RydWN0b3IoXG4gICAgICBwcml2YXRlIF9jYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlLFxuICAgICAgcHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICApIHsgfVxuXG4gIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBnZXQgdGhlIGRhdGEgYW5kIGFzc2lnbiBpdCB0byB0aGVcbiAgKiBwcml2YXRlIHByb3BlcnR5IHRoYXQgaG9sZHMgaXQgaW5zaWRlIHRoZSBjb21wb25lbnQuXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAgICogVGhlIGRhdGEgaXMgcmV0cmlldmVkIHJlbW90ZWx5IGZyb20gRmlyZUJhc2UuXG4gICAgICAqIFRoZSBhY3R1YWwgZGF0YSByZXRyaWV2YWwgY29kZSBpcyB3cmFwcGVkIGluIGEgZGF0YSBzZXJ2aWNlLlxuICAgICAgKiBDaGVjayBvdXQgdGhlIHNlcnZpY2UgaW4gY2Fycy9zaGFyZWQvY2FyLnNlcnZpY2UudHNcbiAgICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgICB0aGlzLl9jYXJTZXJ2aWNlLmJlZ2luKClcbiAgICAgICAgICAudGhlbigoY2FyczogQXJyYXk8Q2FyPikgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9jYXJzID0gbmV3IE9ic2VydmFibGVBcnJheShjYXJzKTtcbiAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgfSlcbiAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICB9KTtcbiAgfVxuXG4gIGdldCBjYXJzKCk6IE9ic2VydmFibGVBcnJheTxDYXI+IHtcbiAgICAgIHJldHVybiB0aGlzLl9jYXJzO1xuICB9XG5cbiAgZ2V0IGlzTG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgIHJldHVybiB0aGlzLl9pc0xvYWRpbmc7XG4gIH1cblxuICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAqIFVzZSB0aGUgXCJpdGVtVGFwXCIgZXZlbnQgaGFuZGxlciBvZiB0aGUgPFJhZExpc3RWaWV3PiB0byBuYXZpZ2F0ZSB0byB0aGVcbiAgKiBpdGVtIGRldGFpbHMgcGFnZS4gUmV0cmlldmUgYSByZWZlcmVuY2UgZm9yIHRoZSBkYXRhIGl0ZW0gKHRoZSBpZCkgYW5kIHBhc3MgaXRcbiAgKiB0byB0aGUgaXRlbSBkZXRhaWxzIHBhZ2UsIHNvIHRoYXQgaXQgY2FuIGlkZW50aWZ5IHdoaWNoIGRhdGEgaXRlbSB0byBkaXNwbGF5LlxuICAqIExlYXJuIG1vcmUgYWJvdXQgbmF2aWdhdGluZyB3aXRoIGEgcGFyYW1ldGVyIGluIHRoaXMgZG9jdW1lbnRhdGlvbiBhcnRpY2xlOlxuICAqIGh0dHA6Ly9kb2NzLm5hdGl2ZXNjcmlwdC5vcmcvYW5ndWxhci9jb3JlLWNvbmNlcHRzL2FuZ3VsYXItbmF2aWdhdGlvbi5odG1sI3Bhc3NpbmctcGFyYW1ldGVyXG4gICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gIG9uQ2FySXRlbVRhcChhcmdzOiBMaXN0Vmlld0V2ZW50RGF0YSk6IHZvaWQge1xuICAgICAgY29uc3QgdGFwcGVkQ2FySXRlbSA9IGFyZ3Mudmlldy5iaW5kaW5nQ29udGV4dDtcblxuICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2Fycy9jYXItZGV0YWlsXCIsIHRhcHBlZENhckl0ZW0uaWRdLFxuICAgICAge1xuICAgICAgICAgIGFuaW1hdGVkOiB0cnVlLFxuICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgbmFtZTogXCJzbGlkZVwiLFxuICAgICAgICAgICAgICBkdXJhdGlvbjogMjAwLFxuICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICB9XG4gICAgICB9KTtcbiAgfVxuXG59XG4iXX0=