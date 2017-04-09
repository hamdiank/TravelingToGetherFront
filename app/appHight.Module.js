"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var router_1 = require('@angular/router');
var appHight_component_1 = require('./appHight.component');
var appHight_routes_1 = require('./appHight.routes');
var platform_browser_1 = require('@angular/platform-browser');
var sidebar_module_1 = require('./sidebar/sidebar.module');
var footer_module_1 = require('./shared/footer/footer.module');
var navbar_module_1 = require('./shared/navbar/navbar.module');
var common_1 = require('@angular/common');
var AppHightModule = (function () {
    function AppHightModule() {
    }
    AppHightModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                router_1.RouterModule.forRoot(appHight_routes_1.MODULE_ROUTES)
            ],
            declarations: [appHight_component_1.AppHightComponent, appHight_routes_1.MODULE_COMPONENTS],
            bootstrap: [appHight_component_1.AppHightComponent],
            exports: [],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }],
        }), 
        __metadata('design:paramtypes', [])
    ], AppHightModule);
    return AppHightModule;
}());
exports.AppHightModule = AppHightModule;
//# sourceMappingURL=appHight.Module.js.map