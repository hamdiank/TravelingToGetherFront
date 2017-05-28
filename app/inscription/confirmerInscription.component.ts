import { Component, OnInit } from '@angular/core';
import { UserService } from "../_services/user.service";
import { Router, ActivatedRoute } from "@angular/router";
import { User } from "../_models/user";
import {NgModule} from '@angular/core';
import  {FormsModule,ReactiveFormsModule}from '@angular/forms';
import { NgForm } from '@angular/forms';
import { AlertService } from "../_services/alert.service";


@Component({
    selector: 'conf-insc-cmp',
    moduleId: module.id,
    templateUrl: 'confirmerInscription.component.html',
    providers:[UserService]


})

export class ConfirmerInscriptionComponent implements OnInit {

    model: any={};




    constructor(private userService: UserService, private router : Router ){
    }
    onSubmit(){
        console.log(this.model.email)
        this.userService.confirmerInscription(this.model.email)
        .subscribe(data => { this.router.navigate(['/login']);});
    
    }

            ngOnInit(){
     
        }

}