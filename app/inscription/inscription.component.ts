import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../_models/user";
import {NgModule} from '@angular/core';
import  {FormsModule,ReactiveFormsModule}from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertService } from "../_services/alert.service";


@Component({
    selector: 'user-cmp',
    moduleId: module.id,
    templateUrl: 'inscription.component.html',
    providers:[UserService],

})

export class InscriptionComponent implements OnInit{
      
      message: string;
      public model : any ={};
      public model2 : any ={};
      url: string;
      route: ActivatedRoute;

    constructor(private userService: UserService, private router: Router, private alertService: AlertService){
    }
        onSubmit(){  
            console.log("aaaaaaaaaaaa");
            //console.log(this.user);
             this.userService.addUser(this.model.prenom, this.model.nom, this.model.profession,  this.model.numTelephone,this.model.email,this.model.login, this.model.password)
             .subscribe(
                   data => { 
                  if(data !== null){
                   this.router.navigate(['dashboardutil/Accueil']);
                    console.log("ffffffffff"+data);

                 }else {
                     console.log("ssssssss")
                    this.message = " Vous êtes déjà inscrit";
                    console.log(this.message)
                    this.alertService.error(this.message);
                    console.log(data)

                }
            },  error => {
                if(error){
                    console.log("ssssssss")
                    this.message = " Ce login déjà existe ";
                    console.log(this.message)
                    this.alertService.error(this.message);
                }});
        }
       ngOnInit() {

        }
}