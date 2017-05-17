
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
import { AuthGuard,AuthGuardAdmin } from "./_guards/index";
import { JwtHelper } from 'angular2-jwt';
import {MyDatePickerModule } from 'mydatepicker';


import { AlertService, UserService, AuthenticationService, PaysService, CityService } from "./_services/index";


import { HttpModule } from "@angular/http";
import { TableComponent } from "./dashboard/GestionUtil/table.component";
import { LoginComponent } from "./login/login.component";
import { NgModule } from "@angular/core";
import { ParametrageComponent } from "./dashboard/parametrage/parametrage.component";
import { AvionService } from "./_services/avion.service";
import { AccueilComponent } from "./dashboardutil/accueil/accueil.component";
import { AnnonceCovoiComponent } from "./dashboardutil/annonceCovoi/annonceCovoi.component";
import { AnnonceCovoiService } from "./_services/annonceCovoi.service";
import { LoaderComponent } from "./shared/loader/loader.component";
import { ValuesPipe } from "./dashboard/parametrage/valuesPipe";
import { FilterPipe } from "./dashboard/parametrage/pipe";

import { AeroportService } from "./_services/aeroport.service";
import { StationService } from "./_services/station.service";
import { TrainService } from "./_services/train.service";

import { App2Component } from "./chat/app2.component";
import { ChatPageComponent } from './chat/chat-page/chat-page.component';
import { FromNowPipe } from "./chat/pipes/from-now.pipe";
import { ChatWindowComponent } from "./chat/chat-window/chat-window.component";
import { ChatThreadsComponent } from "./chat/chat-threads/chat-threads.component";
import { ChatNavBarComponent } from "./chat/chat-nav-bar/chat-nav-bar.component";
import { ChatThreadComponent } from "./chat/chat-thread/chat-thread.component";
import { ChatMessageComponent } from "./chat/chat-message/chat-message.component";
import { UsersService } from "./chat/user/users.service";
import { MessagesService } from "./chat/message/messages.service";
import { ThreadsService } from "./chat/thread/threads.service";
import { AlertComponent } from "./shared/alert/index";
import { SpinnerComponent } from "./shared/loader2/spinner.component";

import { InscriptionComponent } from "./inscription/inscription.component";
import { ProfilComponent } from "./dashboardutil/profil/profil.component";
import { MesAnnoncesCovoiComponent } from "./dashboardutil/profil/mesAnnoncesCovoi.component";
import { Ng2PaginationModule } from 'ng2-pagination';
import { DataService } from "./chat/data/data.service";
import { ChatExampleData } from "./chat/data/chat-example-data";
import { MotDePasseOublieService } from "./_services/MotDePassOublie";
import { MotDePasseComponent } from "./MotDePasse/MotDePasse.component";
import { NavBarUtilModule } from "./navbarutil/navbarutil.module";
import { SpinnerModule, PaginatorModule } from 'primeng/primeng';




@NgModule({
    imports: [ 
        MyDatePickerModule,
        BrowserModule,
        FormsModule,
        HttpModule,
        NavbarModule,
        FooterModule,
        SidebarModule,
        NavBarUtilModule,
        ReactiveFormsModule,
        Ng2PaginationModule,
        RouterModule.forRoot(MODULE_ROUTES),
        SpinnerModule,
       PaginatorModule

        
    ],


    declarations: [AppComponent, MODULE_COMPONENTS, LoginComponent,TableComponent, ParametrageComponent,LoaderComponent,
    SpinnerComponent
    ,App2Component,
    ChatPageComponent,
    ChatWindowComponent,
    ChatNavBarComponent ,
    ChatThreadsComponent,
    ChatMessageComponent,
    ChatThreadComponent,
    AlertComponent,
    FromNowPipe,ValuesPipe,FilterPipe,  AnnonceCovoiComponent, InscriptionComponent, AccueilComponent, ProfilComponent, MesAnnoncesCovoiComponent,MotDePasseComponent],


    bootstrap:    [ AppComponent ],
    exports: [],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AppConfig,
        AuthGuard,AuthGuardAdmin,
        AlertService,
        AuthenticationService,ValuesPipe,DataService,


        UserService,PaysService,AvionService,CityService,AeroportService,StationService,TrainService,JwtHelper,
        MessagesService, ThreadsService, UsersService, AnnonceCovoiService,MotDePasseOublieService],

})
export class AppModule {

 }
