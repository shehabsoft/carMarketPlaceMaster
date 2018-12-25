"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var router_1 = require("nativescript-angular/router");
var operators_1 = require("rxjs/operators");
var car_service_1 = require("../shared/car.service");
/* ***********************************************************
* This is the item details component in the master-detail structure.
* This component retrieves the passed parameter from the master list component,
* finds the data item by this parameter and displays the detailed data item information.
*************************************************************/
var CarDetailComponent = /** @class */ (function () {
    function CarDetailComponent(_carService, _pageRoute, _routerExtensions) {
        this._carService = _carService;
        this._pageRoute = _pageRoute;
        this._routerExtensions = _routerExtensions;
    }
    /* ***********************************************************
    * Use the "ngOnInit" handler to get the data item id parameter passed through navigation.
    * Get the data item details from the data service using this id and assign it to the
    * private property that holds it inside the component.
    *************************************************************/
    CarDetailComponent.prototype.ngOnInit = function () {
        var _this = this;
        /* ***********************************************************
        * Learn more about how to get navigation parameters in this documentation article:
        * http://docs.nativescript.org/angular/core-concepts/angular-navigation.html#passing-parameter
        *************************************************************/
        this._pageRoute.activatedRoute
            .pipe(operators_1.switchMap(function (activatedRoute) { return activatedRoute.params; }))
            .forEach(function (params) {
            var carId = params.id;
            _this._carService.begin().then(function (cars) {
                _this._car = _this._carService.getCarById(carId);
            })
                .catch(function () {
            });
        });
    };
    Object.defineProperty(CarDetailComponent.prototype, "car", {
        get: function () {
            return this._car;
        },
        enumerable: true,
        configurable: true
    });
    /* ***********************************************************
    * The back button is essential for a master-detail feature.
    *************************************************************/
    CarDetailComponent.prototype.onBackButtonTap = function () {
        this._routerExtensions.backToPreviousPage();
    };
    /* ***********************************************************
    * The master-detail template comes with an example of an item edit page.
    * Check out the edit page in the /cars/car-detail-edit folder.
    *************************************************************/
    CarDetailComponent.prototype.onEditButtonTap = function () {
        this._routerExtensions.navigate(["/cars/car-detail-edit", this._car.id], {
            animated: true,
            transition: {
                name: "slideTop",
                duration: 200,
                curve: "ease"
            }
        });
    };
    CarDetailComponent = __decorate([
        core_1.Component({
            selector: "CarDetail",
            moduleId: module.id,
            templateUrl: "./car-detail.component.html"
        }),
        __metadata("design:paramtypes", [car_service_1.CarService,
            router_1.PageRoute,
            router_1.RouterExtensions])
    ], CarDetailComponent);
    return CarDetailComponent;
}());
exports.CarDetailComponent = CarDetailComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWRldGFpbC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXItZGV0YWlsLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFrRDtBQUNsRCxzREFBMEU7QUFDMUUsNENBQTJDO0FBRzNDLHFEQUFtRDtBQUVuRDs7Ozs4REFJOEQ7QUFNOUQ7SUFHSSw0QkFDWSxXQUF1QixFQUN2QixVQUFxQixFQUNyQixpQkFBbUM7UUFGbkMsZ0JBQVcsR0FBWCxXQUFXLENBQVk7UUFDdkIsZUFBVSxHQUFWLFVBQVUsQ0FBVztRQUNyQixzQkFBaUIsR0FBakIsaUJBQWlCLENBQWtCO0lBQzNDLENBQUM7SUFFTDs7OztrRUFJOEQ7SUFDOUQscUNBQVEsR0FBUjtRQUFBLGlCQW1CQztRQWxCRzs7O3NFQUc4RDtRQUM5RCxJQUFJLENBQUMsVUFBVSxDQUFDLGNBQWM7YUFDekIsSUFBSSxDQUFDLHFCQUFTLENBQUMsVUFBQyxjQUFjLElBQUssT0FBQSxjQUFjLENBQUMsTUFBTSxFQUFyQixDQUFxQixDQUFDLENBQUM7YUFDMUQsT0FBTyxDQUFDLFVBQUMsTUFBTTtZQUNaLElBQU0sS0FBSyxHQUFHLE1BQU0sQ0FBQyxFQUFFLENBQUM7WUFDeEIsS0FBSSxDQUFDLFdBQVcsQ0FBQyxLQUFLLEVBQUUsQ0FBQyxJQUFJLENBQUMsVUFBQyxJQUFnQjtnQkFHekMsS0FBSSxDQUFDLElBQUksR0FBRyxLQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxLQUFLLENBQUMsQ0FBQztZQUNyRCxDQUFDLENBQUM7aUJBQ0QsS0FBSyxDQUFDO1lBRVAsQ0FBQyxDQUFDLENBQUM7UUFFUCxDQUFDLENBQUMsQ0FBQztJQUNYLENBQUM7SUFFRCxzQkFBSSxtQ0FBRzthQUFQO1lBQ0ksT0FBTyxJQUFJLENBQUMsSUFBSSxDQUFDO1FBQ3JCLENBQUM7OztPQUFBO0lBRUQ7O2tFQUU4RDtJQUM5RCw0Q0FBZSxHQUFmO1FBQ0ksSUFBSSxDQUFDLGlCQUFpQixDQUFDLGtCQUFrQixFQUFFLENBQUM7SUFDaEQsQ0FBQztJQUVEOzs7a0VBRzhEO0lBQzlELDRDQUFlLEdBQWY7UUFDSSxJQUFJLENBQUMsaUJBQWlCLENBQUMsUUFBUSxDQUFDLENBQUMsdUJBQXVCLEVBQUUsSUFBSSxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUMsRUFDbkU7WUFDSSxRQUFRLEVBQUUsSUFBSTtZQUNkLFVBQVUsRUFBRTtnQkFDUixJQUFJLEVBQUUsVUFBVTtnQkFDaEIsUUFBUSxFQUFFLEdBQUc7Z0JBQ2IsS0FBSyxFQUFFLE1BQU07YUFDaEI7U0FDSixDQUFDLENBQUM7SUFDWCxDQUFDO0lBNURRLGtCQUFrQjtRQUw5QixnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLFdBQVc7WUFDckIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSw2QkFBNkI7U0FDN0MsQ0FBQzt5Q0FLMkIsd0JBQVU7WUFDWCxrQkFBUztZQUNGLHlCQUFnQjtPQU50QyxrQkFBa0IsQ0E2RDlCO0lBQUQseUJBQUM7Q0FBQSxBQTdERCxJQTZEQztBQTdEWSxnREFBa0IiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIE9uSW5pdCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBQYWdlUm91dGUsIFJvdXRlckV4dGVuc2lvbnMgfSBmcm9tIFwibmF0aXZlc2NyaXB0LWFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgeyBzd2l0Y2hNYXAgfSBmcm9tIFwicnhqcy9vcGVyYXRvcnNcIjtcblxuaW1wb3J0IHsgQ2FyIH0gZnJvbSBcIi4uL3NoYXJlZC9jYXIubW9kZWxcIjtcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi4vc2hhcmVkL2Nhci5zZXJ2aWNlXCI7XG5cbi8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4qIFRoaXMgaXMgdGhlIGl0ZW0gZGV0YWlscyBjb21wb25lbnQgaW4gdGhlIG1hc3Rlci1kZXRhaWwgc3RydWN0dXJlLlxuKiBUaGlzIGNvbXBvbmVudCByZXRyaWV2ZXMgdGhlIHBhc3NlZCBwYXJhbWV0ZXIgZnJvbSB0aGUgbWFzdGVyIGxpc3QgY29tcG9uZW50LFxuKiBmaW5kcyB0aGUgZGF0YSBpdGVtIGJ5IHRoaXMgcGFyYW1ldGVyIGFuZCBkaXNwbGF5cyB0aGUgZGV0YWlsZWQgZGF0YSBpdGVtIGluZm9ybWF0aW9uLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIkNhckRldGFpbFwiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9jYXItZGV0YWlsLmNvbXBvbmVudC5odG1sXCJcbn0pXG5leHBvcnQgY2xhc3MgQ2FyRGV0YWlsQ29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgICBwcml2YXRlIF9jYXI6IENhcjtcblxuICAgIGNvbnN0cnVjdG9yKFxuICAgICAgICBwcml2YXRlIF9jYXJTZXJ2aWNlOiBDYXJTZXJ2aWNlLFxuICAgICAgICBwcml2YXRlIF9wYWdlUm91dGU6IFBhZ2VSb3V0ZSxcbiAgICAgICAgcHJpdmF0ZSBfcm91dGVyRXh0ZW5zaW9uczogUm91dGVyRXh0ZW5zaW9uc1xuICAgICkgeyB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVXNlIHRoZSBcIm5nT25Jbml0XCIgaGFuZGxlciB0byBnZXQgdGhlIGRhdGEgaXRlbSBpZCBwYXJhbWV0ZXIgcGFzc2VkIHRocm91Z2ggbmF2aWdhdGlvbi5cbiAgICAqIEdldCB0aGUgZGF0YSBpdGVtIGRldGFpbHMgZnJvbSB0aGUgZGF0YSBzZXJ2aWNlIHVzaW5nIHRoaXMgaWQgYW5kIGFzc2lnbiBpdCB0byB0aGVcbiAgICAqIHByaXZhdGUgcHJvcGVydHkgdGhhdCBob2xkcyBpdCBpbnNpZGUgdGhlIGNvbXBvbmVudC5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG5nT25Jbml0KCk6IHZvaWQge1xuICAgICAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICAgICAqIExlYXJuIG1vcmUgYWJvdXQgaG93IHRvIGdldCBuYXZpZ2F0aW9uIHBhcmFtZXRlcnMgaW4gdGhpcyBkb2N1bWVudGF0aW9uIGFydGljbGU6XG4gICAgICAgICogaHR0cDovL2RvY3MubmF0aXZlc2NyaXB0Lm9yZy9hbmd1bGFyL2NvcmUtY29uY2VwdHMvYW5ndWxhci1uYXZpZ2F0aW9uLmh0bWwjcGFzc2luZy1wYXJhbWV0ZXJcbiAgICAgICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICAgICAgdGhpcy5fcGFnZVJvdXRlLmFjdGl2YXRlZFJvdXRlXG4gICAgICAgICAgICAucGlwZShzd2l0Y2hNYXAoKGFjdGl2YXRlZFJvdXRlKSA9PiBhY3RpdmF0ZWRSb3V0ZS5wYXJhbXMpKVxuICAgICAgICAgICAgLmZvckVhY2goKHBhcmFtcykgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNhcklkID0gcGFyYW1zLmlkO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhclNlcnZpY2UuYmVnaW4oKS50aGVuKChjYXJzOiBBcnJheTxDYXI+KSA9PiB7XG5cblxuICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2NhciA9IHRoaXMuX2NhclNlcnZpY2UuZ2V0Q2FyQnlJZChjYXJJZCk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgICAuY2F0Y2goKCkgPT4ge1xuICAgICAgICAgICAgICAgICBcbiAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgZ2V0IGNhcigpOiBDYXIge1xuICAgICAgICByZXR1cm4gdGhpcy5fY2FyO1xuICAgIH1cblxuICAgIC8qICoqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqXG4gICAgKiBUaGUgYmFjayBidXR0b24gaXMgZXNzZW50aWFsIGZvciBhIG1hc3Rlci1kZXRhaWwgZmVhdHVyZS5cbiAgICAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqL1xuICAgIG9uQmFja0J1dHRvblRhcCgpOiB2b2lkIHtcbiAgICAgICAgdGhpcy5fcm91dGVyRXh0ZW5zaW9ucy5iYWNrVG9QcmV2aW91c1BhZ2UoKTtcbiAgICB9XG5cbiAgICAvKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuICAgICogVGhlIG1hc3Rlci1kZXRhaWwgdGVtcGxhdGUgY29tZXMgd2l0aCBhbiBleGFtcGxlIG9mIGFuIGl0ZW0gZWRpdCBwYWdlLlxuICAgICogQ2hlY2sgb3V0IHRoZSBlZGl0IHBhZ2UgaW4gdGhlIC9jYXJzL2Nhci1kZXRhaWwtZWRpdCBmb2xkZXIuXG4gICAgKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbiAgICBvbkVkaXRCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3JvdXRlckV4dGVuc2lvbnMubmF2aWdhdGUoW1wiL2NhcnMvY2FyLWRldGFpbC1lZGl0XCIsIHRoaXMuX2Nhci5pZF0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYW5pbWF0ZWQ6IHRydWUsXG4gICAgICAgICAgICAgICAgdHJhbnNpdGlvbjoge1xuICAgICAgICAgICAgICAgICAgICBuYW1lOiBcInNsaWRlVG9wXCIsXG4gICAgICAgICAgICAgICAgICAgIGR1cmF0aW9uOiAyMDAsXG4gICAgICAgICAgICAgICAgICAgIGN1cnZlOiBcImVhc2VcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cbn1cbiJdfQ==