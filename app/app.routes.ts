import { Route } from '@angular/router';

import {LoginComponent } from './login/login.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import { StatistiqueComponent } from './dashboard/stat/statistique.component';
import { ParametrageComponent } from './dashboard/parametrage/parametrage.component';

import { GestionUtilComponent } from './dashboard/GestionUtil/gestionUtil.component';
import { AuthGuard, AuthGuardAdmin } from "./_guards/index";
import { App2Component } from "./chat/app2.component";

import { InscriptionComponent } from "./inscription/inscription.component";
import { DashboardUtilComponent } from "./dashboardutil/dashboardutil.component";
import { AnnonceCovoiComponent } from "./dashboardutil/annonceCovoi/annonceCovoi.component";
import { ProfilComponent } from "./dashboardutil/profil/profil.component";
import { AccueilComponent } from "./dashboardutil/accueil/accueil.component";
import { MesAnnoncesCovoiComponent } from "./dashboardutil/profil/mesAnnoncesCovoi.component";
export const MODULE_ROUTES: Route[] =[
     { path: 'chat', component: App2Component ,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: InscriptionComponent },

   
    { path: 'dashboard' ,component: DashboardComponent ,children: [
    { path: 'Statistiques', component: StatistiqueComponent },
    { path: 'parametrage', component: ParametrageComponent },
    { path: 'GestionUtil', component: GestionUtilComponent },
    ],canActivate: [AuthGuardAdmin] ,data: { roles: ['ADMIN'] }},
// path for userDashboard
    { path: 'dashboardutil' ,component: DashboardUtilComponent ,children: [
    { path: 'Accueil', component: AccueilComponent },
    { path: 'AnnonceCovoi', component: AnnonceCovoiComponent },
    { path: 'MonProfil', component: ProfilComponent },
    { path: 'MesAnnoncesCovoi', component: MesAnnoncesCovoiComponent },
    
    ],canActivate: [AuthGuard],data: { roles: ['USER'] }  },
  // { path: '', redirectTo: 'dashboard/Statistiques', pathMatch: 'full',canActivate: [AuthGuard],data: { roles: ['ADMIN'] }},
  { path: '', redirectTo: 'dashboardutil/Accueil', pathMatch: 'full',canActivate: [AuthGuardAdmin],data: { roles: ['USER'] }}
    
]

export const MODULE_COMPONENTS = [
    StatistiqueComponent,DashboardComponent,GestionUtilComponent,

ParametrageComponent, LoginComponent,App2Component,InscriptionComponent,DashboardUtilComponent,
 AnnonceCovoiComponent, AccueilComponent
 
 
]