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
import { CommentaireService } from "../../_services/commentaire.service";

declare var $:any;

@Component({
    selector: 'annonce-vol-cmp',
    moduleId: module.id,
    templateUrl: 'annonceVol.component.html',
    styleUrls:['annonceVol.component.css'],
    providers:[AnnonceVolService, CommentaireService]
})

export class AnnonceVolComponent implements OnInit {


    idCommentaire:string;

    commentaires: any[];
    idAnnonceVol: string;

public id: string;
annoncesVol: any=[];

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

     annoncesVolToFilter: any[];
     test:boolean=false;
     test2:boolean=false;


  ///////////////////////////////////////////////////////////////

constructor(private annonceVolService: AnnonceVolService, private annonceCovoiService: AnnonceCovoiService , private router: Router, private paysService: PaysService, private cityService : CityService, private commentaireService: CommentaireService){
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
console.log("hhh"+ this.id);
console.log("zzzzzz"+ this.idAnnonceVol)
this.commentaireService.addCommentaireAnnonceVol(this.model.text, this.idAnnonceVol, this.id).subscribe( data => { 
                    console.log("model=>"+this.model.text)
                   this.getCommentairesByAnnonce(this.idAnnonceVol);
                })
}
//////////////////////////////////////////////////

getAnnoncesVol(){
this.annonceVolService.getAnnoncesVol().subscribe(annoncesVol =>{
    this.annoncesVol=annoncesVol, this.annoncesVolToFilter= annoncesVol
    console.log('AnnoncesVol here')
    console.log(this.annoncesVol)

    console.log('AnnoncesVolToFilter here')
    console.log(this.annoncesVolToFilter)


});

}

//////////////////////////////////////////////////

 onSelect1(idPays1) {
        console.log('idPaysDepart'+idPays1)
        console.log('idPaysDepartModel'+this.model.paysDepart);
        console.log('idVilleDepart'+this.model.villeDepart);
        
    this.paysService.getById(idPays1).subscribe( onePays => {
        this.onePays= onePays, this.cities= onePays.cities,  this.paysDepart= onePays.nom,
        this.aeroports=onePays.aeroports
    });
    //console.log(JSON.stringify(this.cities));
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
    console.log(JSON.stringify(this.onePays2));
  }
///////////////////////////////////////////////////////////////

onSubmit(){
    console.log("paysDepart:"+ this.model.paysDepart)
    console.log("paysArrivee:"+ this.model.paysArrivee)
    console.log("aeroportDepart:"+ this.model.aeroportDepart)
    console.log("aeroportArrivee:"+ this.model.aeroportArrivee)
    console.log("dateDepart:"+ this.model.dateDepart)
    

    /////////////////////////////////////////////
   if(this.model.paysDepart!= 0 && this.model.aeroportDepart != 0) {
    
         this.annoncesVol=this.annoncesVolToFilter;

        var aDepart = this.model.aeroportDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1 )
            }
        );

        console.log('333333333333')
        console.log(this.annoncesVol)
   }
   ///////////////date depart //////////////////////////
   if(this.model.paysDepart!= 0 && this.model.aeroportDepart != 0 && this.model.dateDepart != 0) {
    
         this.annoncesVol=this.annoncesVolToFilter;

        var aDepart = this.model.aeroportDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1 )
            }
        );
     var dDepart = this.model.dateDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('4444444444');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1 )
            }
        );  

        console.log('333333333333')
        console.log(this.annoncesVol)
   }

       if(this.model.paysArrivee!= 0 && this.model.aeroportArrivee != 0){
            this.annoncesVol=this.annoncesVolToFilter;

            var aArrivee = this.model.aeroportArrivee;

       console.log(aArrivee)

               this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1 )
            }
        );
       }
       //////////////////date depart /////////////////////////
       if(this.model.paysArrivee!= 0 && this.model.aeroportArrivee != 0 && this.model.dateDepart!= 0){
            this.annoncesVol=this.annoncesVolToFilter;

            var aArrivee = this.model.aeroportArrivee;

       console.log(aArrivee)

               this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1 )
            }
        );
             var dDepart = this.model.dateDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('4444444444');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1 )
            }
        );  
        
       }

   if(this.model.paysDepart!= 0 && this.model.aeroportDepart != 0 && this.model.paysArrivee!= 0 && this.model.aeroportArrivee != 0 ){
       
         this.annoncesVol=this.annoncesVolToFilter;

        var aDepart = this.model.aeroportDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1 )
            }
        );

        console.log('333333333333')
        console.log(this.annoncesVol)

         var aArrivee = this.model.aeroportArrivee;

       console.log(aArrivee)

               this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1 )
            }
        );
   }
   ////////////////////date Depart///////////////////
     if(this.model.paysDepart!= 0 && this.model.aeroportDepart != 0 && this.model.paysArrivee!= 0 && this.model.aeroportArrivee != 0 && this.model.dateDepart != 0 ){
       
         this.annoncesVol=this.annoncesVolToFilter;

        var aDepart = this.model.aeroportDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportDepart.toLowerCase().indexOf(aDepart.toLowerCase()) > -1 )
            }
        );

        console.log('333333333333')
        console.log(this.annoncesVol)

         var aArrivee = this.model.aeroportArrivee;

       console.log(aArrivee)

               this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.aeroportArrivee.toLowerCase().indexOf(aArrivee.toLowerCase()) > -1 )
            }
        );
             var dDepart = this.model.dateDepart;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('4444444444');
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesVol= this.annoncesVol.filter(
        (result) => {
                return (result.dateDepart.toLowerCase().indexOf(dDepart.toLowerCase()) > -1 )
            }
        );  
   } 
    }

     ngOnInit() {
        let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
        this.id=currentUserId;
        console.log(this.id)
        this.getAnnoncesVol();
        this.model.paysDepart=0;
        this.model.paysArrivee=0;
        this.model.aeroportDepart=0;
        this.model.aeroportArrivee=0;
        this.model.dateDepart=0;
        }
}
