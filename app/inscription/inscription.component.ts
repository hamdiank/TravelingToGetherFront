import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../_models/user";
import {NgModule} from '@angular/core';
import  {FormsModule,ReactiveFormsModule}from '@angular/forms';
import {NgForm} from '@angular/forms';


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'inscription.component.html',
    providers:[UserService],

})

export class InscriptionComponent implements OnInit{
      public model : any ={};
      public model2 : any ={};
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
                    this.router.navigate(['dashboardutil/Accueil']);
                    console.log(this.url);
                    
                    console.log("model1=>"+this.model.firstname)
                    
                    console.log("model2=>"+this.model2.firstname)

                });
        }
       ngOnInit() {

        }
}