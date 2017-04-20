import { Component, OnInit, EventEmitter } from '@angular/core';
import { User, Pays } from "../../_models/index";
import { UserService, PagerService } from "../../_services/index";

@Component({
    selector: 'gestionUtil-cmp',
    moduleId: module.id,
    templateUrl: 'gestionUtil.component.html'
})

export class GestionUtilComponent implements OnInit{

    idM:string;
    userM:User;
    nom:string;
    prenom:string;
    login:string;
    etat:boolean;
     
    constructor(private  userService:  UserService) {
        
    }

    ngOnInit() {
        
    }

 getRowuser(message:User){
    this.userM=message;
    this.nom=this.userM.nom;
     this.prenom=this.userM.prenom;
      this.login=this.userM.login;
      this.etat=this.userM.etat;
    console.log("userM nom   "+this.nom);
    //service get user et afficher dans Modal 
 }  

setBloquer(){
    console.log(this.userM.etat);
    if (this.userM.etat != false){
        this.userM.etat = false;
        this.userService.update(this.userM).
    subscribe(reultat => { 
        this.etat=this.userM.etat;
        console.log(this.userM) ;
    },
    error =>{
        console.log(error);
    });
    
}
    console.log(this.etat);
}
setDebloquer(){
    console.log(this.etat);
    if(this.etat!=true){
     this.userM.etat = true;
        this.userService.update(this.userM).
    subscribe(reultat => { 
        this.etat=this.userM.etat;
        console.log(this.userM) ;
    },
    error =>{
        console.log(error);
    });
}
    console.log(this.etat);
}





}



