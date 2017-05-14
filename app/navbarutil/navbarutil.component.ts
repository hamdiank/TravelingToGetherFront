import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.service";

declare var $:any;
@Component({
    moduleId: module.id,
    selector: 'navbar-util-cmp',
    templateUrl: 'navbarutil.component.html',
})

export class NavBarUtilComponent implements OnInit {
    public menuItems: any[];
    nom:string;
    constructor(private userService: UserService){

userService.getById(localStorage.getItem("currentUserId")).subscribe(result=>{
this.nom=result.nom;
});

    }
    ngOnInit() {

    }
}
