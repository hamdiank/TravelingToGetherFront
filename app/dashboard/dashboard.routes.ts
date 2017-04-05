import { Route } from '@angular/router';
import { DashboardComponent } from './dashboard.component';
import { StatistiqueComponent } from './stat/statistique.component';
import { ParametrageComponent } from './parametrage/parametrage.component';
import { IconsComponent } from './icons/icons.component';
import { GestionUtilComponent } from './GestionUtil/gestionUtil.component';
import { NotificationsComponent } from './notifications/notifications.component';
import { TypographyComponent } from './typography/typography.component';
import { MapsComponent } from './maps/maps.component';


export const MODULE_ROUTES: Route[] =[
    { path: 'dashboard', component: StatistiqueComponent },
    { path: 'parametrage', component: ParametrageComponent },
    { path: 'GestionUtil', component: GestionUtilComponent },
    { path: 'icons', component: IconsComponent },
    { path: 'notifications', component: NotificationsComponent },
    { path: 'typography', component: TypographyComponent },
    { path: 'maps', component: MapsComponent },
    { path: '', redirectTo: 'dashboard', pathMatch: 'full' }
]

export const MODULE_COMPONENTS = [
    StatistiqueComponent,
    ParametrageComponent,
    GestionUtilComponent,
    IconsComponent,
    NotificationsComponent,
    TypographyComponent,
    MapsComponent,
  
]
