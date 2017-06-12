import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { Router } from "@angular/router";
import { Pays } from "../../_models/Pays";
import { City } from "../../_models/city";
import { PaysService } from "../../_services/pays.service";
import { CityService } from "../../_services/city.service";
import { ReservationService } from "../../_services/reservation.service";
import { AnnonceVolService } from "../../_services/annonceVol.service";
import { Aeroport } from "../../_models/aeroport";
import { AnnonceTrainService } from "../../_services/annonceTrain.service";
import { Station } from "../../_models/Station";

declare var $:any;

@Component({
    selector: 'mes-annonces-trin-cmp',
    moduleId: module.id,
    templateUrl: 'mesAnnoncesTrain.component.html',
    providers:[AnnonceVolService],
    styleUrls:['mesAnnoncesTrain.component.css']

})

export class MesAnnoncesTrainComponent implements OnInit {

    aeroports:Aeroport[];
    aeroports2:Aeroport[];
    

    etat: boolean;

    /////////////////////////////////////////////
    paysDepart: string;
    paysArrivee: string;

    selectedPays:any={}
    pays: Pays[];
    cities: City[];
    cities2: City[];
    onePays: Pays;
    onePays2: Pays;

    stations: Station[];
    stations2: Station[];

    // model: any={};

    // id: string;

     heureDepart: string;

     testPaysDepart: boolean= false;
     testStationTrainDepart: boolean= false;

     testPaysArrivee: boolean= false;
     testStationTrainArrivee: boolean= false;

     

    ////////////////////////////////////////////
    model: any={};
    annoncesCovoi: AnnonceCovoi[];
    idUtilisateur: string;
    datePublication: string;
    public selected: any={};
    annonceCovoi: AnnonceCovoi;

    ///////////////////////////////////////

    mesAnnoncesTrain:any=[];
    id:string;

    constructor(private annonceVolService: AnnonceVolService,private annonceCovoiService: AnnonceCovoiService , private router: Router, private paysService: PaysService, private cityService : CityService, private reservationService: ReservationService, private annonceTrainService: AnnonceTrainService ){
      this.selectedPays.idPays='0';
    this.paysService.getAll().subscribe( pays=> { this.pays=pays 
    
    });
    console.log(JSON.stringify(this.pays));   
    }
/////////////////////////////////////////////////////

    onSelect1(idPays1) {
        console.log('idPaysDepart'+idPays1)
        console.log('idPaysDepartModel'+this.model.paysDepart);
        console.log('idVilleDepart'+this.model.aeroportDepart);
        
    this.paysService.getById(idPays1).subscribe( onePays => {
        this.onePays= onePays, this.cities= onePays.cities,  this.paysDepart= onePays.nom,
         this.aeroports=onePays.aeroports, this.stations= onePays.stations
    });
    console.log(JSON.stringify(this.aeroports));
  }


      onSelect2(idPays2) {
        console.log('idPaysArrivee'+idPays2)
        console.log('idPaysArriveeModel'+this.model.paysDepart);
        console.log('idVilleArrivee'+this.model.villeArrivee);
    this.paysService.getById(idPays2).subscribe( onePays2 => {
        this.onePays2= onePays2, this.cities2= onePays2.cities,  this.paysArrivee= onePays2.nom,
        this.aeroports2=onePays2.aeroports,this.stations2= onePays2.stations
    });
    console.log(JSON.stringify(this.aeroports2));
  }

  changePaysDepart(){
      this.testPaysDepart=true;
  }
  changeAeroportDepart(){
      this.testStationTrainDepart=true;
  }

  changePaysArrivee(){
      this.testPaysArrivee=true;
  }
  changeAeroportArrivee(){
      this.testStationTrainArrivee=true;
  }

  
////////////////////////////////////////////////////


onClick(annonceTrain: any){
    this.testPaysDepart=false;
    this.testStationTrainArrivee=false;
    this.testPaysArrivee=false;
    this.testStationTrainArrivee=false;
    console.log(annonceTrain)
    
    this.selected=annonceTrain;
    this.model=this.selected
    console.log(this.model.id)
    console.log("jjjjjjjjjj")
    console.log(this.selected)
}
 getMesAnnoncesTrain(){
    this.annonceTrainService.getmesAnnoncesTrain(this.idUtilisateur).subscribe(mesAnnoncesTrain=>{
           this.mesAnnoncesTrain= mesAnnoncesTrain
        } );

    }
modifierAnnonceTrain(){
  //  let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
  //  this.idUtilisateur=currentUserId;

    if(this.testPaysDepart==true){
        this.model.paysDepart= this.paysDepart;
    }
    if(this.testPaysArrivee==true){
        this.model.paysArrivee= this.paysArrivee;
    }
    
   // this.model.paysDepart= this.paysDepart;
    //this.model.paysArrivee= this.paysArrivee;
    console.log(typeof(this.model.paysDepart))
    
    this.annonceVolService.modifierAnnonceVol(this.model.id,this.model.heureDepart,this.model.dateDepart,this.model.paysDepart,
            this.model.stationTrainDepart,this.model.paysArrivee, this.model.stationTrainArrivee, this.idUtilisateur )
     .subscribe(
                data => {
                    this.router.navigate(['dashboardutil/MesAnnoncesVol']);
                });
}
supprimerAnnonceVol(){
    this.annonceVolService.supprimerAnnonceVol(this.model.id)
         .subscribe(
                data => {
                    this.router.navigate(['dashboardutil/MesAnnoncesVol']);
                });
}
    
 ngOnInit() {
     let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    this.idUtilisateur=currentUserId;
    console.log(this.id)
    this.getMesAnnoncesTrain();
        }
}

