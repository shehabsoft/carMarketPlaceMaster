"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var observable_array_1 = require("tns-core-modules/data/observable-array");
var car_service_1 = require("./shared/car.service");
/* ***********************************************************
* This is the master list component in the master-detail structure.
* This component gets the data, passes it to the master view and displays it in a list.
* It also handles the navigation to the details page for each item.
*************************************************************/
var CarListComponent = /** @class */ (function () {
    function CarListComponent(_carService, _routerExtensions) {
        this._carService = _carService;
        this._routerExtensions = _routerExtensions;
        this._isLoading = false;
        this._cars = new observable_array_1.ObservableArray([]);
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarListComponent.prototype.ngOnInit = function () {
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
    Object.defineProperty(CarListComponent.prototype, "cars", {
        get: function () {
            return this._cars;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(CarListComponent.prototype, "isLoading", {
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
    CarListComponent.prototype.onCarItemTap = function (args) {
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
    CarListComponent = __decorate([
        core_1.Component({
            selector: "CarsList",
            moduleId: module.id,
            templateUrl: "./car-list.component.html",
            styleUrls: ["./car-list.component.scss"]
        }),
        __metadata("design:paramtypes", [car_service_1.CarService,
            router_1.RouterExtensions])
    ], CarListComponent);
    return CarListComponent;
}());
exports.CarListComponent = CarListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWxpc3QuY29tcG9uZW50LmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiY2FyLWxpc3QuY29tcG9uZW50LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7O0FBQUEsc0NBQWtEO0FBQ2xELHNEQUErRDtBQUUvRCwyRUFBeUU7QUFHekUsb0RBQWtEO0FBRWxEOzs7OzhEQUk4RDtBQU85RDtJQUlJLDBCQUNZLFdBQXVCLEVBQ3ZCLGlCQUFtQztRQURuQyxnQkFBVyxHQUFYLFdBQVcsQ0FBWTtRQUN2QixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO1FBTHZDLGVBQVUsR0FBWSxLQUFLLENBQUM7UUFDNUIsVUFBSyxHQUF5QixJQUFJLGtDQUFlLENBQU0sRUFBRSxDQUFDLENBQUM7SUFLL0QsQ0FBQztJQUVMOzs7a0VBRzhEO0lBQzlELG1DQUFRLEdBQVI7UUFBQSxpQkFnQkM7UUFmRyxJQUFJLENBQUMsVUFBVSxHQUFHLElBQUksQ0FBQztRQUV2Qjs7OztzRUFJOEQ7UUFDOUQsSUFBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUU7YUFDbkIsSUFBSSxDQUFDLFVBQUMsSUFBZ0I7WUFDbkIsS0FBSSxDQUFDLEtBQUssR0FBRyxJQUFJLGtDQUFlLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDdkMsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDO2FBQ0QsS0FBSyxDQUFDO1lBQ0gsS0FBSSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFDNUIsQ0FBQyxDQUFDLENBQUM7SUFDWCxDQUFDO0lBRUQsc0JBQUksa0NBQUk7YUFBUjtZQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDOzs7T0FBQTtJQUVELHNCQUFJLHVDQUFTO2FBQWI7WUFDSSxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUM7UUFDM0IsQ0FBQzs7O09BQUE7SUFFRDs7Ozs7O2tFQU04RDtJQUM5RCx1Q0FBWSxHQUFaLFVBQWEsSUFBdUI7UUFDaEMsSUFBTSxhQUFhLEdBQUcsSUFBSSxDQUFDLElBQUksQ0FBQyxjQUFjLENBQUM7UUFFL0MsSUFBSSxDQUFDLGlCQUFpQixDQUFDLFFBQVEsQ0FBQyxDQUFDLGtCQUFrQixFQUFFLGFBQWEsQ0FBQyxFQUFFLENBQUMsRUFDdEU7WUFDSSxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsT0FBTztnQkFDYixRQUFRLEVBQUUsR0FBRztnQkFDYixLQUFLLEVBQUUsTUFBTTthQUNoQjtTQUNKLENBQUMsQ0FBQztJQUNQLENBQUM7SUExRFEsZ0JBQWdCO1FBTjVCLGdCQUFTLENBQUM7WUFDUCxRQUFRLEVBQUUsVUFBVTtZQUNwQixRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDJCQUEyQjtZQUN4QyxTQUFTLEVBQUUsQ0FBQywyQkFBMkIsQ0FBQztTQUMzQyxDQUFDO3lDQU0yQix3QkFBVTtZQUNKLHlCQUFnQjtPQU50QyxnQkFBZ0IsQ0EyRDVCO0lBQUQsdUJBQUM7Q0FBQSxBQTNERCxJQTJEQztBQTNEWSw0Q0FBZ0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBSb3V0ZXJFeHRlbnNpb25zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IHsgTGlzdFZpZXdFdmVudERhdGEgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXVpLWxpc3R2aWV3XCI7XG5pbXBvcnQgeyBPYnNlcnZhYmxlQXJyYXkgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9kYXRhL29ic2VydmFibGUtYXJyYXlcIjtcblxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4vc2hhcmVkL2Nhci5tb2RlbFwiO1xuaW1wb3J0IHsgQ2FyU2VydmljZSB9IGZyb20gXCIuL3NoYXJlZC9jYXIuc2VydmljZVwiO1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBUaGlzIGlzIHRoZSBtYXN0ZXIgbGlzdCBjb21wb25lbnQgaW4gdGhlIG1hc3Rlci1kZXRhaWwgc3RydWN0dXJlLlxuKiBUaGlzIGNvbXBvbmVudCBnZXRzIHRoZSBkYXRhLCBwYXNzZXMgaXQgdG8gdGhlIG1hc3RlciB2aWV3IGFuZCBkaXNwbGF5cyBpdCBpbiBhIGxpc3QuXG4qIEl0IGFsc28gaGFuZGxlcyB0aGUgbmF2aWdhdGlvbiB0byB0aGUgZGV0YWlscyBwYWdlIGZvciBlYWNoIGl0ZW0uXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuQENvbXBvbmVudCh7XG4gICAgc2VsZWN0b3I6IFwiQ2Fyc0xpc3RcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vY2FyLWxpc3QuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vY2FyLWxpc3QuY29tcG9uZW50LnNjc3NcIl1cbn0pXG5leHBvcnQgY2xhc3MgQ2FyTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gICAgcHJpdmF0ZSBfaXNMb2FkaW5nOiBib29sZWFuID0gZmFsc2U7XG4gICAgcHJpdmF0ZSBfY2FyczogT2JzZXJ2YWJsZUFycmF5PENhcj4gPSBuZXcgT2JzZXJ2YWJsZUFycmF5PENhcj4oW10pO1xuXG4gICAgY29uc3RydWN0b3IoXG4gICAgICAgIHByaXZhdGUgX2NhclNlcnZpY2U6IENhclNlcnZpY2UsXG4gICAgICAgIHByaXZhdGUgX3JvdXRlckV4dGVuc2lvbnM6IFJvdXRlckV4dGVuc2lvbnNcbiAgICApIHsgfVxuXG4gICAgLyogKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcbiAgICAqIFVzZSB0aGUgXCJuZ09uSW5pdFwiIGhhbmRsZXIgdG8gZ2V0IHRoZSBkYXRhIGFuZCBhc3NpZ24gaXQgdG8gdGhlXG4gICAgKiBwcml2YXRlIHByb3BlcnR5IHRoYXQgaG9sZHMgaXQgaW5zaWRlIHRoZSBjb21wb25lbnQuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBuZ09uSW5pdCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gdHJ1ZTtcblxuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIFRoZSBkYXRhIGlzIHJldHJpZXZlZCByZW1vdGVseSBmcm9tIEZpcmVCYXNlLlxuICAgICAgICAqIFRoZSBhY3R1YWwgZGF0YSByZXRyaWV2YWwgY29kZSBpcyB3cmFwcGVkIGluIGEgZGF0YSBzZXJ2aWNlLlxuICAgICAgICAqIENoZWNrIG91dCB0aGUgc2VydmljZSBpbiBjYXJzL3NoYXJlZC9jYXIuc2VydmljZS50c1xuICAgICAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgICAgICB0aGlzLl9jYXJTZXJ2aWNlLmJlZ2luKClcbiAgICAgICAgICAgIC50aGVuKChjYXJzOiBBcnJheTxDYXI+KSA9PiB7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FycyA9IG5ldyBPYnNlcnZhYmxlQXJyYXkoY2Fycyk7XG4gICAgICAgICAgICAgICAgdGhpcy5faXNMb2FkaW5nID0gZmFsc2U7XG4gICAgICAgICAgICB9KVxuICAgICAgICAgICAgLmNhdGNoKCgpID0+IHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pc0xvYWRpbmcgPSBmYWxzZTtcbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIGdldCBjYXJzKCk6IE9ic2VydmFibGVBcnJheTxDYXI+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2NhcnM7XG4gICAgfVxuXG4gICAgZ2V0IGlzTG9hZGluZygpOiBib29sZWFuIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2lzTG9hZGluZztcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBcIml0ZW1UYXBcIiBldmVudCBoYW5kbGVyIG9mIHRoZSA8UmFkTGlzdFZpZXc+IHRvIG5hdmlnYXRlIHRvIHRoZVxuICAgICogaXRlbSBkZXRhaWxzIHBhZ2UuIFJldHJpZXZlIGEgcmVmZXJlbmNlIGZvciB0aGUgZGF0YSBpdGVtICh0aGUgaWQpIGFuZCBwYXNzIGl0XG4gICAgKiB0byB0aGUgaXRlbSBkZXRhaWxzIHBhZ2UsIHNvIHRoYXQgaXQgY2FuIGlkZW50aWZ5IHdoaWNoIGRhdGEgaXRlbSB0byBkaXNwbGF5LlxuICAgICogTGVhcm4gbW9yZSBhYm91dCBuYXZpZ2F0aW5nIHdpdGggYSBwYXJhbWV0ZXIgaW4gdGhpcyBkb2N1bWVudGF0aW9uIGFydGljbGU6XG4gICAgKiBodHRwOi8vZG9jcy5uYXRpdmVzY3JpcHQub3JnL2FuZ3VsYXIvY29yZS1jb25jZXB0cy9hbmd1bGFyLW5hdmlnYXRpb24uaHRtbCNwYXNzaW5nLXBhcmFtZXRlclxuICAgICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiovXG4gICAgb25DYXJJdGVtVGFwKGFyZ3M6IExpc3RWaWV3RXZlbnREYXRhKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IHRhcHBlZENhckl0ZW0gPSBhcmdzLnZpZXcuYmluZGluZ0NvbnRleHQ7XG5cbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5uYXZpZ2F0ZShbXCIvY2Fycy9jYXItZGV0YWlsXCIsIHRhcHBlZENhckl0ZW0uaWRdLFxuICAgICAgICB7XG4gICAgICAgICAgICBhbmltYXRlZDogdHJ1ZSxcbiAgICAgICAgICAgIHRyYW5zaXRpb246IHtcbiAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlXCIsXG4gICAgICAgICAgICAgICAgZHVyYXRpb246IDIwMCxcbiAgICAgICAgICAgICAgICBjdXJ2ZTogXCJlYXNlXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgfVxufVxuIl19