

import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from "../../_models/index";
import { UserService } from "../../_services/index";

@Component({
    moduleId: module.id,
    selector: 'tab',
    outputs: ['serveId'],
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
    serveId: EventEmitter<User>;
    users: User[];
    user:User;
    constructor(private  userService:  UserService) { 
        this.serveId=new EventEmitter();
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
 modifier(user : User):void{

     console.log("eehjeh: "+user)
    this.serveId.emit(user);
}
}