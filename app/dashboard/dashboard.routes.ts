import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StatistiqueComponent } from './stat/statistique.component';
import { ParametrageComponent } from './parametrage/parametrage.component';

import { GestionUtilComponent } from './GestionUtil/gestionUtil.component';
import { LoginComponent } from './login/login.component';

export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: StatistiqueComponent },
    { path: 'parametrage', component: ParametrageComponent },
    { path: 'GestionUtil', component: GestionUtilComponent },
    
    { path: 'login', component: LoginComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    StatistiqueComponent,
    ParametrageComponent,
    GestionUtilComponent,
 
    LoginComponent,
  
]
