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
var app_component_1 = require('./app.component');
var app_routes_1 = require('./app.routes');
var platform_browser_1 = require('@angular/platform-browser');
var sidebar_module_1 = require('./sidebar/sidebar.module');
var footer_module_1 = require('./shared/footer/footer.module');
var navbar_module_1 = require('./shared/navbar/navbar.module');
var forms_1 = require('@angular/forms');
var common_1 = require('@angular/common');
var app_config_1 = require("./app.config");
var index_1 = require("./_guards/index");
var index_2 = require("./_services/index");
var http_1 = require("@angular/http");
<<<<<<< HEAD
var table_component_1 = require("./dashboard/GestionUtil/table.component");
=======
var inscription_component_1 = require("./inscription/inscription.component");
>>>>>>> 4559c22ab60b41372853cb946e201eb8e5df8ae0
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                sidebar_module_1.SidebarModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                forms_1.FormsModule,
                forms_1.ReactiveFormsModule,
                router_1.RouterModule.forRoot(app_routes_1.MODULE_ROUTES)
            ],
<<<<<<< HEAD
            declarations: [app_component_1.AppComponent, app_routes_1.MODULE_COMPONENTS, table_component_1.TableComponent],
=======
            declarations: [app_component_1.AppComponent, app_routes_1.MODULE_COMPONENTS, inscription_component_1.InscriptionComponent],
>>>>>>> 4559c22ab60b41372853cb946e201eb8e5df8ae0
            bootstrap: [app_component_1.AppComponent],
            exports: [],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, app_config_1.AppConfig,
                index_1.AuthGuard,
                index_2.AlertService,
                index_2.AuthenticationService,
                index_2.UserService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map