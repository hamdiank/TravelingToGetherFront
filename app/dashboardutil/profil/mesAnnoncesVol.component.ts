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
import { CommentaireService } from "../../_services/commentaire.service";

declare var $:any;

@Component({
    selector: 'mes-annonces-vol-cmp',
    moduleId: module.id,
    templateUrl: 'mesAnnoncesVol.component.html',
    providers:[AnnonceVolService, CommentaireService],
    styleUrls:['mesAnnoncesVol.component.css']

})

export class MesAnnoncesVolComponent implements OnInit {
        
    idCommentaire:string;

    commentaires: any[];
    idAnnonceVol: string;
    commentAppear: boolean;

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

    // model: any={};

    // id: string;

     heureDepart: string;

     testPaysDepart: boolean= false;
     testAeroportDepart: boolean= false;

     testPaysArrivee: boolean= false;
     testAeroportArrivee: boolean= false;

     

    ////////////////////////////////////////////
    model: any={};
    annoncesCovoi: AnnonceCovoi[];
    idUtilisateur: string;
    datePublication: string;
    public selected: any={};
    annonceCovoi: AnnonceCovoi;

    ///////////////////////////////////////

    mesAnnoncesVol:any=[];
    id:string;

    constructor(private annonceVolService: AnnonceVolService,private annonceCovoiService: AnnonceCovoiService , private router: Router, private paysService: PaysService, private cityService : CityService, private reservationService: ReservationService, private commentaireService: CommentaireService ){
      this.selectedPays.idPays='0';
    this.paysService.getAll().subscribe( pays=> { this.pays=pays 
    
    });
    console.log(JSON.stringify(this.pays));   
}
/////////////////////////////////////////////////////
onClickCommentaire(commentaire){
console.log("ttttttttttttt"+commentaire.id)
this.idCommentaire= commentaire.id
}
supprimerCommentaire(){
    this.commentaireService.deleteCommentaire(this.idCommentaire.toString()).subscribe(data=> {
        console.log("rrrrrrr"),
         this.getCommentairesByAnnonce(this.idAnnonceVol);
    })
}
getCommentairesByAnnonce(id){
    console.log("vvvvvvvvvvvv"+ id)
    this.idAnnonceVol= id;
       this.commentaireService.getCommentairesByAnnonceVol(id).subscribe( commentaires=> { this.commentaires=commentaires,
         console.log(commentaires)
        
    });
}
addCommentaire(){
console.log("fffffffff"+ this.model.text)
this.commentaireService.addCommentaireAnnonceVol(this.model.text, this.idAnnonceVol, this.id).subscribe( data => { 
                    console.log("model=>"+this.model.text),
                    this.getCommentairesByAnnonce(this.idAnnonceVol);
                })
}
//////////////////////////////////////////////////
/////////////////////////////////////////////////////

    onSelect1(idPays1) {
        console.log('idPaysDepart'+idPays1)
        console.log('idPaysDepartModel'+this.model.paysDepart);
        console.log('idVilleDepart'+this.model.aeroportDepart);
        
    this.paysService.getById(idPays1).subscribe( onePays => {
        this.onePays= onePays, this.cities= onePays.cities,  this.paysDepart= onePays.nom,
         this.aeroports=onePays.aeroports
    });
    console.log(JSON.stringify(this.aeroports));
  }


      onSelect2(idPays2) {
        console.log('idPaysArrivee'+idPays2)
        console.log('idPaysArriveeModel'+this.model.paysDepart);
        console.log('idVilleArrivee'+this.model.villeArrivee);
    this.paysService.getById(idPays2).subscribe( onePays2 => {
        this.onePays2= onePays2, this.cities2= onePays2.cities,  this.paysArrivee= onePays2.nom,
        this.aeroports2=onePays2.aeroports
    });
    console.log(JSON.stringify(this.aeroports2));
  }

  changePaysDepart(){
      this.testPaysDepart=true;
  }
  changeAeroportDepart(){
      this.testAeroportDepart=true;
  }

  changePaysArrivee(){
      this.testPaysArrivee=true;
  }
  changeAeroportArrivee(){
      this.testAeroportArrivee=true;
  }

  
////////////////////////////////////////////////////


onClick(annonceVol: any){
    this.testPaysDepart=false;
    this.testAeroportArrivee=false;
    this.testPaysArrivee=false;
    this.testAeroportArrivee=false;
    console.log(annonceVol)
    
    this.selected=annonceVol;
    this.model=this.selected
    console.log(this.model.id)
    console.log("jjjjjjjjjj")
    console.log(this.selected)
}
 getMesAnnonceVol(){
    this.annonceVolService.getmesAnnoncesVol(this.idUtilisateur).subscribe(mesAnnoncesVol=>{
           this.mesAnnoncesVol= mesAnnoncesVol
        } );

    }
modifierAnnonceVol(){
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
            this.model.aeroportDepart,this.model.paysArrivee, this.model.aeroportArrivee,this.model.description, this.idUtilisateur )
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
    this.getMesAnnonceVol();
        }
}

