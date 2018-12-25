"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var car_model_1 = require("./car.model");
var car_service_1 = require("./car.service");
var CarEditService = /** @class */ (function () {
    function CarEditService(_carService) {
        this._carService = _carService;
    }
    CarEditService.prototype.startEdit = function (id) {
        this._editModel = null;
        return this.getEditableCarById(id);
    };
    CarEditService.prototype.getEditableCarById = function (id) {
        if (!this._editModel || this._editModel.id !== id) {
            var car = this._carService.getCarById(id);
            // get fresh editable copy of car model
            this._editModel = new car_model_1.Car(car);
        }
        return this._editModel;
    };
    CarEditService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        }),
        __metadata("design:paramtypes", [car_service_1.CarService])
    ], CarEditService);
    return CarEditService;
}());
exports.CarEditService = CarEditService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLWVkaXQuc2VydmljZS5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImNhci1lZGl0LnNlcnZpY2UudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMkM7QUFFM0MseUNBQWtDO0FBQ2xDLDZDQUEyQztBQUszQztJQUdJLHdCQUFvQixXQUF1QjtRQUF2QixnQkFBVyxHQUFYLFdBQVcsQ0FBWTtJQUFHLENBQUM7SUFFL0Msa0NBQVMsR0FBVCxVQUFVLEVBQVU7UUFDaEIsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFFdkIsT0FBTyxJQUFJLENBQUMsa0JBQWtCLENBQUMsRUFBRSxDQUFDLENBQUM7SUFDdkMsQ0FBQztJQUVELDJDQUFrQixHQUFsQixVQUFtQixFQUFVO1FBQ3pCLElBQUksQ0FBQyxJQUFJLENBQUMsVUFBVSxJQUFJLElBQUksQ0FBQyxVQUFVLENBQUMsRUFBRSxLQUFLLEVBQUUsRUFBRTtZQUMvQyxJQUFNLEdBQUcsR0FBRyxJQUFJLENBQUMsV0FBVyxDQUFDLFVBQVUsQ0FBQyxFQUFFLENBQUMsQ0FBQztZQUU1Qyx1Q0FBdUM7WUFDdkMsSUFBSSxDQUFDLFVBQVUsR0FBRyxJQUFJLGVBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztTQUNsQztRQUVELE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQztJQUMzQixDQUFDO0lBcEJRLGNBQWM7UUFIMUIsaUJBQVUsQ0FBQztZQUNSLFVBQVUsRUFBRSxNQUFNO1NBQ3JCLENBQUM7eUNBSW1DLHdCQUFVO09BSGxDLGNBQWMsQ0FxQjFCO0lBQUQscUJBQUM7Q0FBQSxBQXJCRCxJQXFCQztBQXJCWSx3Q0FBYyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuXG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXIubW9kZWxcIjtcbmltcG9ydCB7IENhclNlcnZpY2UgfSBmcm9tIFwiLi9jYXIuc2VydmljZVwiO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgQ2FyRWRpdFNlcnZpY2Uge1xuICAgIHByaXZhdGUgX2VkaXRNb2RlbDogQ2FyO1xuXG4gICAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2FyU2VydmljZTogQ2FyU2VydmljZSkge31cblxuICAgIHN0YXJ0RWRpdChpZDogc3RyaW5nKTogQ2FyIHtcbiAgICAgICAgdGhpcy5fZWRpdE1vZGVsID0gbnVsbDtcblxuICAgICAgICByZXR1cm4gdGhpcy5nZXRFZGl0YWJsZUNhckJ5SWQoaWQpO1xuICAgIH1cblxuICAgIGdldEVkaXRhYmxlQ2FyQnlJZChpZDogc3RyaW5nKTogQ2FyIHtcbiAgICAgICAgaWYgKCF0aGlzLl9lZGl0TW9kZWwgfHwgdGhpcy5fZWRpdE1vZGVsLmlkICE9PSBpZCkge1xuICAgICAgICAgICAgY29uc3QgY2FyID0gdGhpcy5fY2FyU2VydmljZS5nZXRDYXJCeUlkKGlkKTtcblxuICAgICAgICAgICAgLy8gZ2V0IGZyZXNoIGVkaXRhYmxlIGNvcHkgb2YgY2FyIG1vZGVsXG4gICAgICAgICAgICB0aGlzLl9lZGl0TW9kZWwgPSBuZXcgQ2FyKGNhcik7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gdGhpcy5fZWRpdE1vZGVsO1xuICAgIH1cbn1cbiJdfQ==