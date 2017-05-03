

import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from "../../_models/index";
import { UserService } from "../../_services/index";
import { FilterPipe } from '../parametrage/pipe'
@Component({
    moduleId: module.id,
    selector: 'tab',
    outputs: ['serveId'],
    templateUrl: 'table.component.html'
})
export class TableComponent implements OnInit {
    textFilter:string;
    serveId: EventEmitter<User>;
    users: User[];
    user:User;
    pager: any = {};

    // paged items
    pagedItems: User[];

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

filter(ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.users = this.users.filter(
                (result) => {
                    return (result.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
        } else {
            this.ListUtilisateur();
        }

    }


}