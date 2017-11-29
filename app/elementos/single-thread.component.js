System.register(['angular2/core'], function(exports_1, context_1) {
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
    var __param = (this && this.__param) || function (paramIndex, decorator) {
        return function (target, key) { decorator(target, key, paramIndex); }
    };
    var core_1;
    var SingleThreadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            SingleThreadComponent = (function () {
                function SingleThreadComponent(id, titulo, htmlBody, htmlFooter) {
                    this.id = id;
                    this.titulo = titulo;
                    this.htmlBody = htmlBody;
                    this.htmlFooter = htmlFooter;
                }
                SingleThreadComponent = __decorate([
                    core_1.Component({
                        selector: "single-thread",
                        templateUrl: '../../templates/template-0/html/elementos/single-thread.html',
                        styleUrls: ['../../templates/template-0/css/elementos/single-thread.css']
                    }),
                    __param(0, core_1.Attribute('data-id')),
                    __param(1, core_1.Attribute('data-titulo')),
                    __param(2, core_1.Attribute('data-htmlBody')),
                    __param(3, core_1.Attribute('data-htmlFooter')), 
                    __metadata('design:paramtypes', [Number, String, String, String])
                ], SingleThreadComponent);
                return SingleThreadComponent;
            }());
            exports_1("SingleThreadComponent", SingleThreadComponent);
        }
    }
});
//# sourceMappingURL=single-thread.component.js.map