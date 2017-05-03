import { Component, OnInit } from '@angular/core';

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'sidebar-util-cmp',
    templateUrl: 'sidebar.component.html',
})

export class SidebarUtilComponent implements OnInit {
    public menuItems: any[];
    ngOnInit() {
    }
}
