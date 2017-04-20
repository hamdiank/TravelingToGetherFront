

import { Component, OnInit, EventEmitter } from '@angular/core';
import { User } from "../../_models/index";
import { UserService, PagerService } from "../../_services/index";

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
    pager: any = {};

    // paged items
    pagedItems: User[];

    constructor(private  userService:  UserService, private pagerService:  PagerService) { 
        this.serveId=new EventEmitter();
    }

    ngOnInit() { 
        this.ListUtilisateur();
    }

 ListUtilisateur() {
    this.userService.getAll().
    subscribe(users => { 
        this.users=users;
        this.setPage(1);
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

setPage(page: number) {
      console.log()
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.users.length, page);

        // get current page of items
        this.pagedItems = this.users.slice(this.pager.startIndex, this.pager.endIndex + 1);

        console.log(this.pagedItems);
}


}