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
var ajoutAnnonceCovoi_component_1 = require("./dashboardutil/annonceCovoi/ajoutAnnonceCovoi.component");
var annonceCovoiDetail_component_1 = require("./dashboardutil/annonceCovoi/annonceCovoiDetail.component");
var MotDePasse_component_1 = require("./MotDePasse/MotDePasse.component");
var profil_public_component_1 = require("./dashboardutil/profil_public/profil_public.component");
var mesReservation_component_1 = require("./dashboardutil/profil/mesReservation.component");
var confirmerInscription_component_1 = require("./inscription/confirmerInscription.component");
var annonceVol_component_1 = require("./dashboardutil/annonceVol/annonceVol.component");
var mesAnnoncesVol_component_1 = require("./dashboardutil/profil/mesAnnoncesVol.component");
var ajoutAnnonceVol_component_1 = require("./dashboardutil/annonceVol/ajoutAnnonceVol.component");
var annonceVolDetail_component_1 = require("./dashboardutil/annonceVol/annonceVolDetail.component");
var annonceTrain_component_1 = require("./dashboardutil/annonceTrain/annonceTrain.component");
var ajoutAnnonceTrain_component_1 = require("./dashboardutil/annonceTrain/ajoutAnnonceTrain.component");
var annonceTrainDetail_component_1 = require("./dashboardutil/annonceTrain/annonceTrainDetail.component");
var mesAnnoncesTrain_component_1 = require("./dashboardutil/profil/mesAnnoncesTrain.component");
exports.MODULE_ROUTES = [
    { path: 'chat', component: app2_component_1.App2Component, canActivate: [index_1.AuthGuard] },
    { path: 'login', component: login_component_1.LoginComponent },
    { path: 'register', component: inscription_component_1.InscriptionComponent },
    { path: 'MotDePasse', component: MotDePasse_component_1.MotDePasseComponent },
    { path: 'ConfirmerInscription', component: confirmerInscription_component_1.ConfirmerInscriptionComponent },
    { path: 'dashboard', component: dashboard_component_1.DashboardComponent, children: [
            { path: 'Statistiques', component: statistique_component_1.StatistiqueComponent },
            { path: 'parametrage', component: parametrage_component_1.ParametrageComponent },
            { path: 'GestionUtil', component: gestionUtil_component_1.GestionUtilComponent },
        ], canActivate: [index_1.AuthGuardAdmin], data: { roles: ['ADMIN'] } },
    // path for userDashboard
    { path: 'dashboardutil', component: dashboardutil_component_1.DashboardUtilComponent, children: [
            { path: 'Accueil', component: accueil_component_1.AccueilComponent },
            { path: 'AnnonceCovoi', component: annonceCovoi_component_1.AnnonceCovoiComponent },
            { path: 'MonProfil', component: profil_component_1.ProfilComponent },
            { path: 'MesAnnoncesCovoi', component: mesAnnoncesCovoi_component_1.MesAnnoncesCovoiComponent },
            { path: 'AjoutAnnonceCovoi', component: ajoutAnnonceCovoi_component_1.AjoutAnnonceCovoiComponent },
            { path: 'AjoutAnnonceVol', component: ajoutAnnonceVol_component_1.AjoutAnnonceVolComponent },
            { path: 'publicProfile/:id', component: profil_public_component_1.PublicProfilComponent },
            { path: 'detail/:id', component: annonceCovoiDetail_component_1.AnnonceCovoiDetailComponent },
            { path: 'MesReservations', component: mesReservation_component_1.MesReservationsComponent },
            { path: 'AnnonceVol', component: annonceVol_component_1.AnnonceVolComponent },
            { path: 'MesAnnoncesVol', component: mesAnnoncesVol_component_1.MesAnnoncesVolComponent },
            { path: 'AnnonceVolDetail/:id', component: annonceVolDetail_component_1.AnnonceVolDetailComponent },
            { path: 'AnnoncesTrain', component: annonceTrain_component_1.AnnonceTrainComponent },
            { path: 'AjoutAnnonceTrain', component: ajoutAnnonceTrain_component_1.AjoutAnnonceTrainComponent },
            { path: 'AnnonceTrainDetail/:id', component: annonceTrainDetail_component_1.AnnonceTrainDetailComponent },
            { path: 'MesAnnoncesTrain', component: mesAnnoncesTrain_component_1.MesAnnoncesTrainComponent }
        ], canActivate: [index_1.AuthGuard], data: { roles: ['USER'] } },
    { path: 'dashboardutil/Accueil', redirectTo: 'dashboardutil/Accueil', pathMatch: 'full', canActivate: [index_1.AuthGuard], data: { roles: ['USER'] } },
    { path: 'dashboard/Statistiques', redirectTo: 'dashboard/Statistiques', pathMatch: 'full', canActivate: [index_1.AuthGuardAdmin], data: { roles: ['ADMIN'] } },
    { path: '', redirectTo: 'dashboardutil/Accueil', pathMatch: 'full', canActivate: [index_1.AuthGuard], data: { roles: ['USER'] } },
];
exports.MODULE_COMPONENTS = [
    statistique_component_1.StatistiqueComponent, dashboard_component_1.DashboardComponent, gestionUtil_component_1.GestionUtilComponent,
    parametrage_component_1.ParametrageComponent, login_component_1.LoginComponent, app2_component_1.App2Component, inscription_component_1.InscriptionComponent, dashboardutil_component_1.DashboardUtilComponent,
    annonceCovoi_component_1.AnnonceCovoiComponent, accueil_component_1.AccueilComponent, annonceCovoiDetail_component_1.AnnonceCovoiDetailComponent, ajoutAnnonceCovoi_component_1.AjoutAnnonceCovoiComponent
];
//# sourceMappingURL=app.routes.js.map