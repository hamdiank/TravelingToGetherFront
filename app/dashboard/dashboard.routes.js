"use strict";
var statistique_component_1 = require('./stat/statistique.component');
var parametrage_component_1 = require('./parametrage/parametrage.component');
var gestionUtil_component_1 = require('./GestionUtil/gestionUtil.component');
var login_component_1 = require('./login/login.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: statistique_component_1.StatistiqueComponent },
    { path: 'parametrage', component: parametrage_component_1.ParametrageComponent },
    { path: 'GestionUtil', component: gestionUtil_component_1.GestionUtilComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    statistique_component_1.StatistiqueComponent,
    parametrage_component_1.ParametrageComponent,
    gestionUtil_component_1.GestionUtilComponent,
    login_component_1.LoginComponent,
];
//# sourceMappingURL=dashboard.routes.js.map