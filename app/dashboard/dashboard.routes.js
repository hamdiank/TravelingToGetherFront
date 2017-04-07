"use strict";
var statistique_component_1 = require('./stat/statistique.component');
var parametrage_component_1 = require('./parametrage/parametrage.component');
var icons_component_1 = require('./icons/icons.component');
var gestionUtil_component_1 = require('./GestionUtil/gestionUtil.component');
var notifications_component_1 = require('./notifications/notifications.component');
var typography_component_1 = require('./typography/typography.component');
var maps_component_1 = require('./maps/maps.component');
var login_component_1 = require('./login/login.component');
exports.MODULE_ROUTES = [
    { path: 'dashboard', component: statistique_component_1.StatistiqueComponent },
    { path: 'parametrage', component: parametrage_component_1.ParametrageComponent },
    { path: 'GestionUtil', component: gestionUtil_component_1.GestionUtilComponent },
    { path: 'icons', component: icons_component_1.IconsComponent },
    { path: 'notifications', component: notifications_component_1.NotificationsComponent },
    { path: 'typography', component: typography_component_1.TypographyComponent },
    { path: 'maps', component: maps_component_1.MapsComponent },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
];
exports.MODULE_COMPONENTS = [
    statistique_component_1.StatistiqueComponent,
    parametrage_component_1.ParametrageComponent,
    gestionUtil_component_1.GestionUtilComponent,
    icons_component_1.IconsComponent,
    notifications_component_1.NotificationsComponent,
    typography_component_1.TypographyComponent,
    maps_component_1.MapsComponent,
    login_component_1.LoginComponent,
];
//# sourceMappingURL=dashboard.routes.js.map