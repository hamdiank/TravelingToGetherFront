import { Component, OnInit } from '@angular/core';
import { User } from "../../_models/index";
import { UserService } from "../../_services/index";

@Component({
    selector: 'gestionUtil-cmp',
    moduleId: module.id,
    templateUrl: 'gestionUtil.component.html'
})

export class GestionUtilComponent implements OnInit{

    users: User[];

    constructor(private  userService:  UserService) {
    }

    ngOnInit() {
        this.ListUtilisateur();


    }

    ListUtilisateur() {
    this.userService.getAll().
    subscribe(users => { 
        this.users=users;
        console.log(users) ;
    },
    error =>{
        console.log(error);
    }
    
    );

}
}
