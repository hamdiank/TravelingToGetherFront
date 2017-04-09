import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import { AppHightComponent } from './appHight.component';
import { MODULE_COMPONENTS, MODULE_ROUTES } from './appHight.routes';
import { BrowserModule } from '@angular/platform-browser';
import { SidebarModule } from './sidebar/sidebar.module';
import { FooterModule } from './shared/footer/footer.module';
import { NavbarModule} from './shared/navbar/navbar.module';

import { HashLocationStrategy, LocationStrategy } from '@angular/common';
@NgModule({
    imports: [ 
        BrowserModule,
        SidebarModule,
        NavbarModule,
        FooterModule,
        
        RouterModule.forRoot(MODULE_ROUTES)
    ],
    declarations: [AppHightComponent, MODULE_COMPONENTS ],
    bootstrap:    [ AppHightComponent ],
    exports: [],
    providers: [{provide: LocationStrategy, useClass: HashLocationStrategy}],
})
export class AppHightModule { }
