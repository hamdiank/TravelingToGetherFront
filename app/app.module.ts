
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppConfig } from "./app.config";
import { AuthGuard } from "./_guards/index";
import { JwtHelper } from 'angular2-jwt';
import { AlertService, UserService, AuthenticationService, PaysService, PagerService } from "./_services/index";
import { HttpModule } from "@angular/http";
import { TableComponent } from "./dashboard/GestionUtil/table.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ParametrageComponent } from "./dashboard/parametrage/parametrage.component";
import { AvionService } from "./_services/avion.service";
import { AccueilComponent } from "./dashboardutil/accueil/accueil.component";
import { SidebarUtilModule } from "./sidebarutil/sidebar.module";
import { AnnonceCovoiComponent } from "./dashboardutil/annonceCovoi/annonceCovoi.component";
import { AnnonceCovoiService } from "./_services/annonceCovoi.service";
import { LoaderComponent } from "./shared/loader/loader.component";
import { ValuesPipe } from "./dashboard/parametrage/valuesPipe";
import { FilterPipe } from "./dashboard/parametrage/pipe";
import { InscriptionComponent } from "./inscription/inscription.component";
import { ProfilComponent } from "./dashboardutil/profil/profil.component";
import { NavbarUtilModule } from "./shared/navbarutil/navbarutil.module";
import { MesAnnoncesCovoiComponent } from "./dashboardutil/profil/mesAnnoncesCovoi.component";



@NgModule({
    imports: [ 
        BrowserModule,
        FormsModule,
        HttpModule,
        SidebarModule,
        SidebarUtilModule,
        NavbarModule,
        NavbarUtilModule,
        FooterModule,
        ReactiveFormsModule,

        RouterModule.forRoot(MODULE_ROUTES)
    ],



    declarations: [AppComponent, MODULE_COMPONENTS, LoginComponent,TableComponent, ParametrageComponent,LoaderComponent,ValuesPipe,FilterPipe,
     AnnonceCovoiComponent, InscriptionComponent, AccueilComponent, ProfilComponent, MesAnnoncesCovoiComponent],



    bootstrap:    [ AppComponent ],
    exports: [],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,ValuesPipe,
        UserService,PaysService,PagerService,AvionService,JwtHelper, AnnonceCovoiService],

})
export class AppModule {

 }
