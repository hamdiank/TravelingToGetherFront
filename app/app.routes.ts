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
import { AjoutAnnonceCovoiComponent } from "./dashboardutil/annonceCovoi/ajoutAnnonceCovoi.component";
import { AnnonceCovoiDetailComponent } from "./dashboardutil/annonceCovoi/annonceCovoiDetail.component";
import { MotDePasseComponent } from "./MotDePasse/MotDePasse.component";
import { PublicProfilComponent } from "./dashboardutil/profil_public/profil_public.component";
import { MesReservationsComponent } from "./dashboardutil/profil/mesReservation.component";
import { ConfirmerInscriptionComponent } from "./inscription/confirmerInscription.component";
import { AnnonceVolComponent } from "./dashboardutil/annonceVol/annonceVol.component";
import { MesAnnoncesVolComponent } from "./dashboardutil/profil/mesAnnoncesVol.component";
import { AjoutAnnonceVolComponent } from "./dashboardutil/annonceVol/ajoutAnnonceVol.component";
import { AnnonceVolDetailComponent } from "./dashboardutil/annonceVol/annonceVolDetail.component";
export const MODULE_ROUTES: Route[] =[
    { path: 'chat', component: App2Component ,canActivate: [AuthGuard] },
    { path: 'login', component: LoginComponent },
    { path: 'register', component: InscriptionComponent },
    {path:'MotDePasse',component:MotDePasseComponent},
    {path:'ConfirmerInscription',component:ConfirmerInscriptionComponent},
   
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
    { path: 'AjoutAnnonceCovoi', component: AjoutAnnonceCovoiComponent },
    { path: 'AjoutAnnonceVol', component: AjoutAnnonceVolComponent },
    { path: 'publicProfile/:id', component:  PublicProfilComponent},
    { path: 'detail/:id', component: AnnonceCovoiDetailComponent },
    { path: 'MesReservations', component: MesReservationsComponent },
    { path: 'AnnonceVol', component: AnnonceVolComponent },
    { path: 'MesAnnoncesVol', component: MesAnnoncesVolComponent },
    { path: 'AnnonceVolDetail/:id', component: AnnonceVolDetailComponent },
   
    ],canActivate: [AuthGuard],data: { roles: ['USER'] }  },

    { path: 'dashboardutil/Accueil', redirectTo: 'dashboardutil/Accueil', pathMatch: 'full',canActivate: [AuthGuard],data: { roles: ['USER'] }},
    { path: 'dashboard/Statistiques', redirectTo: 'dashboard/Statistiques', pathMatch: 'full',canActivate: [AuthGuardAdmin],data: { roles: ['ADMIN'] }},
    { path: '', redirectTo: 'dashboardutil/Accueil', pathMatch: 'full',canActivate: [AuthGuard],data: { roles: ['USER'] }},
  //{ path: '', redirectTo: 'dashboardutil/Accueil', pathMatch: 'full',canActivate: [AuthGuard],data: { roles: ['USER'] }}

]

export const MODULE_COMPONENTS = [
    StatistiqueComponent,DashboardComponent,GestionUtilComponent,

    ParametrageComponent, LoginComponent,App2Component,InscriptionComponent,DashboardUtilComponent,
 AnnonceCovoiComponent, AccueilComponent, AnnonceCovoiDetailComponent,AjoutAnnonceCovoiComponent
]