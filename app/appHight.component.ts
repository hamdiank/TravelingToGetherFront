import { Component, OnInit } from '@angular/core';
import {LoginComponent} from './login/login.component';
import {} from './dashboard/dashboard.component'


@Component({
    moduleId: module.id,
    selector: 'my-happ',
    templateUrl: 'appHight.component.html'
    
})

export class AppHightComponent implements OnInit {
    ngOnInit(){
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
    
}