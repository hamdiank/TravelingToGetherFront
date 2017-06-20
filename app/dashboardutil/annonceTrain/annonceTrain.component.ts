import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { Router } from "@angular/router";
import { PaysService } from "../../_services/pays.service";
import { CityService } from "../../_services/city.service";
import { Pays } from "../../_models/Pays";
import { City } from "../../_models/city";
import { AnnonceVolService } from "../../_services/annonceVol.service";
import { Aeroport } from "../../_models/aeroport";
import { AnnonceTrainService } from "../../_services/annonceTrain.service";
import { Station } from "../../_models/Station";
import { CommentaireService } from "../../_services/commentaire.service";

declare var $:any;

@Component({
    selector: 'annonce-train-cmp',
    moduleId: module.id,
    templateUrl: 'annonceTrain.component.html',
    styleUrls:['annonceTrain.component.css'],
    providers:[AnnonceVolService, CommentaireService]
})

export class AnnonceTrainComponent implements OnInit {
    idCommentaire:string;

    commentaires: any[];
    idAnnonceTrain: string;

public id: string;
annoncesTrain: any=[];

selectedPays:Pays= new Pays();
/////////////////////////////////////////////////

    idUtilisateur: any;
    utilisateur: any={};
     public model : any ={};

    paysDepart: Pays;
    paysArrivee: Pays;

  //  selectedPays:any={}
    pays: Pays[];
    cities: City[];
    cities2: City[];
    onePays: Pays;
    onePays2: Pays;

    aeroports:Aeroport[];
    aeroports2:Aeroport[];

    stations:Station[];
    stations2:Station[];

     annoncesTrainToFilter: any[];
     test:boolean=false;
     test2:boolean=false;


  ///////////////////////////////////////////////////////////////

constructor(private annonceTrainService: AnnonceTrainService, private annonceCovoiService: AnnonceCovoiService , private router: Router, private paysService: PaysService, private cityService : CityService, private commentaireService: CommentaireService){
this.selectedPays.idPays="0";
    this.paysService.getAll().subscribe( pays=> { this.pays=pays 
    
    });
    console.log(JSON.stringify(this.pays));

}
onClick(commentaire){
console.log("ttttttttttttt"+commentaire.id)
this.idCommentaire= commentaire.id
}
supprimerCommentaire(){
    this.commentaireService.deleteCommentaire(this.idCommentaire).subscribe(data=> {
        console.log("rrrrrrr"),
         this.getCommentairesByAnnonce(this.idAnnonceTrain);
    })
}
getCommentairesByAnnonce(id){
    console.log("vvvvvvvvvvvv"+ id)
    this.idAnnonceTrain= id;
       this.commentaireService.getCommentairesByAnnonceTrain(id).subscribe( commentaires=> { this.commentaires=commentaires,
         console.log(commentaires)
        
    });
}
addCommentaire(){
console.log("fffffffff"+ this.model.text)
console.log("hhh"+ this.id);
console.log("zzzzzz"+ this.idAnnonceTrain)
this.commentaireService.addCommentaireAnnonceTrain(this.model.text, this.idAnnonceTrain, this.id).subscribe( data => { 
                    console.log("model=>"+this.model.text)
                   this.getCommentairesByAnnonce(this.idAnnonceTrain);
                })
}
getAnnoncesTrain(){
this.annonceTrainService.getAnnoncesTrain().subscribe(annoncesTrain =>{
    this.annoncesTrain=annoncesTrain, this.annoncesTrainToFilter= annoncesTrain
    console.log('AnnoncesTrain here')
    console.log(this.annoncesTrain)

    console.log('AnnoncesVolToFilter here')
    console.log(this.annoncesTrainToFilter)


});

}

//////////////////////////////////////////////////

 onSelect1(idPays1) {
        console.log('idPaysDepart'+idPays1)
        console.log('idPaysDepartModel'+this.model.paysDepart);
        console.log('idVilleDepart'+this.model.villeDepart);
        
    this.paysService.getById(idPays1).subscribe( onePays => {
        this.onePays= onePays, this.cities= onePays.cities,  this.paysDepart= onePays.nom,
        this.aeroports=onePays.aeroports, this.stations=onePays.stations
    });
    //console.log(JSON.stringify(this.cities));
  }


      onSelect2(idPays2) {
        console.log('idPaysArrivee'+idPays2)
        console.log('idPaysArriveeModel'+this.model.paysDepart);
        console.log('idVilleArrivee'+this.model.villeArrivee);
    this.paysService.getById(idPays2).subscribe( onePays2 => {
        this.onePays2= onePays2, this.cities2= onePays2.cities,  this.paysArrivee= onePays2.nom,
        this.aeroports2=onePays2.aeroports, this.stations2=onePays2.stations
    });
    console.log(JSON.stringify(this.aeroports2));
    console.log(JSON.stringify(this.onePays2));
  }
///////////////////////////////////////////////////////////////

onSubmit(){
    console.log("paysDepart:"+ this.model.paysDepart)
    console.log("paysArrivee:"+ this.model.paysArrivee)
    console.log("aeroportDepart:"+ this.model.stationDepart)
    console.log("aeroportArrivee:"+ this.model.stationArrivee)

    /////////////////////////////////////////////
  if(this.model.paysDepart!= 0 && this.model.stationDepart != 0) {
    
         this.annoncesTrain=this.annoncesTrainToFilter;

        var sDepart = this.model.stationDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesTrain= this.annoncesTrain.filter(
        (result) => {
                return (result.stationTrainDepart.toLowerCase().indexOf(sDepart.toLowerCase()) > -1 )
            }
        );

        console.log('333333333333')
        console.log(this.annoncesTrain)
   }
       if(this.model.paysArrivee!= 0 && this.model.stationArrivee != 0){
            this.annoncesTrain=this.annoncesTrainToFilter;

            var sArrivee = this.model.stationArrivee;

       console.log(sArrivee)

               this.annoncesTrain= this.annoncesTrain.filter(
        (result) => {
                return (result.stationTrainArrivee.toLowerCase().indexOf(sArrivee.toLowerCase()) > -1 )
            }
        );
       }
   if(this.model.paysDepart!= 0 && this.model.stationDepart != 0 && this.model.paysArrivee!= 0 && this.model.stationArrivee != 0 ){
       
         this.annoncesTrain=this.annoncesTrainToFilter;

        var sDepart = this.model.stationDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesTrain= this.annoncesTrain.filter(
        (result) => {
                return (result.stationTrainDepart.toLowerCase().indexOf(sDepart.toLowerCase()) > -1 )
            }
        );

        console.log('333333333333')
        console.log(this.annoncesTrain)

         var sArrivee = this.model.stationArrivee;

       console.log(sArrivee)

               this.annoncesTrain= this.annoncesTrain.filter(
        (result) => {
                return (result.stationTrainArrivee.toLowerCase().indexOf(sArrivee.toLowerCase()) > -1 )
            }
        );
   }
    }


     ngOnInit() {
        let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id=currentUserId;
        console.log(this.id)
        this.getAnnoncesTrain();
        this.model.paysDepart=0;
        this.model.paysArrivee=0;
        this.model.aeroportDepart=0;
        this.model.aeroportArrivee=0;
        }
}
