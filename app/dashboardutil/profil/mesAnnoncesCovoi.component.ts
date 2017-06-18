import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { Router } from "@angular/router";
import { Pays } from "../../_models/Pays";
import { City } from "../../_models/city";
import { PaysService } from "../../_services/pays.service";
import { CityService } from "../../_services/city.service";
import { ReservationService } from "../../_services/reservation.service";
import { AlertService } from "../../_services/alert.service";


declare var $:any;

@Component({
    selector: 'mes-annonces-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'mesAnnoncesCovoi.component.html',
    providers:[AnnonceCovoiService, ReservationService],
    styleUrls:  ['myModal3.css']
})

export class MesAnnoncesCovoiComponent implements OnInit {

    message: string;

    etat: boolean;

    accepted:boolean=false;

    refused: boolean= false;

    idReservation: string;
    /////////////////////////////////////////////
    paysDepart: string;
    paysArrivee: string;

    selectedPays:any={}
    pays: Pays[];
    cities: City[];
    cities2: City[];
    onePays: Pays;
    onePays2: Pays;

    // model: any={};

    // id: string;

     heureDepart: string;

     testPaysDepart: boolean= false;
     testVilleDepart: boolean= false;

     testPaysArrivee: boolean= false;
     testVilleArrivee: boolean= false;
     ////////////Reservations//////////////////
    public reservations: any [];


     ///////////////////////////////////////////
     

    ////////////////////////////////////////////
    model: any={};
    annoncesCovoi: AnnonceCovoi[];
    id: string;
    idUtilisateur: string;
    datePublication: string;
    public selected: any={};
    annonceCovoi: AnnonceCovoi;

    constructor(private annonceCovoiService: AnnonceCovoiService , private router: Router, private paysService: PaysService, private cityService : CityService, private reservationService: ReservationService,private alertService: AlertService ){
      this.selectedPays.idPays='0';
    this.paysService.getAll().subscribe( pays=> { this.pays=pays 
    
    });
    console.log(JSON.stringify(this.pays));   
    }
/////////////////////////////////////////////////////
   onSelect1(idPays1) {
       
       //this.model.paysDepart= idPays1;
        console.log('idPaysDepart'+idPays1)
        console.log('idPaysDepartModel'+this.model.paysDepart);
        console.log('idVilleDepart'+this.model.villeDepart);
        
    this.paysService.getById(idPays1).subscribe( onePays => {
        this.onePays= onePays, this.cities= onePays.cities,  this.paysDepart= onePays.nom
    });
    console.log(JSON.stringify(this.cities));
  }


      onSelect2(idPays2) {
        console.log('idPaysArrivee'+idPays2)
        console.log('idPaysArriveeModel'+this.model.paysDepart);
        console.log('idVilleArrivee'+this.model.villeArrivee);
    this.paysService.getById(idPays2).subscribe( onePays2 => {
        this.onePays2= onePays2, this.cities2= onePays2.cities,  this.paysArrivee= onePays2.nom
    });
    console.log(JSON.stringify(this.cities));
  }

  changePaysDepart(){
      this.testPaysDepart=true;
  }
  changeVilleDepart(){
      this.testVilleDepart=true;
  }

  changePaysArrivee(){
      this.testPaysArrivee=true;
  }
  changeVilleArrivee(){
      this.testVilleArrivee=true;
  }

  
////////////////////////////////////////////////////

getMesAnnoncesCovoi(){
    let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    this.id=currentUserId;
    console.log(typeof(this.id)+"hhhhh")
    this.annonceCovoiService.getMesAnnoncesCovoi(this.id).subscribe( annoncesCovoi=> { this.annoncesCovoi=annoncesCovoi
    
    });
}

onClick(annonceCovoi: AnnonceCovoi){
    this.testPaysDepart=false;
    this.testVilleArrivee=false;
    this.testPaysArrivee=false;
    this.testVilleArrivee=false;
    console.log(annonceCovoi)
    
    this.selected=annonceCovoi;
    this.model=this.selected
    console.log(this.model.id)
    console.log("jjjjjjjjjj")
    console.log(this.selected)

    this.getReservationsByAnnonceCovoi();

}

onClickReservation(reservation){
    this.idReservation= reservation.idReservation;
    console.log("5555555"+this.idReservation+ typeof(this.idReservation))

}
///////////////// Get Reservation by AnnonceCovoi///////////////
getReservationsByAnnonceCovoi(){
    this.reservationService.getReservationsByAnnonceCovoi(this.selected.id)
    .subscribe(
         reservations=> {
              this.reservations=reservations, console.log(this.reservations)
    
    });
}

////////////////////////////////////////////////////////////////

///////////////// Modifier Annonce Covoi ///////////////////////
modifierAnnonceCovoi(){
    let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    this.idUtilisateur=currentUserId;
    this.datePublication="26/04/2017";
    if(this.testPaysDepart==true){
        this.model.paysDepart= this.paysDepart;
    }
    if(this.testPaysArrivee==true){
        this.model.paysArrivee= this.paysArrivee;
    }
    
   // this.model.paysDepart= this.paysDepart;
    //this.model.paysArrivee= this.paysArrivee;
    console.log(typeof(this.model.paysDepart))
    
    this.annonceCovoiService.modifierAnnonceCovoi(this.model.heureDepart,this.model.dateDepart,this.model.paysDepart,
            this.model.villeDepart,this.model.paysArrivee, this.model.villeArrivee,this.model.nombrePlaces,
            this.model.cotisation, this.model.id, this.idUtilisateur)
     .subscribe(
                data => {
                    this.router.navigate(['dashboardutil/MesAnnoncesCovoi']);
                });
}
supprimerAnnonceCovoi(){
    this.annonceCovoiService.supprimerAnnonceCovoi(this.model.id)
    .subscribe(data => {
        this.router.navigate(['dashboardutil/MesAnnoncesCovoi'])
    });
    
}

accepterReservation(){
    console.log(this.idReservation)
    this.reservationService.accepterReservation(this.idReservation)
    .subscribe(
                                   data => { 
                  if(data !== null){
                  // this.router.navigate(['dashboardutil/Accueil']);
                    console.log("ffffffffff"+data);

                 }else {
                     console.log("ssssssss")
                    this.message = "Nombre de places n'est pas disponible pour le moment   Complet ";
                    console.log(this.message)
                    this.alertService.error(this.message);
                    console.log(data)

                }
            }
    );

}
refuserReservation(){
    let etat= '';
    this.reservationService.refuserReservation(this.idReservation)
        .subscribe(data=>{
            this.refused=true;
            console.log("refused")
        });

}



        ngOnInit() {
             let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id)
               this.getMesAnnoncesCovoi();

        }
}
