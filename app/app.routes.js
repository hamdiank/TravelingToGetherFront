"use strict";
var login_component_1 = require('./login/login.component');
var dashboard_component_1 = require('./dashboard/dashboard.component');
var statistique_component_1 = require('./dashboard/stat/statistique.component');
var parametrage_component_1 = require('./dashboard/parametrage/parametrage.component');
var gestionUtil_component_1 = require('./dashboard/GestionUtil/gestionUtil.component');
var index_1 = require("./_guards/index");
var app2_component_1 = require("./chat/app2.component");
var inscription_component_1 = require("./inscription/inscription.component");
var dashboardutil_component_1 = require("./dashboardutil/dashboardutil.component");
var annonceCovoi_component_1 = require("./dashboardutil/annonceCovoi/annonceCovoi.component");
var profil_component_1 = require("./dashboardutil/profil/profil.component");
var accueil_component_1 = require("./dashboardutil/accueil/accueil.component");
var mesAnnoncesCovoi_component_1 = require("./dashboardutil/profil/mesAnnoncesCovoi.component");
exports.MODULE_ROUTES = [
    { path: 'chat', component: app2_component_1.App2Component },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: inscription_component_1.InscriptionComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, children: [
            { path: 'Statistiques', component: statistique_component_1.StatistiqueComponent },
            { path: 'parametrage', component: parametrage_component_1.ParametrageComponent },
            { path: 'GestionUtil', component: gestionUtil_component_1.GestionUtilComponent },
        ], canActivate: [index_1.AuthGuard] },
    // path for userDashboard
    { path: 'dashboardutil', component: dashboardutil_component_1.DashboardUtilComponent, children: [
            { path: 'Accueil', component: accueil_component_1.AccueilComponent },
            { path: 'AnnonceCovoi', component: annonceCovoi_component_1.AnnonceCovoiComponent },
            { path: 'MonProfil', component: profil_component_1.ProfilComponent },
            { path: 'MesAnnoncesCovoi', component: mesAnnoncesCovoi_component_1.MesAnnoncesCovoiComponent },
        ], canActivate: [index_1.AuthGuard] },
    { path: '', redirectTo: 'dashboard/Statistiques', pathMatch: 'full', canActivate: [index_1.AuthGuard] }
];
exports.MODULE_COMPONENTS = [
    statistique_component_1.StatistiqueComponent, dashboard_component_1.DashboardComponent, gestionUtil_component_1.GestionUtilComponent,
    parametrage_component_1.ParametrageComponent, login_component_1.LoginComponent, app2_component_1.App2Component, inscription_component_1.InscriptionComponent, dashboardutil_component_1.DashboardUtilComponent,
    annonceCovoi_component_1.AnnonceCovoiComponent, accueil_component_1.AccueilComponent
];
//# sourceMappingURL=app.routes.js.map