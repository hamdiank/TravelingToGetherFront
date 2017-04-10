import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './app.routes';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';
import {
  FormsModule,
  ReactiveFormsModule
} from '@angular/forms';
import { HashLocationStrategy, LocationStrategy } from '@angular/common';
import { AppConfig } from "./app.config";
import { AuthGuard } from "./_guards/index";
import { AlertService, UserService, AuthenticationService } from "./_services/index";
import { HttpModule } from "@angular/http";
@NgModule({
    imports: [ 
        BrowserModule,
         FormsModule,
        HttpModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        FormsModule,
    ReactiveFormsModule,
        RouterModule.forRoot(MODULE_ROUTES)
    ],
    declarations: [AppComponent, MODULE_COMPONENTS ],
    bootstrap:    [ AppComponent ],
    exports: [],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}, AppConfig,
        AuthGuard,
        AlertService,
        AuthenticationService,
        UserService],
})
export class AppModule { }
