import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.service";
import { Router } from "@angular/router";
import { User } from "../_models/user";

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'inscription.component.html',
    providers:[UserService],
})

export class InscriptionComponent implements OnInit{
    ngOnInit(){
        // $.getScript('../../../assets/js/material-dashboard.js');

    }
      public user:  User;
    _userService: UserService;
    _router: Router;
    constructor(private userService: UserService, private router: Router){
        this._userService= userService;
        this._router= router;
    }
        onSubmit(){  
            console.log("aaaaaaaaaaaa");
             this._userService.addUser(this.user).subscribe( result=> {
                console.log("added");
             });
        }
}