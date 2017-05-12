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
var angular2_jwt_1 = require('angular2-jwt');
var index_2 = require("./_services/index");
var http_1 = require("@angular/http");
var table_component_1 = require("./dashboard/GestionUtil/table.component");
var login_component_1 = require("./login/login.component");
var core_1 = require("@angular/core");
var parametrage_component_1 = require("./dashboard/parametrage/parametrage.component");
var avion_service_1 = require("./_services/avion.service");
var accueil_component_1 = require("./dashboardutil/accueil/accueil.component");
var annonceCovoi_component_1 = require("./dashboardutil/annonceCovoi/annonceCovoi.component");
var annonceCovoi_service_1 = require("./_services/annonceCovoi.service");
var loader_component_1 = require("./shared/loader/loader.component");
var valuesPipe_1 = require("./dashboard/parametrage/valuesPipe");
var pipe_1 = require("./dashboard/parametrage/pipe");
var aeroport_service_1 = require("./_services/aeroport.service");
var station_service_1 = require("./_services/station.service");
var train_service_1 = require("./_services/train.service");
var app2_component_1 = require("./chat/app2.component");
var chat_page_component_1 = require('./chat/chat-page/chat-page.component');
var from_now_pipe_1 = require("./chat/pipes/from-now.pipe");
var chat_window_component_1 = require("./chat/chat-window/chat-window.component");
var chat_threads_component_1 = require("./chat/chat-threads/chat-threads.component");
var chat_nav_bar_component_1 = require("./chat/chat-nav-bar/chat-nav-bar.component");
var chat_thread_component_1 = require("./chat/chat-thread/chat-thread.component");
var chat_message_component_1 = require("./chat/chat-message/chat-message.component");
var users_service_1 = require("./chat/user/users.service");
var messages_service_1 = require("./chat/message/messages.service");
var threads_service_1 = require("./chat/thread/threads.service");
var index_3 = require("./shared/alert/index");
var spinner_component_1 = require("./shared/loader2/spinner.component");
var inscription_component_1 = require("./inscription/inscription.component");
var profil_component_1 = require("./dashboardutil/profil/profil.component");
var mesAnnoncesCovoi_component_1 = require("./dashboardutil/profil/mesAnnoncesCovoi.component");
var ng2_pagination_1 = require('ng2-pagination');
var data_service_1 = require("./chat/data/data.service");
var MotDePassOublie_1 = require("./_services/MotDePassOublie");
var MotDePasse_component_1 = require("./MotDePasse/MotDePasse.component");
var navbarutil_module_1 = require("./navbarutil/navbarutil.module");
var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        core_1.NgModule({
            imports: [
                platform_browser_1.BrowserModule,
                forms_1.FormsModule,
                http_1.HttpModule,
                navbar_module_1.NavbarModule,
                footer_module_1.FooterModule,
                sidebar_module_1.SidebarModule,
                navbarutil_module_1.NavBarUtilModule,
                forms_1.ReactiveFormsModule,
                ng2_pagination_1.Ng2PaginationModule,
                router_1.RouterModule.forRoot(app_routes_1.MODULE_ROUTES),
            ],
            declarations: [app_component_1.AppComponent, app_routes_1.MODULE_COMPONENTS, login_component_1.LoginComponent, table_component_1.TableComponent, parametrage_component_1.ParametrageComponent, loader_component_1.LoaderComponent,
                spinner_component_1.SpinnerComponent,
                app2_component_1.App2Component,
                chat_page_component_1.ChatPageComponent,
                chat_window_component_1.ChatWindowComponent,
                chat_nav_bar_component_1.ChatNavBarComponent,
                chat_threads_component_1.ChatThreadsComponent,
                chat_message_component_1.ChatMessageComponent,
                chat_thread_component_1.ChatThreadComponent,
                index_3.AlertComponent,
                from_now_pipe_1.FromNowPipe, valuesPipe_1.ValuesPipe, pipe_1.FilterPipe, annonceCovoi_component_1.AnnonceCovoiComponent, inscription_component_1.InscriptionComponent, accueil_component_1.AccueilComponent, profil_component_1.ProfilComponent, mesAnnoncesCovoi_component_1.MesAnnoncesCovoiComponent, MotDePasse_component_1.MotDePasseComponent],
            bootstrap: [app_component_1.AppComponent],
            exports: [],
            providers: [{ provide: common_1.LocationStrategy, useClass: common_1.HashLocationStrategy }, app_config_1.AppConfig,
                index_1.AuthGuard, index_1.AuthGuardAdmin,
                index_2.AlertService,
                index_2.AuthenticationService, valuesPipe_1.ValuesPipe, data_service_1.DataService,
                index_2.UserService, index_2.PaysService, avion_service_1.AvionService, index_2.CityService, aeroport_service_1.AeroportService, station_service_1.StationService, train_service_1.TrainService, angular2_jwt_1.JwtHelper,
                messages_service_1.MessagesService, threads_service_1.ThreadsService, users_service_1.UsersService, annonceCovoi_service_1.AnnonceCovoiService, MotDePassOublie_1.MotDePasseOublieService],
        }), 
        __metadata('design:paramtypes', [])
    ], AppModule);
    return AppModule;
}());
exports.AppModule = AppModule;
//# sourceMappingURL=app.module.js.map