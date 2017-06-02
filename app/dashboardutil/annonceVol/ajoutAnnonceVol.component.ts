import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { Country } from "../../_models/Country";
import { State } from "../../_models/State";
import { PaysService } from "../../_services/pays.service";
import { Pays } from "../../_models/Pays";
import { City } from "../../_models/city";
import { CityService } from "../../_services/city.service";
import { AnnonceVolService } from "../../_services/annonceVol.service";
import { Aeroport } from "../../_models/aeroport";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";


@Component({
    selector: 'ajout-annonce-vol-cmp',
    moduleId: module.id,
    templateUrl: 'ajoutAnnonceVol.component.html',
    providers: [ AnnonceVolService]
})

export class AjoutAnnonceVolComponent implements OnInit{

    paysDepart: Pays;
    paysArrivee: Pays;

    selectedPays:any={}
    pays: Pays[];
    cities: City[];
    cities2: City[];
    onePays: Pays;
    onePays2: Pays;

    aeroports: Aeroport[];
    aeroports2: Aeroport[];
    
    

     model: any={};

     id: string;

     heureDepart: string;

    val1: number;

    val2: number;

    val3: number;

    val4: number = 100;
///////////////////////////////////////////////////////////////////

    constructor( private paysService: PaysService, private cityService : CityService,private annonceVolService: AnnonceVolService) {
    this.selectedPays.idPays='0';
    this.paysService.getAll().subscribe( pays=> { this.pays=pays 
    
    });
    console.log(JSON.stringify(this.pays));
  }
  ///////////////////////////////////////////////////////////////////

    onSelect1(idPays1) {
        console.log('idPaysDepart'+idPays1)
        console.log('idPaysDepartModel'+this.model.paysDepart);
        console.log('idVilleDepart'+this.model.villeDepart);
        
    this.paysService.getById(idPays1).subscribe( onePays => {
        this.onePays= onePays, this.cities= onePays.cities,  this.paysDepart= onePays.nom,
         this.aeroports=onePays.aeroports
    });
    console.log(JSON.stringify(this.cities));
  }


      onSelect2(idPays2) {
        console.log('idPaysArrivee'+idPays2)
        console.log('idPaysArriveeModel'+this.model.paysDepart);
        console.log('idVilleArrivee'+this.model.villeArrivee);
    this.paysService.getById(idPays2).subscribe( onePays2 => {
        this.onePays2= onePays2, this.cities2= onePays2.cities,  this.paysArrivee= onePays2.nom,
        this.aeroports2=onePays2.aeroports
    });
    console.log(JSON.stringify(this.cities));
  }
///////////////////////////////////////////////////////////////
  
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

  
        onInputSpin($event) {
    $event.preventDefault();
    console.log('selected: ' + $event.target.value);
  }
  ///////////////////////////////////////////////////////////////
  
   onSubmit(){  
            console.log("aaaaaaaaaaaa");
            console.log(this.model.spin);
            console.log(this.model.minutes);
            
            
            //console.log(this.user);
            //this.model.heureDepart= this.model.heure +':'+ this.model.minutes;
            this.model.paysDepart= this.paysDepart;
            this.model.paysArrivee= this.paysArrivee;
            
            this.annonceVolService.ajouterAnnonceVol(this.model.heureDepart,this.model.dateDepart,this.model.paysDepart,
            this.model.aeroportDepart,this.model.paysArrivee, this.model.aeroportArrivee, this.id )
             .subscribe(
                data => { 
                    console.log("model=>"+this.model.dateDepart)
                });
        }
///////////////////////////////////////////////////////////////

    ngOnInit(){
         let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id)
            console.log("ngOnInit")

    }
}
