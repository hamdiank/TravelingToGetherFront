import { Route } from '@angular/router';

import {LoginComponent } from './login/login.component';

import {DashboardComponent} from './dashboard/dashboard.component';

import { StatistiqueComponent } from './dashboard/stat/statistique.component';
import { ParametrageComponent } from './dashboard/parametrage/parametrage.component';

import { GestionUtilComponent } from './dashboard/GestionUtil/gestionUtil.component';
import { AuthGuard } from "./_guards/index";

export const MODULE_ROUTES: Route[] =[
      { path: 'login', component: LoginComponent },
     
    { path: 'dashboard' ,component: DashboardComponent ,children: [
    { path: 'Statistiques', component: StatistiqueComponent },
    { path: 'parametrage', component: ParametrageComponent },
    { path: 'GestionUtil', component: GestionUtilComponent },
    ],canActivate: [AuthGuard] },
    
    { path: '', redirectTo: 'dashboard/Statistiques', pathMatch: 'full',canActivate: [AuthGuard]}
    
]

export const MODULE_COMPONENTS = [
    StatistiqueComponent,DashboardComponent,GestionUtilComponent,
ParametrageComponent, LoginComponent,
 
  
  
]