"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var forms_1 = require("@angular/forms");
var imagePicker = require("nativescript-imagepicker");
var file_system_1 = require("tns-core-modules/file-system");
var image_source_1 = require("tns-core-modules/image-source");
var tempImageFolderName = "nsimagepicker";
var noop = function () { }; // tslint:disable-line no-empty
var MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR = {
    provide: forms_1.NG_VALUE_ACCESSOR,
    useExisting: core_1.forwardRef(function () { return MyImageAddRemoveComponent; }),
    multi: true
};
/* ***********************************************************
* The MyImageAddRemove custom component uses an imagepicker plugin to let the user select
* an image and provides custom logic and design to the process.
*************************************************************/
var MyImageAddRemoveComponent = /** @class */ (function () {
    function MyImageAddRemoveComponent() {
        // placeholder for the callback later provided by the ControlValueAccessor
        this.propagateChange = noop;
        this.innerImageUrl = "";
    }
    MyImageAddRemoveComponent_1 = MyImageAddRemoveComponent;
    Object.defineProperty(MyImageAddRemoveComponent, "imageTempFolder", {
        get: function () {
            return file_system_1.knownFolders.temp().getFolder(tempImageFolderName);
        },
        enumerable: true,
        configurable: true
    });
    MyImageAddRemoveComponent.clearImageTempFolder = function () {
        MyImageAddRemoveComponent_1.imageTempFolder.clear();
    };
    Object.defineProperty(MyImageAddRemoveComponent.prototype, "imageUrl", {
        get: function () {
            return this.innerImageUrl;
        },
        set: function (value) {
            if (this.innerImageUrl !== value) {
                this.innerImageUrl = value;
                this.propagateChange(value);
            }
        },
        enumerable: true,
        configurable: true
    });
    // ControlValueAccessor implementation
    MyImageAddRemoveComponent.prototype.writeValue = function (value) {
        if (this.innerImageUrl !== value) {
            this.innerImageUrl = value;
        }
    };
    // ControlValueAccessor implementation
    MyImageAddRemoveComponent.prototype.registerOnChange = function (fn) {
        this.propagateChange = fn;
    };
    // ControlValueAccessor implementation
    // tslint:disable-next-line:no-empty
    MyImageAddRemoveComponent.prototype.registerOnTouched = function (fn) {
    };
    MyImageAddRemoveComponent.prototype.onImageAddRemoveTap = function () {
        if (this.imageUrl) {
            this.handleImageChange(null);
            return;
        }
        MyImageAddRemoveComponent_1.clearImageTempFolder();
        this.pickImage();
    };
    MyImageAddRemoveComponent.prototype.pickImage = function () {
        var _this = this;
        var context = imagePicker.create({
            mode: "single"
        });
        context
            .authorize()
            .then(function () { return context.present(); })
            .then(function (selection) { return selection.forEach(function (selectedAsset) {
            selectedAsset.options.height = 768;
            image_source_1.fromAsset(selectedAsset)
                .then(function (imageSource) { return _this.handleImageChange(imageSource); });
        }); }).catch(function (errorMessage) { return console.log(errorMessage); });
    };
    MyImageAddRemoveComponent.prototype.handleImageChange = function (source) {
        var raisePropertyChange = true;
        var tempImagePath = null;
        if (source) {
            tempImagePath = file_system_1.path.join(MyImageAddRemoveComponent_1.imageTempFolder.path, Date.now() + ".jpg");
            raisePropertyChange = source.saveToFile(tempImagePath, "jpeg");
        }
        if (raisePropertyChange) {
            this.imageUrl = tempImagePath;
        }
    };
    var MyImageAddRemoveComponent_1;
    MyImageAddRemoveComponent = MyImageAddRemoveComponent_1 = __decorate([
        core_1.Component({
            selector: "MyImageAddRemove",
            moduleId: module.id,
            templateUrl: "./my-image-add-remove.component.html",
            styleUrls: ["./my-image-add-remove.component.scss"],
            providers: [MY_IMAGE_ADD_REMOVE_CONTROL_VALUE_ACCESSOR]
        })
    ], MyImageAddRemoveComponent);
    return MyImageAddRemoveComponent;
}());
exports.MyImageAddRemoveComponent = MyImageAddRemoveComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJteS1pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLHNDQUFxRTtBQUNyRSx3Q0FBeUU7QUFDekUsc0RBQXdEO0FBQ3hELDREQUEwRTtBQUUxRSw4REFBdUU7QUFFdkUsSUFBTSxtQkFBbUIsR0FBRyxlQUFlLENBQUM7QUFDNUMsSUFBTSxJQUFJLEdBQUcsY0FBUSxDQUFDLENBQUMsQ0FBQywrQkFBK0I7QUFFdkQsSUFBTSwwQ0FBMEMsR0FBRztJQUMvQyxPQUFPLEVBQUUseUJBQWlCO0lBQzFCLFdBQVcsRUFBRSxpQkFBVSxDQUFDLGNBQU0sT0FBQSx5QkFBeUIsRUFBekIsQ0FBeUIsQ0FBQztJQUN4RCxLQUFLLEVBQUUsSUFBSTtDQUNkLENBQUM7QUFFRjs7OzhEQUc4RDtBQVE5RDtJQVBBO1FBZ0JJLDBFQUEwRTtRQUNsRSxvQkFBZSxHQUFxQixJQUFJLENBQUM7UUFFekMsa0JBQWEsR0FBVyxFQUFFLENBQUM7SUF3RXZDLENBQUM7a0NBcEZZLHlCQUF5QjtJQUNsQyxzQkFBVyw0Q0FBZTthQUExQjtZQUNJLE9BQU8sMEJBQVksQ0FBQyxJQUFJLEVBQUUsQ0FBQyxTQUFTLENBQUMsbUJBQW1CLENBQUMsQ0FBQztRQUM5RCxDQUFDOzs7T0FBQTtJQUVjLDhDQUFvQixHQUFuQztRQUNJLDJCQUF5QixDQUFDLGVBQWUsQ0FBQyxLQUFLLEVBQUUsQ0FBQztJQUN0RCxDQUFDO0lBT0Qsc0JBQUksK0NBQVE7YUFBWjtZQUNJLE9BQU8sSUFBSSxDQUFDLGFBQWEsQ0FBQztRQUM5QixDQUFDO2FBRUQsVUFBYSxLQUFhO1lBQ3RCLElBQUksSUFBSSxDQUFDLGFBQWEsS0FBSyxLQUFLLEVBQUU7Z0JBQzlCLElBQUksQ0FBQyxhQUFhLEdBQUcsS0FBSyxDQUFDO2dCQUMzQixJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssQ0FBQyxDQUFDO2FBQy9CO1FBQ0wsQ0FBQzs7O09BUEE7SUFTRCxzQ0FBc0M7SUFDdEMsOENBQVUsR0FBVixVQUFXLEtBQWE7UUFDcEIsSUFBSSxJQUFJLENBQUMsYUFBYSxLQUFLLEtBQUssRUFBRTtZQUM5QixJQUFJLENBQUMsYUFBYSxHQUFHLEtBQUssQ0FBQztTQUM5QjtJQUNMLENBQUM7SUFFRCxzQ0FBc0M7SUFDdEMsb0RBQWdCLEdBQWhCLFVBQWlCLEVBQU87UUFDcEIsSUFBSSxDQUFDLGVBQWUsR0FBRyxFQUFFLENBQUM7SUFDOUIsQ0FBQztJQUVELHNDQUFzQztJQUN0QyxvQ0FBb0M7SUFDcEMscURBQWlCLEdBQWpCLFVBQWtCLEVBQU87SUFDekIsQ0FBQztJQUVELHVEQUFtQixHQUFuQjtRQUNJLElBQUksSUFBSSxDQUFDLFFBQVEsRUFBRTtZQUNmLElBQUksQ0FBQyxpQkFBaUIsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUU3QixPQUFPO1NBQ1Y7UUFFRCwyQkFBeUIsQ0FBQyxvQkFBb0IsRUFBRSxDQUFDO1FBRWpELElBQUksQ0FBQyxTQUFTLEVBQUUsQ0FBQztJQUNyQixDQUFDO0lBRUQsNkNBQVMsR0FBVDtRQUFBLGlCQWVDO1FBZEcsSUFBTSxPQUFPLEdBQUcsV0FBVyxDQUFDLE1BQU0sQ0FBQztZQUMvQixJQUFJLEVBQUUsUUFBUTtTQUNqQixDQUFDLENBQUM7UUFFSCxPQUFPO2FBQ0YsU0FBUyxFQUFFO2FBQ1gsSUFBSSxDQUFDLGNBQU0sT0FBQSxPQUFPLENBQUMsT0FBTyxFQUFFLEVBQWpCLENBQWlCLENBQUM7YUFDN0IsSUFBSSxDQUFDLFVBQUMsU0FBUyxJQUFLLE9BQUEsU0FBUyxDQUFDLE9BQU8sQ0FDbEMsVUFBQyxhQUF5QjtZQUN0QixhQUFhLENBQUMsT0FBTyxDQUFDLE1BQU0sR0FBRyxHQUFHLENBQUM7WUFDbkMsd0JBQVMsQ0FBQyxhQUFhLENBQUM7aUJBQ25CLElBQUksQ0FBQyxVQUFDLFdBQXdCLElBQUssT0FBQSxLQUFJLENBQUMsaUJBQWlCLENBQUMsV0FBVyxDQUFDLEVBQW5DLENBQW1DLENBQUMsQ0FBQztRQUNqRixDQUFDLENBQUMsRUFMZSxDQUtmLENBQ0wsQ0FBQyxLQUFLLENBQUMsVUFBQyxZQUFpQixJQUFLLE9BQUEsT0FBTyxDQUFDLEdBQUcsQ0FBQyxZQUFZLENBQUMsRUFBekIsQ0FBeUIsQ0FBQyxDQUFDO0lBQ2xFLENBQUM7SUFFTyxxREFBaUIsR0FBekIsVUFBMEIsTUFBbUI7UUFDekMsSUFBSSxtQkFBbUIsR0FBRyxJQUFJLENBQUM7UUFDL0IsSUFBSSxhQUFhLEdBQUcsSUFBSSxDQUFDO1FBRXpCLElBQUksTUFBTSxFQUFFO1lBQ1IsYUFBYSxHQUFHLGtCQUFJLENBQUMsSUFBSSxDQUFDLDJCQUF5QixDQUFDLGVBQWUsQ0FBQyxJQUFJLEVBQUssSUFBSSxDQUFDLEdBQUcsRUFBRSxTQUFNLENBQUMsQ0FBQztZQUMvRixtQkFBbUIsR0FBRyxNQUFNLENBQUMsVUFBVSxDQUFDLGFBQWEsRUFBRSxNQUFNLENBQUMsQ0FBQztTQUNsRTtRQUVELElBQUksbUJBQW1CLEVBQUU7WUFDckIsSUFBSSxDQUFDLFFBQVEsR0FBRyxhQUFhLENBQUM7U0FDakM7SUFDTCxDQUFDOztJQW5GUSx5QkFBeUI7UUFQckMsZ0JBQVMsQ0FBQztZQUNQLFFBQVEsRUFBRSxrQkFBa0I7WUFDNUIsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1lBQ25CLFdBQVcsRUFBRSxzQ0FBc0M7WUFDbkQsU0FBUyxFQUFFLENBQUMsc0NBQXNDLENBQUM7WUFDbkQsU0FBUyxFQUFFLENBQUMsMENBQTBDLENBQUM7U0FDMUQsQ0FBQztPQUNXLHlCQUF5QixDQW9GckM7SUFBRCxnQ0FBQztDQUFBLEFBcEZELElBb0ZDO0FBcEZZLDhEQUF5QiIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgZm9yd2FyZFJlZiwgSW5wdXQsIE91dHB1dCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBDb250cm9sVmFsdWVBY2Nlc3NvciwgTkdfVkFMVUVfQUNDRVNTT1IgfSBmcm9tIFwiQGFuZ3VsYXIvZm9ybXNcIjtcbmltcG9ydCAqIGFzIGltYWdlUGlja2VyIGZyb20gXCJuYXRpdmVzY3JpcHQtaW1hZ2VwaWNrZXJcIjtcbmltcG9ydCB7IEZvbGRlciwga25vd25Gb2xkZXJzLCBwYXRoIH0gZnJvbSBcInRucy1jb3JlLW1vZHVsZXMvZmlsZS1zeXN0ZW1cIjtcbmltcG9ydCB7IEltYWdlQXNzZXQgfSBmcm9tIFwidG5zLWNvcmUtbW9kdWxlcy9pbWFnZS1hc3NldFwiO1xuaW1wb3J0IHsgZnJvbUFzc2V0LCBJbWFnZVNvdXJjZSB9IGZyb20gXCJ0bnMtY29yZS1tb2R1bGVzL2ltYWdlLXNvdXJjZVwiO1xuXG5jb25zdCB0ZW1wSW1hZ2VGb2xkZXJOYW1lID0gXCJuc2ltYWdlcGlja2VyXCI7XG5jb25zdCBub29wID0gKCkgPT4geyB9OyAvLyB0c2xpbnQ6ZGlzYWJsZS1saW5lIG5vLWVtcHR5XG5cbmNvbnN0IE1ZX0lNQUdFX0FERF9SRU1PVkVfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUiA9IHtcbiAgICBwcm92aWRlOiBOR19WQUxVRV9BQ0NFU1NPUixcbiAgICB1c2VFeGlzdGluZzogZm9yd2FyZFJlZigoKSA9PiBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50KSwgLy8gdHNsaW50OmRpc2FibGUtbGluZSBuby1mb3J3YXJkLXJlZlxuICAgIG11bHRpOiB0cnVlXG59O1xuXG4vKiAqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKlxuKiBUaGUgTXlJbWFnZUFkZFJlbW92ZSBjdXN0b20gY29tcG9uZW50IHVzZXMgYW4gaW1hZ2VwaWNrZXIgcGx1Z2luIHRvIGxldCB0aGUgdXNlciBzZWxlY3RcbiogYW4gaW1hZ2UgYW5kIHByb3ZpZGVzIGN1c3RvbSBsb2dpYyBhbmQgZGVzaWduIHRvIHRoZSBwcm9jZXNzLlxuKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKi9cbkBDb21wb25lbnQoe1xuICAgIHNlbGVjdG9yOiBcIk15SW1hZ2VBZGRSZW1vdmVcIixcbiAgICBtb2R1bGVJZDogbW9kdWxlLmlkLFxuICAgIHRlbXBsYXRlVXJsOiBcIi4vbXktaW1hZ2UtYWRkLXJlbW92ZS5jb21wb25lbnQuaHRtbFwiLFxuICAgIHN0eWxlVXJsczogW1wiLi9teS1pbWFnZS1hZGQtcmVtb3ZlLmNvbXBvbmVudC5zY3NzXCJdLFxuICAgIHByb3ZpZGVyczogW01ZX0lNQUdFX0FERF9SRU1PVkVfQ09OVFJPTF9WQUxVRV9BQ0NFU1NPUl1cbn0pXG5leHBvcnQgY2xhc3MgTXlJbWFnZUFkZFJlbW92ZUNvbXBvbmVudCBpbXBsZW1lbnRzIENvbnRyb2xWYWx1ZUFjY2Vzc29yIHtcbiAgICBzdGF0aWMgZ2V0IGltYWdlVGVtcEZvbGRlcigpOiBGb2xkZXIge1xuICAgICAgICByZXR1cm4ga25vd25Gb2xkZXJzLnRlbXAoKS5nZXRGb2xkZXIodGVtcEltYWdlRm9sZGVyTmFtZSk7XG4gICAgfVxuXG4gICAgcHJpdmF0ZSBzdGF0aWMgY2xlYXJJbWFnZVRlbXBGb2xkZXIoKTogdm9pZCB7XG4gICAgICAgIE15SW1hZ2VBZGRSZW1vdmVDb21wb25lbnQuaW1hZ2VUZW1wRm9sZGVyLmNsZWFyKCk7XG4gICAgfVxuXG4gICAgLy8gcGxhY2Vob2xkZXIgZm9yIHRoZSBjYWxsYmFjayBsYXRlciBwcm92aWRlZCBieSB0aGUgQ29udHJvbFZhbHVlQWNjZXNzb3JcbiAgICBwcml2YXRlIHByb3BhZ2F0ZUNoYW5nZTogKF86IGFueSkgPT4gdm9pZCA9IG5vb3A7XG5cbiAgICBwcml2YXRlIGlubmVySW1hZ2VVcmw6IHN0cmluZyA9IFwiXCI7XG5cbiAgICBnZXQgaW1hZ2VVcmwoKTogc3RyaW5nIHtcbiAgICAgICAgcmV0dXJuIHRoaXMuaW5uZXJJbWFnZVVybDtcbiAgICB9XG5cbiAgICBzZXQgaW1hZ2VVcmwodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5pbm5lckltYWdlVXJsICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckltYWdlVXJsID0gdmFsdWU7XG4gICAgICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSh2YWx1ZSk7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxuICAgIHdyaXRlVmFsdWUodmFsdWU6IHN0cmluZykge1xuICAgICAgICBpZiAodGhpcy5pbm5lckltYWdlVXJsICE9PSB2YWx1ZSkge1xuICAgICAgICAgICAgdGhpcy5pbm5lckltYWdlVXJsID0gdmFsdWU7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvLyBDb250cm9sVmFsdWVBY2Nlc3NvciBpbXBsZW1lbnRhdGlvblxuICAgIHJlZ2lzdGVyT25DaGFuZ2UoZm46IGFueSk6IHZvaWQge1xuICAgICAgICB0aGlzLnByb3BhZ2F0ZUNoYW5nZSA9IGZuO1xuICAgIH1cblxuICAgIC8vIENvbnRyb2xWYWx1ZUFjY2Vzc29yIGltcGxlbWVudGF0aW9uXG4gICAgLy8gdHNsaW50OmRpc2FibGUtbmV4dC1saW5lOm5vLWVtcHR5XG4gICAgcmVnaXN0ZXJPblRvdWNoZWQoZm46IGFueSk6IHZvaWQge1xuICAgIH1cblxuICAgIG9uSW1hZ2VBZGRSZW1vdmVUYXAoKTogdm9pZCB7XG4gICAgICAgIGlmICh0aGlzLmltYWdlVXJsKSB7XG4gICAgICAgICAgICB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlKG51bGwpO1xuXG4gICAgICAgICAgICByZXR1cm47XG4gICAgICAgIH1cblxuICAgICAgICBNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50LmNsZWFySW1hZ2VUZW1wRm9sZGVyKCk7XG5cbiAgICAgICAgdGhpcy5waWNrSW1hZ2UoKTtcbiAgICB9XG5cbiAgICBwaWNrSW1hZ2UoKTogdm9pZCB7XG4gICAgICAgIGNvbnN0IGNvbnRleHQgPSBpbWFnZVBpY2tlci5jcmVhdGUoe1xuICAgICAgICAgICAgbW9kZTogXCJzaW5nbGVcIlxuICAgICAgICB9KTtcblxuICAgICAgICBjb250ZXh0XG4gICAgICAgICAgICAuYXV0aG9yaXplKClcbiAgICAgICAgICAgIC50aGVuKCgpID0+IGNvbnRleHQucHJlc2VudCgpKVxuICAgICAgICAgICAgLnRoZW4oKHNlbGVjdGlvbikgPT4gc2VsZWN0aW9uLmZvckVhY2goXG4gICAgICAgICAgICAgICAgKHNlbGVjdGVkQXNzZXQ6IEltYWdlQXNzZXQpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgc2VsZWN0ZWRBc3NldC5vcHRpb25zLmhlaWdodCA9IDc2ODtcbiAgICAgICAgICAgICAgICAgICAgZnJvbUFzc2V0KHNlbGVjdGVkQXNzZXQpXG4gICAgICAgICAgICAgICAgICAgICAgICAudGhlbigoaW1hZ2VTb3VyY2U6IEltYWdlU291cmNlKSA9PiB0aGlzLmhhbmRsZUltYWdlQ2hhbmdlKGltYWdlU291cmNlKSk7XG4gICAgICAgICAgICAgICAgfSlcbiAgICAgICAgICAgICkuY2F0Y2goKGVycm9yTWVzc2FnZTogYW55KSA9PiBjb25zb2xlLmxvZyhlcnJvck1lc3NhZ2UpKTtcbiAgICB9XG5cbiAgICBwcml2YXRlIGhhbmRsZUltYWdlQ2hhbmdlKHNvdXJjZTogSW1hZ2VTb3VyY2UpOiB2b2lkIHtcbiAgICAgICAgbGV0IHJhaXNlUHJvcGVydHlDaGFuZ2UgPSB0cnVlO1xuICAgICAgICBsZXQgdGVtcEltYWdlUGF0aCA9IG51bGw7XG5cbiAgICAgICAgaWYgKHNvdXJjZSkge1xuICAgICAgICAgICAgdGVtcEltYWdlUGF0aCA9IHBhdGguam9pbihNeUltYWdlQWRkUmVtb3ZlQ29tcG9uZW50LmltYWdlVGVtcEZvbGRlci5wYXRoLCBgJHtEYXRlLm5vdygpfS5qcGdgKTtcbiAgICAgICAgICAgIHJhaXNlUHJvcGVydHlDaGFuZ2UgPSBzb3VyY2Uuc2F2ZVRvRmlsZSh0ZW1wSW1hZ2VQYXRoLCBcImpwZWdcIik7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAocmFpc2VQcm9wZXJ0eUNoYW5nZSkge1xuICAgICAgICAgICAgdGhpcy5pbWFnZVVybCA9IHRlbXBJbWFnZVBhdGg7XG4gICAgICAgIH1cbiAgICB9XG59XG4iXX0=