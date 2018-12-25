"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var kinvey_nativescript_sdk_1 = require("kinvey-nativescript-sdk");
var file_system_1 = require("tns-core-modules/file-system");
var car_model_1 = require("./car.model");
var http_1 = require("tns-core-modules/http");
var editableProperties = [
    "class",
    "doors",
    "hasAC",
    "transmission",
    "luggage",
    "name",
    "price",
    "seats",
    "imageUrl"
];
var CarService = /** @class */ (function () {
    function CarService() {
        this.baseUrl = 'http://192.168.1.95:8081/demo';
        this.allCars = [];
        this.carsStore = kinvey_nativescript_sdk_1.Kinvey.DataStore.collection("cars");
    }
    CarService.cloneUpdateModel = function (car) {
        // tslint:disable-next-line:ban-comma-operator
        return editableProperties.reduce(function (a, e) { return (a[e] = car[e], a); }, { _id: car.id });
    };
    CarService.prototype.getCarById = function (id) {
        if (!id) {
            return;
        }
        return this.allCars.filter(function (car) {
            return car.id == id;
        })[0];
    };
    CarService.prototype.begin = function () {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http_1.request({
                url: _this.baseUrl + "/car/",
                method: "GET",
                headers: { "Content-Type": "application/json" },
            }).then(function (response) {
                var result = response.content.toJSON();
                console.log(result);
                _this.allCars = [];
                result.forEach(function (element) {
                    var car = new car_model_1.Car(element);
                    console.log(car);
                    _this.allCars.push(car);
                });
                resolve(_this.allCars);
                return _this.allCars;
            });
        });
    };
    CarService.prototype.update = function (carModel) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http_1.request({
                url: _this.baseUrl + "/car/update/" + carModel.id,
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                    class: carModel.class,
                    doors: carModel.doors,
                    hasAC: carModel.hasAC,
                    transmission: carModel.transmission,
                    luggage: carModel.luggage,
                    name: carModel.name,
                    price: carModel.price,
                    seats: carModel.seats
                })
            }).then(function (response) {
                console.log(response);
                resolve("success");
            });
        });
    };
    CarService.prototype.uploadImage = function (remoteFullPath, localFullPath) {
        var imageFile = file_system_1.File.fromPath(localFullPath);
        var imageContent = imageFile.readSync();
        var metadata = {
            filename: imageFile.name,
            mimeType: this.getMimeType(imageFile.extension),
            size: imageContent.length,
            public: true
        };
        return kinvey_nativescript_sdk_1.Kinvey.Files.upload(imageFile, metadata, { timeout: 2147483647 })
            .then(function (uploadedFile) {
            var query = new kinvey_nativescript_sdk_1.Kinvey.Query();
            query.equalTo("_id", uploadedFile._id);
            return kinvey_nativescript_sdk_1.Kinvey.Files.find(query);
        })
            .then(function (files) {
            if (files && files.length) {
                var file = files[0];
                file.url = file._downloadURL;
                return file;
            }
            else {
                Promise.reject(new Error("No items with the given ID could be found."));
            }
        });
    };
    // private login(): Promise<any> {
    //     if (!!Kinvey.User.getActiveUser()) {
    //         return Promise.resolve();
    //     } else {
    //         return Kinvey.User.login(Config.kinveyUsername, Config.kinveyPassword);
    //     }
    // }
    CarService.prototype.getMimeType = function (imageExtension) {
        var extension = imageExtension === "jpg" ? "jpeg" : imageExtension;
        return "image/" + extension.replace(/\./g, "");
    };
    CarService.prototype.handleErrors = function (error) {
        console.error(error);
    };
    CarService.prototype.register = function (user) {
        this.registerBE(user);
    };
    CarService.prototype.registerBE = function (user) {
        this.createUser(user);
    };
    CarService.prototype.login = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http_1.request({
                url: _this.baseUrl + "/user/login",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                    email: user.email,
                    password: user.password
                })
            }).then(function (response) {
                var result = response.content.toJSON();
                console.log(result);
                resolve("success");
                return user;
            }).catch(function (error) { _this.handleErrors(error); reject(); });
        });
    };
    CarService.prototype.resetPassword = function (email) {
        return kinvey_nativescript_sdk_1.Kinvey.User.resetPassword(email)
            .catch(this.handleErrors);
    };
    CarService.prototype.createUser = function (user) {
        var _this = this;
        return new Promise(function (resolve, reject) {
            http_1.request({
                url: _this.baseUrl + "/user/create",
                method: "POST",
                headers: { "Content-Type": "application/json" },
                content: JSON.stringify({
                    email: user.email,
                    password: user.password
                })
            }).then(resolve)
                .catch(function (error) { _this.handleErrors(error); reject(); });
        });
    };
    CarService = __decorate([
        core_1.Injectable({
            providedIn: "root"
        })
    ], CarService);
    return CarService;
}());
exports.CarService = CarService;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY2FyLnNlcnZpY2UuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJjYXIuc2VydmljZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUEyQztBQUMzQyxtRUFBaUQ7QUFDakQsNERBQW9EO0FBRXBELHlDQUFrQztBQUNsQyw4Q0FBdUY7QUFHdkYsSUFBTSxrQkFBa0IsR0FBRztJQUN2QixPQUFPO0lBQ1AsT0FBTztJQUNQLE9BQU87SUFDUCxjQUFjO0lBQ2QsU0FBUztJQUNULE1BQU07SUFDTixPQUFPO0lBQ1AsT0FBTztJQUNQLFVBQVU7Q0FDYixDQUFDO0FBS0Y7SUFIQTtRQUlVLFlBQU8sR0FBRywrQkFBK0IsQ0FBQztRQU94QyxZQUFPLEdBQWUsRUFBRSxDQUFDO1FBQ3pCLGNBQVMsR0FBRyxnQ0FBTSxDQUFDLFNBQVMsQ0FBQyxVQUFVLENBQU0sTUFBTSxDQUFDLENBQUM7SUE2S2pFLENBQUM7SUFuTGtCLDJCQUFnQixHQUEvQixVQUFnQyxHQUFRO1FBQ3BDLDhDQUE4QztRQUM5QyxPQUFPLGtCQUFrQixDQUFDLE1BQU0sQ0FBQyxVQUFDLENBQUMsRUFBRSxDQUFDLElBQUssT0FBQSxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUMsR0FBRyxHQUFHLENBQUMsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxDQUFDLEVBQWxCLENBQWtCLEVBQUUsRUFBRSxHQUFHLEVBQUUsR0FBRyxDQUFDLEVBQUUsRUFBRSxDQUFDLENBQUM7SUFDcEYsQ0FBQztJQUtELCtCQUFVLEdBQVYsVUFBVyxFQUFVO1FBQ2pCLElBQUksQ0FBQyxFQUFFLEVBQUU7WUFDTCxPQUFPO1NBQ1Y7UUFFRCxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLFVBQUMsR0FBRztZQUMzQixPQUFPLEdBQUcsQ0FBQyxFQUFFLElBQUksRUFBRSxDQUFDO1FBQ3hCLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQyxDQUFDO0lBQ1YsQ0FBQztJQUNELDBCQUFLLEdBQUw7UUFB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aUJBaUJPO1FBZkMsT0FBTyxJQUFJLE9BQU8sQ0FBQyxVQUFDLE9BQU8sRUFBRSxNQUFNO1lBQ2pDLGNBQU8sQ0FBQztnQkFDRixHQUFHLEVBQUUsS0FBSSxDQUFDLE9BQU8sR0FBQyxjQUFjO2dCQUNoQyxNQUFNLEVBQUUsTUFBTTtnQkFDZCxPQUFPLEVBQUUsRUFBRSxjQUFjLEVBQUUsa0JBQWtCLEVBQUU7Z0JBQy9DLE9BQU8sRUFBRSxJQUFJLENBQUMsU0FBUyxDQUFDO29CQUVwQixLQUFLLEVBQUMsSUFBSSxDQUFDLEtBQUs7b0JBQ2hCLFFBQVEsRUFBQyxJQUFJLENBQUMsUUFBUTtpQkFDekIsQ0FBQzthQUNMLENBQUMsQ0FBRyxJQUFJLENBQUMsT0FBTyxDQUFDO2lCQUNmLEtBQUssQ0FBQyxVQUFDLEtBQUssSUFBTyxLQUFJLENBQUMsWUFBWSxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUMsTUFBTSxFQUFFLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQTtRQUN0RSxDQUFDLENBQUMsQ0FBQztJQUdDLENBQUM7SUFyTEksVUFBVTtRQUh0QixpQkFBVSxDQUFDO1lBQ1IsVUFBVSxFQUFFLE1BQU07U0FDckIsQ0FBQztPQUNXLFVBQVUsQ0FzTHRCO0lBQUQsaUJBQUM7Q0FBQSxBQXRMRCxJQXNMQztBQXRMWSxnQ0FBVSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IEluamVjdGFibGUgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgS2ludmV5IH0gZnJvbSBcImtpbnZleS1uYXRpdmVzY3JpcHQtc2RrXCI7XG5pbXBvcnQgeyBGaWxlIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuLi8uLi9zaGFyZWQvY29uZmlnXCI7XG5pbXBvcnQgeyBDYXIgfSBmcm9tIFwiLi9jYXIubW9kZWxcIjtcbmltcG9ydCB7IHJlcXVlc3QsIGdldEZpbGUsIGdldEltYWdlLCBnZXRKU09OLCBnZXRTdHJpbmcgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9odHRwXCI7XG5pbXBvcnQgeyBIdHRwQ2xpZW50IH0gZnJvbSAnQGFuZ3VsYXIvY29tbW9uL2h0dHAnO1xuaW1wb3J0IHsgVXNlciB9IGZyb20gXCIuL3VzZXIubW9kZWxcIjtcbmNvbnN0IGVkaXRhYmxlUHJvcGVydGllcyA9IFtcbiAgICBcImNsYXNzXCIsXG4gICAgXCJkb29yc1wiLFxuICAgIFwiaGFzQUNcIixcbiAgICBcInRyYW5zbWlzc2lvblwiLFxuICAgIFwibHVnZ2FnZVwiLFxuICAgIFwibmFtZVwiLFxuICAgIFwicHJpY2VcIixcbiAgICBcInNlYXRzXCIsXG4gICAgXCJpbWFnZVVybFwiXG5dO1xuXG5ASW5qZWN0YWJsZSh7XG4gICAgcHJvdmlkZWRJbjogXCJyb290XCJcbn0pXG5leHBvcnQgY2xhc3MgQ2FyU2VydmljZSB7XG4gIHByaXZhdGUgYmFzZVVybCA9ICdodHRwOi8vMTkyLjE2OC4xLjk1OjgwODEvZGVtbyc7XG5cbiAgICBwcml2YXRlIHN0YXRpYyBjbG9uZVVwZGF0ZU1vZGVsKGNhcjogQ2FyKTogb2JqZWN0IHtcbiAgICAgICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOmJhbi1jb21tYS1vcGVyYXRvclxuICAgICAgICByZXR1cm4gZWRpdGFibGVQcm9wZXJ0aWVzLnJlZHVjZSgoYSwgZSkgPT4gKGFbZV0gPSBjYXJbZV0sIGEpLCB7IF9pZDogY2FyLmlkIH0pO1xuICAgIH1cblxuICAgIHByaXZhdGUgYWxsQ2FyczogQXJyYXk8Q2FyPiA9IFtdO1xuICAgIHByaXZhdGUgY2Fyc1N0b3JlID0gS2ludmV5LkRhdGFTdG9yZS5jb2xsZWN0aW9uPGFueT4oXCJjYXJzXCIpO1xuXG4gICAgZ2V0Q2FyQnlJZChpZDogc3RyaW5nKTogQ2FyIHtcbiAgICAgICAgaWYgKCFpZCkge1xuICAgICAgICAgICAgcmV0dXJuO1xuICAgICAgICB9XG5cbiAgICAgICAgcmV0dXJuIHRoaXMuYWxsQ2Fycy5maWx0ZXIoKGNhcikgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIGNhci5pZCA9PSBpZDtcbiAgICAgICAgfSlbMF07XG4gICAgfVxuICAgIGJlZ2luKCkgOlByb21pc2U8YW55PlxuICAgICAgICB7XG4gICAgICAgICAgcmV0dXJuIG5ldyBQcm9taXNlKChyZXNvbHZlLCByZWplY3QpID0+IHtcbiAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgdXJsOiB0aGlzLmJhc2VVcmwrXCIvY2FyL1wiLFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIkdFVFwiLFxuICAgICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuXG4gICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgY29uc3QgcmVzdWx0ID0gcmVzcG9uc2UuY29udGVudC50b0pTT04oKTtcbiAgICAgICAgICAgICBjb25zb2xlLmxvZyhyZXN1bHQpO1xuICAgICAgICAgICAgIHRoaXMuYWxsQ2FycyA9IFtdO1xuXG4gICAgICAgICAgICAgcmVzdWx0LmZvckVhY2goZWxlbWVudCA9PiB7XG4gICAgICAgICAgICAgICBjb25zdCBjYXIgPSBuZXcgQ2FyKGVsZW1lbnQpO1xuICAgICAgICAgICAgICAgICBjb25zb2xlLmxvZyhjYXIpO1xuICAgICAgICAgICAgICAgIHRoaXMuYWxsQ2Fycy5wdXNoKGNhcik7XG4gICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgcmVzb2x2ZSh0aGlzLmFsbENhcnMpO1xuICAgICAgICAgICAgIHJldHVybiB0aGlzLmFsbENhcnM7XG4gICAgICAgICAgIH0pXG5cbiAgICAgICAgICB9KSA7XG4gICAgICAgIH1cblxuXG4gICAgdXBkYXRlKGNhck1vZGVsOiBDYXIpOiBQcm9taXNlPGFueT4ge1xuXG4gICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG5cbiAgICAgICAgICByZXF1ZXN0KHtcbiAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCtcIi9jYXIvdXBkYXRlL1wiK2Nhck1vZGVsLmlkLFxuICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgaGVhZGVyczogeyBcIkNvbnRlbnQtVHlwZVwiOiBcImFwcGxpY2F0aW9uL2pzb25cIiB9LFxuICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgICAgIGNsYXNzOmNhck1vZGVsLmNsYXNzLFxuICAgICAgICAgICAgICAgICAgZG9vcnM6Y2FyTW9kZWwuZG9vcnMsXG4gICAgICAgICAgICAgICAgICBoYXNBQzpjYXJNb2RlbC5oYXNBQyxcbiAgICAgICAgICAgICAgICAgIHRyYW5zbWlzc2lvbjpjYXJNb2RlbC50cmFuc21pc3Npb24sXG4gICAgICAgICAgICAgICAgICBsdWdnYWdlOmNhck1vZGVsLmx1Z2dhZ2UsXG4gICAgICAgICAgICAgICAgICBuYW1lOmNhck1vZGVsLm5hbWUsXG4gICAgICAgICAgICAgICAgICBwcmljZTpjYXJNb2RlbC5wcmljZSxcbiAgICAgICAgICAgICAgICAgIHNlYXRzOmNhck1vZGVsLnNlYXRzXG5cblxuICAgICAgICAgICAgICAgIH0pXG5cbiAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG5cbiAgICAgICAgICAgY29uc29sZS5sb2cocmVzcG9uc2UpO1xuXG4gICAgICAgICAgIHJlc29sdmUoXCJzdWNjZXNzXCIpO1xuXG4gICAgICAgICB9KVxuXG4gICAgICAgIH0pIDtcblxuICAgIH1cblxuICAgIHVwbG9hZEltYWdlKHJlbW90ZUZ1bGxQYXRoOiBzdHJpbmcsIGxvY2FsRnVsbFBhdGg6IHN0cmluZyk6IFByb21pc2U8YW55PiB7XG4gICAgICAgIGNvbnN0IGltYWdlRmlsZSA9IEZpbGUuZnJvbVBhdGgobG9jYWxGdWxsUGF0aCk7XG4gICAgICAgIGNvbnN0IGltYWdlQ29udGVudCA9IGltYWdlRmlsZS5yZWFkU3luYygpO1xuXG4gICAgICAgIGNvbnN0IG1ldGFkYXRhID0ge1xuICAgICAgICAgICAgZmlsZW5hbWU6IGltYWdlRmlsZS5uYW1lLFxuICAgICAgICAgICAgbWltZVR5cGU6IHRoaXMuZ2V0TWltZVR5cGUoaW1hZ2VGaWxlLmV4dGVuc2lvbiksXG4gICAgICAgICAgICBzaXplOiBpbWFnZUNvbnRlbnQubGVuZ3RoLFxuICAgICAgICAgICAgcHVibGljOiB0cnVlXG4gICAgICAgIH07XG5cbiAgICAgICAgcmV0dXJuIEtpbnZleS5GaWxlcy51cGxvYWQoaW1hZ2VGaWxlLCBtZXRhZGF0YSwgeyB0aW1lb3V0OiAyMTQ3NDgzNjQ3IH0pXG4gICAgICAgICAgICAudGhlbigodXBsb2FkZWRGaWxlOiBhbnkpID0+IHtcbiAgICAgICAgICAgICAgICBjb25zdCBxdWVyeSA9IG5ldyBLaW52ZXkuUXVlcnkoKTtcbiAgICAgICAgICAgICAgICBxdWVyeS5lcXVhbFRvKFwiX2lkXCIsIHVwbG9hZGVkRmlsZS5faWQpO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIEtpbnZleS5GaWxlcy5maW5kKHF1ZXJ5KTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAudGhlbigoZmlsZXM6IEFycmF5PGFueT4pID0+IHtcbiAgICAgICAgICAgICAgICBpZiAoZmlsZXMgJiYgZmlsZXMubGVuZ3RoKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZpbGUgPSBmaWxlc1swXTtcbiAgICAgICAgICAgICAgICAgICAgZmlsZS51cmwgPSBmaWxlLl9kb3dubG9hZFVSTDtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZmlsZTtcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgICAgICBQcm9taXNlLnJlamVjdChuZXcgRXJyb3IoXCJObyBpdGVtcyB3aXRoIHRoZSBnaXZlbiBJRCBjb3VsZCBiZSBmb3VuZC5cIikpO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH0pO1xuICAgIH1cblxuICAgIC8vIHByaXZhdGUgbG9naW4oKTogUHJvbWlzZTxhbnk+IHtcbiAgICAvLyAgICAgaWYgKCEhS2ludmV5LlVzZXIuZ2V0QWN0aXZlVXNlcigpKSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gUHJvbWlzZS5yZXNvbHZlKCk7XG4gICAgLy8gICAgIH0gZWxzZSB7XG4gICAgLy8gICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIubG9naW4oQ29uZmlnLmtpbnZleVVzZXJuYW1lLCBDb25maWcua2ludmV5UGFzc3dvcmQpO1xuICAgIC8vICAgICB9XG4gICAgLy8gfVxuXG4gICAgcHJpdmF0ZSBnZXRNaW1lVHlwZShpbWFnZUV4dGVuc2lvbjogc3RyaW5nKTogc3RyaW5nIHtcbiAgICAgICAgY29uc3QgZXh0ZW5zaW9uID0gaW1hZ2VFeHRlbnNpb24gPT09IFwianBnXCIgPyBcImpwZWdcIiA6IGltYWdlRXh0ZW5zaW9uO1xuXG4gICAgICAgIHJldHVybiBcImltYWdlL1wiICsgZXh0ZW5zaW9uLnJlcGxhY2UoL1xcLi9nLCBcIlwiKTtcbiAgICB9XG5cbiAgICAgICAgaGFuZGxlRXJyb3JzKGVycm9yOlN0cmluZykge1xuICAgICAgICAgICAgY29uc29sZS5lcnJvcihlcnJvcik7XG4gICAgICAgIH1cbiAgICAgICAgcmVnaXN0ZXIodXNlcjogVXNlcikge1xuICAgICAgICAgIHRoaXMucmVnaXN0ZXJCRSh1c2VyKTtcblxuICAgICAgICB9XG4gICAgICAgIHJlZ2lzdGVyQkUodXNlcjogVXNlcikge1xuICAgICAgICAgIHRoaXMuY3JlYXRlVXNlcih1c2VyKSA7XG5cblxuXG4gICAgICAgIH1cblxuICAgIGxvZ2luKHVzZXI6IFVzZXIpOiBQcm9taXNlPGFueT4gIHtcbiAgICAgICAgICAgIHJldHVybiBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PiB7XG4gICAgICAgICAgICAgIHJlcXVlc3Qoe1xuICAgICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCtcIi91c2VyL2xvZ2luXCIsXG4gICAgICAgICAgICAgICAgICAgIG1ldGhvZDogXCJQT1NUXCIsXG4gICAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgICAgICAgICAgY29udGVudDogSlNPTi5zdHJpbmdpZnkoe1xuXG4gICAgICAgICAgICAgICAgICAgICAgICBlbWFpbDp1c2VyLmVtYWlsLFxuICAgICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6dXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIH0pLnRoZW4oKHJlc3BvbnNlKSA9PiB7XG4gICAgICAgICAgICAgICBjb25zdCByZXN1bHQgPSByZXNwb25zZS5jb250ZW50LnRvSlNPTigpO1xuICAgICAgICAgICAgICAgY29uc29sZS5sb2cocmVzdWx0KTtcbiAgICAgICAgICAgICAgIHJlc29sdmUoXCJzdWNjZXNzXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybiB1c2VyO1xuICAgICAgICAgICAgIH0pLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxuXG5cbiAgICAgICAgICAgIH0pO1xuXG4gICAgICAgIH1cblxuICAgICAgICByZXNldFBhc3N3b3JkKGVtYWlsKSB7XG4gICAgICAgICAgICByZXR1cm4gS2ludmV5LlVzZXIucmVzZXRQYXNzd29yZChlbWFpbClcbiAgICAgICAgICAgICAgICAuY2F0Y2godGhpcy5oYW5kbGVFcnJvcnMpO1xuICAgICAgICB9XG4gIGNyZWF0ZVVzZXIodXNlcjogVXNlcil7XG5cbiAgICAgICAgICByZXR1cm4gbmV3IFByb21pc2UoKHJlc29sdmUsIHJlamVjdCkgPT4ge1xuICAgICAgICAgICAgcmVxdWVzdCh7XG4gICAgICAgICAgICAgICAgICB1cmw6IHRoaXMuYmFzZVVybCtcIi91c2VyL2NyZWF0ZVwiLFxuICAgICAgICAgICAgICAgICAgbWV0aG9kOiBcIlBPU1RcIixcbiAgICAgICAgICAgICAgICAgIGhlYWRlcnM6IHsgXCJDb250ZW50LVR5cGVcIjogXCJhcHBsaWNhdGlvbi9qc29uXCIgfSxcbiAgICAgICAgICAgICAgICAgIGNvbnRlbnQ6IEpTT04uc3RyaW5naWZ5KHtcblxuICAgICAgICAgICAgICAgICAgICAgIGVtYWlsOnVzZXIuZW1haWwsXG4gICAgICAgICAgICAgICAgICAgICAgcGFzc3dvcmQ6dXNlci5wYXNzd29yZFxuICAgICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICAgfSkgIC50aGVuKHJlc29sdmUpXG4gICAgICAgICAgICAgICAgLmNhdGNoKChlcnJvcikgPT4geyB0aGlzLmhhbmRsZUVycm9ycyhlcnJvcik7IHJlamVjdCgpOyB9KVxuICAgIH0pO1xuXG5cbiAgICAgICAgfVxufVxuIl19