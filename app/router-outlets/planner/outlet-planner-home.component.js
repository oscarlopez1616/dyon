System.register(['angular2/core', '../../elementos/single-thread.component', '../../elementos/multi-thread.component'], function(exports_1, context_1) {
    "use strict";
    var __moduleName = context_1 && context_1.id;
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, single_thread_component_1, multi_thread_component_1;
    var OutletPlannerHomeComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (single_thread_component_1_1) {
                single_thread_component_1 = single_thread_component_1_1;
            },
            function (multi_thread_component_1_1) {
                multi_thread_component_1 = multi_thread_component_1_1;
            }],
        execute: function() {
            OutletPlannerHomeComponent = (function () {
                function OutletPlannerHomeComponent() {
                }
                OutletPlannerHomeComponent.prototype.OutletToCache = function (arrayToCache) {
                };
                OutletPlannerHomeComponent.prototype.cacheToOutlet = function () {
                };
                OutletPlannerHomeComponent = __decorate([
                    core_1.Component({
                        templateUrl: '../../../templates/template-0/html/router-outlets/planner/outlet-planner-home.html',
                        directives: [single_thread_component_1.SingleThreadComponent, multi_thread_component_1.MultiThreadComponent]
                    }), 
                    __metadata('design:paramtypes', [])
                ], OutletPlannerHomeComponent);
                return OutletPlannerHomeComponent;
            }());
            exports_1("OutletPlannerHomeComponent", OutletPlannerHomeComponent);
        }
    }
});
//# sourceMappingURL=outlet-planner-home.component.js.map