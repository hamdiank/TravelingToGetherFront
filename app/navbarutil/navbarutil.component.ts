import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'navbar-util-cmp',
    templateUrl: 'navbarutil.component.html',
})

export class NavBarUtilComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
    }
}
