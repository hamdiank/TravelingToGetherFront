import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.service";
<<<<<<< HEAD
import { Router } from "@angular/router";
import { User } from "../_models/user";
=======
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../_models/user";
import {NgModule} from '@angular/core';
import  {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {NgForm} from '@angular/forms';
>>>>>>> cebef78c18c6f48e28bfda477c498652eba86904

@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'inscription.component.html',
    providers:[UserService],
<<<<<<< HEAD
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
=======
    
})

export class InscriptionComponent implements OnInit{
      public model : any ={};
      url: string;
      route: ActivatedRoute;

    constructor(private userService: UserService, private router: Router){
    }
        onSubmit(){  
            console.log("aaaaaaaaaaaa");
            //console.log(this.user);
             this.userService.addUser(this.model.firstname, this.model.lastname,this.model.username,this.model.password)
             .subscribe(
                data => {
                    this.router.navigate(['dashboard']);
                    console.log(this.url);
                });
        }
       ngOnInit() {
           
>>>>>>> cebef78c18c6f48e28bfda477c498652eba86904
        }
}