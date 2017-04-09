"use strict";
var login_component_1 = require('./login/login.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var statistique_component_1 = require('./dashboard/stat/statistique.component');
var parametrage_component_1 = require('./dashboard/parametrage/parametrage.component');
var gestionUtil_component_1 = require('./dashboard/GestionUtil/gestionUtil.component');
exports.MODULE_ROUTES = [
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, children: [
            { path: 'Statistiques', component: statistique_component_1.StatistiqueComponent },
            { path: 'parametrage', component: parametrage_component_1.ParametrageComponent },
            { path: 'GestionUtil', component: gestionUtil_component_1.GestionUtilComponent },
            { path: 'login', component: login_component_1.LoginComponent }
        ] },
    { path: '', redirectTo: 'dashboard/Statistiques', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    statistique_component_1.StatistiqueComponent, dashboard_component_1.DashboardComponent, gestionUtil_component_1.GestionUtilComponent,
    parametrage_component_1.ParametrageComponent, login_component_1.LoginComponent,
];
//# sourceMappingURL=appHight.routes.js.map