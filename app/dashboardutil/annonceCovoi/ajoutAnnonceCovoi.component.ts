import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { DataService } from "./dataService";
import { Country } from "../../_models/Country";
import { State } from "../../_models/State";
import { PaysService } from "../../_services/pays.service";
import { Pays } from "../../_models/Pays";
import { City } from "../../_models/city";
import { CityService } from "../../_services/city.service";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";

@Component({
    selector: 'ajout-annonce-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'ajoutAnnonceCovoi.component.html',
    providers: [DataService, AnnonceCovoiService]
})

export class AjoutAnnonceCovoiComponent implements OnInit{
    selectedPays:any={}
    pays: Pays[];
     cities: City[];

     cities2: City[];

     onePays: Pays;

     onePays2: Pays;

     model: any={};

     id: string;

     heureDepart: string;

     nomPaysDepart: string;

     nomPaysArrivee: string;

     recupPaysDepart: Pays;
     recupPaysArrivee: Pays;


    constructor( private paysService: PaysService, private cityService : CityService, private annonceCovoiService: AnnonceCovoiService) {

    this.selectedPays.idPays='0';
     this.paysService.getAll().subscribe( pays=> { this.pays=pays 
    
    });
    console.log(JSON.stringify(this.pays));
  }
    onSelect1(idPays1) {
        console.log('idPaysDepart'+idPays1)
        console.log('idPaysDepartModel'+this.model.paysDepart);
        console.log('idVilleDepart'+this.model.villeDepart);
        
    this.paysService.getById(idPays1).subscribe( onePays => {
        this.onePays= onePays, this.cities= onePays.cities
    });
        this.paysService.getById(this.model.paysDepart).subscribe( recupPaysDepart => {
        this.recupPaysDepart= recupPaysDepart, this.nomPaysDepart= recupPaysDepart.nom, console.log(this.recupPaysDepart.nom)
    });
    console.log(JSON.stringify(this.cities));
  }
      onSelect2(idPays2) {
        console.log('idPaysArrivee'+idPays2)
        console.log('idPaysArriveeModel'+this.model.paysDepart);
        console.log('idVilleArrivee'+this.model.villeArrivee);
    this.paysService.getById(idPays2).subscribe( onePays2 => {
        this.onePays2= onePays2, this.cities2= onePays2.cities
    });
      this.paysService.getById(this.model.paysDepart).subscribe( recupPaysArrivee => {
    this.recupPaysArrivee= recupPaysArrivee, this.nomPaysArrivee= recupPaysArrivee.nom
    });
    console.log(JSON.stringify(this.cities));
  }

  onInput($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }
    onInput2($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

      onInputHeure($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }

        onInputMinutes($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }
   onSubmit(){  
            console.log("aaaaaaaaaaaa");
            //console.log(this.user);
    this.model.heureDepart= this.model.heure +':'+ this.model.minute;
    this.annonceCovoiService.ajouterAnnonceCovoi(this.model.heureDepart,this.model.dateDepart.formatted,this.nomPaysDepart,
    this.model.villeDepart,this.nomPaysArrivee, this.model.villeArrivee,this.model.nombrePlaces,
    this.model.cotisation, this.id )
        .subscribe(
            data => {  
            console.log("model=>"+this.model.dateDepart)
                });
        }




  
    ngOnInit(){
         let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id)
            console.log("ngOnInit")

    }
}