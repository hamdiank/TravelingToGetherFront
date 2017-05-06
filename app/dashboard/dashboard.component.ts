import { Component, OnInit } from '@angular/core';
import { LocationStrategy, PlatformLocation, Location } from '@angular/common';

declare var $: any;

@Component({
    selector: 'dashboard-cmp',
    moduleId: module.id,
    templateUrl: 'dashboard.component.html'
})

export class DashboardComponent implements OnInit {
    location: Location;
    constructor(location: Location) {
        this.location = location;
    }
    ngOnInit() {
        $.getScript('../assets/js/material-dashboard.js');
        $.getScript('../assets/js/initMenu.js');
    }
}
