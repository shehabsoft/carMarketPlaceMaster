"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core");
var modal_dialog_1 = require("nativescript-angular/modal-dialog");
var MyListSelectorModalViewComponent = /** @class */ (function () {
    function MyListSelectorModalViewComponent(_params) {
        this._params = _params;
        this._title = _params.context.title;
        this._selectedIndex = _params.context.selectedIndex;
        this._items = [];
        for (var i = 0; i < _params.context.items.length; i++) {
            this._items.push({
                value: _params.context.items[i],
                isSelected: i === this._selectedIndex ? true : false
            });
        }
    }
    MyListSelectorModalViewComponent.prototype.onItemSelected = function (args) {
        var oldSelectedItem = this._items[this._selectedIndex];
        oldSelectedItem.isSelected = false;
        var newSelectedItem = this._items[args.index];
        newSelectedItem.isSelected = true;
        this._selectedIndex = args.index;
        this._params.closeCallback(newSelectedItem.value);
    };
    MyListSelectorModalViewComponent.prototype.onCancelButtonTap = function () {
        this._params.closeCallback(null);
    };
    Object.defineProperty(MyListSelectorModalViewComponent.prototype, "items", {
        get: function () {
            return this._items;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(MyListSelectorModalViewComponent.prototype, "title", {
        get: function () {
            return this._title;
        },
        enumerable: true,
        configurable: true
    });
    MyListSelectorModalViewComponent = __decorate([
        core_1.Component({
            selector: "MyListSelectorModalView",
            moduleId: module.id,
            templateUrl: "./my-list-selector-modal-view.component.html",
            styleUrls: ["./my-list-selector-modal-view.component.scss"]
        }),
        __metadata("design:paramtypes", [modal_dialog_1.ModalDialogParams])
    ], MyListSelectorModalViewComponent);
    return MyListSelectorModalViewComponent;
}());
exports.MyListSelectorModalViewComponent = MyListSelectorModalViewComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIm15LWxpc3Qtc2VsZWN0b3ItbW9kYWwtdmlldy5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxzQ0FBMEM7QUFDMUMsa0VBQXNFO0FBUXRFO0lBS0ksMENBQW9CLE9BQTBCO1FBQTFCLFlBQU8sR0FBUCxPQUFPLENBQW1CO1FBQzFDLElBQUksQ0FBQyxNQUFNLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDcEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxPQUFPLENBQUMsT0FBTyxDQUFDLGFBQWEsQ0FBQztRQUVwRCxJQUFJLENBQUMsTUFBTSxHQUFHLEVBQUUsQ0FBQztRQUNqQixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsT0FBTyxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO1lBQ25ELElBQUksQ0FBQyxNQUFNLENBQUMsSUFBSSxDQUFDO2dCQUNiLEtBQUssRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLEtBQUssQ0FBQyxDQUFDLENBQUM7Z0JBQy9CLFVBQVUsRUFBRSxDQUFDLEtBQUssSUFBSSxDQUFDLGNBQWMsQ0FBQyxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxLQUFLO2FBQ3ZELENBQUMsQ0FBQztTQUNOO0lBQ0wsQ0FBQztJQUVELHlEQUFjLEdBQWQsVUFBZSxJQUFJO1FBQ2YsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsY0FBYyxDQUFDLENBQUM7UUFDekQsZUFBZSxDQUFDLFVBQVUsR0FBRyxLQUFLLENBQUM7UUFFbkMsSUFBTSxlQUFlLEdBQUcsSUFBSSxDQUFDLE1BQU0sQ0FBQyxJQUFJLENBQUMsS0FBSyxDQUFDLENBQUM7UUFDaEQsZUFBZSxDQUFDLFVBQVUsR0FBRyxJQUFJLENBQUM7UUFDbEMsSUFBSSxDQUFDLGNBQWMsR0FBRyxJQUFJLENBQUMsS0FBSyxDQUFDO1FBRWpDLElBQUksQ0FBQyxPQUFPLENBQUMsYUFBYSxDQUFDLGVBQWUsQ0FBQyxLQUFLLENBQUMsQ0FBQztJQUN0RCxDQUFDO0lBR0QsNERBQWlCLEdBQWpCO1FBQ0ksSUFBSSxDQUFDLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLENBQUM7SUFDckMsQ0FBQztJQUVELHNCQUFJLG1EQUFLO2FBQVQ7WUFDSSxPQUFPLElBQUksQ0FBQyxNQUFNLENBQUM7UUFDdkIsQ0FBQzs7O09BQUE7SUFFRCxzQkFBSSxtREFBSzthQUFUO1lBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1FBQ3ZCLENBQUM7OztPQUFBO0lBeENRLGdDQUFnQztRQU41QyxnQkFBUyxDQUFDO1lBQ1AsUUFBUSxFQUFFLHlCQUF5QjtZQUNuQyxRQUFRLEVBQUUsTUFBTSxDQUFDLEVBQUU7WUFDbkIsV0FBVyxFQUFFLDhDQUE4QztZQUMzRCxTQUFTLEVBQUUsQ0FBQyw4Q0FBOEMsQ0FBQztTQUM5RCxDQUFDO3lDQU0rQixnQ0FBaUI7T0FMckMsZ0NBQWdDLENBeUM1QztJQUFELHVDQUFDO0NBQUEsQUF6Q0QsSUF5Q0M7QUF6Q1ksNEVBQWdDIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IE1vZGFsRGlhbG9nUGFyYW1zIH0gZnJvbSBcIm5hdGl2ZXNjcmlwdC1hbmd1bGFyL21vZGFsLWRpYWxvZ1wiO1xuXG5AQ29tcG9uZW50KHtcbiAgICBzZWxlY3RvcjogXCJNeUxpc3RTZWxlY3Rvck1vZGFsVmlld1wiLFxuICAgIG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gICAgdGVtcGxhdGVVcmw6IFwiLi9teS1saXN0LXNlbGVjdG9yLW1vZGFsLXZpZXcuY29tcG9uZW50Lmh0bWxcIixcbiAgICBzdHlsZVVybHM6IFtcIi4vbXktbGlzdC1zZWxlY3Rvci1tb2RhbC12aWV3LmNvbXBvbmVudC5zY3NzXCJdXG59KVxuZXhwb3J0IGNsYXNzIE15TGlzdFNlbGVjdG9yTW9kYWxWaWV3Q29tcG9uZW50IHtcbiAgICBwcml2YXRlIF9pdGVtczogQXJyYXk8YW55PjtcbiAgICBwcml2YXRlIF9zZWxlY3RlZEluZGV4OiBudW1iZXI7XG4gICAgcHJpdmF0ZSBfdGl0bGU6IHN0cmluZztcblxuICAgIGNvbnN0cnVjdG9yKHByaXZhdGUgX3BhcmFtczogTW9kYWxEaWFsb2dQYXJhbXMpIHtcbiAgICAgICAgdGhpcy5fdGl0bGUgPSBfcGFyYW1zLmNvbnRleHQudGl0bGU7XG4gICAgICAgIHRoaXMuX3NlbGVjdGVkSW5kZXggPSBfcGFyYW1zLmNvbnRleHQuc2VsZWN0ZWRJbmRleDtcblxuICAgICAgICB0aGlzLl9pdGVtcyA9IFtdO1xuICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IF9wYXJhbXMuY29udGV4dC5pdGVtcy5sZW5ndGg7IGkrKykge1xuICAgICAgICAgICAgdGhpcy5faXRlbXMucHVzaCh7XG4gICAgICAgICAgICAgICAgdmFsdWU6IF9wYXJhbXMuY29udGV4dC5pdGVtc1tpXSxcbiAgICAgICAgICAgICAgICBpc1NlbGVjdGVkOiBpID09PSB0aGlzLl9zZWxlY3RlZEluZGV4ID8gdHJ1ZSA6IGZhbHNlXG4gICAgICAgICAgICB9KTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIG9uSXRlbVNlbGVjdGVkKGFyZ3MpOiB2b2lkIHtcbiAgICAgICAgY29uc3Qgb2xkU2VsZWN0ZWRJdGVtID0gdGhpcy5faXRlbXNbdGhpcy5fc2VsZWN0ZWRJbmRleF07XG4gICAgICAgIG9sZFNlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gZmFsc2U7XG5cbiAgICAgICAgY29uc3QgbmV3U2VsZWN0ZWRJdGVtID0gdGhpcy5faXRlbXNbYXJncy5pbmRleF07XG4gICAgICAgIG5ld1NlbGVjdGVkSXRlbS5pc1NlbGVjdGVkID0gdHJ1ZTtcbiAgICAgICAgdGhpcy5fc2VsZWN0ZWRJbmRleCA9IGFyZ3MuaW5kZXg7XG5cbiAgICAgICAgdGhpcy5fcGFyYW1zLmNsb3NlQ2FsbGJhY2sobmV3U2VsZWN0ZWRJdGVtLnZhbHVlKTtcbiAgICB9XG4gICAgIFxuXG4gICAgb25DYW5jZWxCdXR0b25UYXAoKTogdm9pZCB7XG4gICAgICAgIHRoaXMuX3BhcmFtcy5jbG9zZUNhbGxiYWNrKG51bGwpO1xuICAgIH1cblxuICAgIGdldCBpdGVtcygpOiBBcnJheTxhbnk+IHtcbiAgICAgICAgcmV0dXJuIHRoaXMuX2l0ZW1zO1xuICAgIH1cblxuICAgIGdldCB0aXRsZSgpOiBzdHJpbmcge1xuICAgICAgICByZXR1cm4gdGhpcy5fdGl0bGU7XG4gICAgfVxufVxuIl19