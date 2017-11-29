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
    var MultiThreadComponent;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            }],
        execute: function() {
            MultiThreadComponent = (function () {
                function MultiThreadComponent(id, titulo, width, height, htmlBody) {
                    this.id = id;
                    this.titulo = titulo;
                    this.width = width;
                    this.height = height;
                    this.htmlBody = htmlBody;
                }
                MultiThreadComponent.prototype.onClickMenos = function () {
                    jQuery("div[aria-describedby='dialog-" + this.id + "']").addClass("dialog-minimizado");
                };
                MultiThreadComponent.prototype.openDialog = function () {
                    var _this = this;
                    var dialogOptions = {
                        autoOpen: true,
                        appendTo: "#dialog-contenedor",
                        width: this.width,
                        height: this.height,
                        modal: false,
                        closeOnEscape: true,
                        draggable: true,
                        buttons: [
                            {
                                text: "menos",
                                icons: {
                                    primary: "ui-icon-heart"
                                },
                                click: function () {
                                    _this.onClickMenos();
                                }
                            }
                        ]
                    };
                    jQuery("#dialog-" + this.id).dialog(dialogOptions);
                };
                ;
                MultiThreadComponent.prototype.ngAfterViewInit = function () {
                    this.openDialog();
                };
                MultiThreadComponent = __decorate([
                    core_1.Component({
                        selector: "multi-thread",
                        templateUrl: '../../templates/template-0/html/elementos/multi-thread.html',
                        styleUrls: ['../../templates/template-0/css/multi-thread.css'],
                        encapsulation: core_1.ViewEncapsulation.None,
                    }),
                    __param(0, core_1.Attribute('data-id')),
                    __param(1, core_1.Attribute('data-titulo')),
                    __param(2, core_1.Attribute('data-width')),
                    __param(3, core_1.Attribute('data-height')),
                    __param(4, core_1.Attribute('data-htmlBody')), 
                    __metadata('design:paramtypes', [Number, String, Number, Number, String])
                ], MultiThreadComponent);
                return MultiThreadComponent;
            }());
            exports_1("MultiThreadComponent", MultiThreadComponent);
        }
    }
});
//# sourceMappingURL=multi-thread.component.js.map