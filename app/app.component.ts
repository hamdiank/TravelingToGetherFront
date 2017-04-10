import { Component, OnInit } from '@angular/core';
import {LoginComponent} from './login/login.component';

import {InscriptionComponent} from './inscription/inscription.component';

import {} from './dashboard/dashboard.component'


@Component({
    moduleId: module.id,
    selector: 'my-app',
    templateUrl: 'app.component.html'
    
})

export class AppComponent implements OnInit {
    ngOnInit(){
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
    
}