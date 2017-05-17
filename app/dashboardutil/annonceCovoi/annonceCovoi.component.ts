import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { Router } from "@angular/router";
import { PaysService } from "../../_services/pays.service";
import { CityService } from "../../_services/city.service";
import { Pays } from "../../_models/Pays";
import { City } from "../../_models/city";

declare var $:any;

@Component({
    selector: 'annonce-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'annonceCovoi.component.html',
    providers:[AnnonceCovoiService]
})

export class AnnonceCovoiComponent implements OnInit {
    annoncesCovoi: AnnonceCovoi[];
     public model : any ={};

    id: string;
    datePublication: string;

    ///////////////////////////////////////////////////////////////
    paysDepart: Pays;
    paysArrivee: Pays;

    selectedPays:any={}
    pays: Pays[];
    cities: City[];
    cities2: City[];
    onePays: Pays;
    onePays2: Pays;

     modelRecherche: any={};

     annoncesCovoiToFilter: AnnonceCovoi[];
     test:boolean=false;
     test2:boolean=false;


  ///////////////////////////////////////////////////////////////
  
    constructor(private annonceCovoiService: AnnonceCovoiService , private router: Router, private paysService: PaysService, private cityService : CityService){
    this.selectedPays.idPays='0';
    this.paysService.getAll().subscribe( pays=> { this.pays=pays 
    
    });
    console.log(JSON.stringify(this.pays));

}
//////////////////////////////////////////////////
/*paginate(event) {
        //event.first = Index of the first record
        event.rows = 4;
        //event.page = Index of the new page
        //event.pageCount = Total number of pages
    }
*/

//////////////////////////////////////////////////

 onSelect1(idPays1) {
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
///////////////////////////////////////////////////////////////
/*onChange($eventChange){
      $eventChange.preventDefault();
    console.log('selectedchange: ' + $eventChange.target.value);
    this.getAnnoncesCovoi();

}*/


 /* onInput($event) {
    //  this.annoncesCovoiToFilter=this.annoncesCovoi;
      console.log(JSON.stringify('111111'+this.annoncesCovoiToFilter))
    $event.preventDefault();
    console.log('selected11111: ' + $event.target.value);
    console.log(typeof($event.target.value))
    
    var vDepart = $event.target.value;
    if(this.test==true){
        this.annoncesCovoi=this.annoncesCovoiToFilter;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222')
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesCovoi= this.annoncesCovoi.filter(
        (result) => {
                return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1 )
            }
        );
        //console.log(JSON.stringify(this.annoncesCovoi))

    }
    else{

            if (vDepart && vDepart.trim() != "0"){
                console.log('33333333')
        this.annoncesCovoi= this.annoncesCovoi.filter(
            (result) => {
                return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1 )
            }
        );
        this.test=true;
        
        console.log(this.test)

    } else{
        this.getAnnoncesCovoi();
    }

    }




  }
    onInput2($event) {
    $event.preventDefault();
    console.log('selected44444: ' + $event.target.value);
    console.log(typeof($event.target.value))
    
    var vArrivee = $event.target.value;
    if(this.test2==true){
        this.annoncesCovoi=this.annoncesCovoiToFilter;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222')
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesCovoi= this.annoncesCovoi.filter(
        (result) => {
                return (result.villeArrivee.toLowerCase().indexOf(vArrivee.toLowerCase()) > -1 )
            }
        );
        //console.log(JSON.stringify(this.annoncesCovoi))

    }
    else{

            if (vArrivee && vArrivee.trim() != "0"){
                console.log('33333333')
        this.annoncesCovoi= this.annoncesCovoi.filter(
            (result) => {
                return (result.villeArrivee.toLowerCase().indexOf(vArrivee.toLowerCase()) > -1 )
            }
        );
        this.test2=true;
        
        console.log(this.test2)

    } else{
       // this.getAnnoncesCovoi();
    }

    }



  }*/

onSubmit(){
    console.log("paysDepart:"+ this.model.paysDepart)
    console.log("paysArrivee:"+ this.model.paysArrivee)
    console.log("villeDepart:"+ this.model.villeDepart)
    console.log("villeArrivee:"+ this.model.villeArrivee)

    /////////////////////////////////////////////
        var vDepart = this.model.villeDepart;
    if(this.test==true){
        this.annoncesCovoi=this.annoncesCovoiToFilter;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222')
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesCovoi= this.annoncesCovoi.filter(
        (result) => {
                return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1 )
            }
        );
        //console.log(JSON.stringify(this.annoncesCovoi))

    }
    else{

            if (vDepart && vDepart.trim() != "0"){
                console.log('33333333')
        this.annoncesCovoi= this.annoncesCovoi.filter(
            (result) => {
                return (result.villeDepart.toLowerCase().indexOf(vDepart.toLowerCase()) > -1 )
            }
        );
        this.test=true;
        
        console.log(this.test)

    } else{
        this.getAnnoncesCovoi();
    }

    }



    ////////////////////////////////////////////


     var vArrivee = this.model.villeArrivee;
    if(this.test2==true){
        this.annoncesCovoi=this.annoncesCovoiToFilter;
        //this.annoncesCovoi=this.annoncesCovoiToFilter;
        console.log('22222222')
      //  this.annoncesCovoi=this.annoncesCovoiToFilter;
      //  console.log('22222222'+JSON.stringify(this.annoncesCovoi))
        this.annoncesCovoi= this.annoncesCovoi.filter(
        (result) => {
                return (result.villeArrivee.toLowerCase().indexOf(vArrivee.toLowerCase()) > -1 )
            }
        );
        //console.log(JSON.stringify(this.annoncesCovoi))

    }
    else{

            if (vArrivee && vArrivee.trim() != "0"){
                console.log('33333333')
        this.annoncesCovoi= this.annoncesCovoi.filter(
            (result) => {
                return (result.villeArrivee.toLowerCase().indexOf(vArrivee.toLowerCase()) > -1 )
            }
        );
        this.test2=true;
        
        console.log(this.test2)

    } else{
       // this.getAnnoncesCovoi();
    }

    }



    ///////////////////////////////////////////


    

}


  //////////////////////////////////////////////////////////

    getAnnoncesCovoi(){
     this.annonceCovoiService.getAnnoncesCovoi().subscribe( annoncesCovoi=> { this.annoncesCovoi=annoncesCovoi,
         this.annoncesCovoiToFilter= annoncesCovoi
    
    });
    console.log("annoncesCovoi");

    
    let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id) 
  /*   console.log (localStorage.getItem('currentUser'));
              let currentUser = JSON.parse(localStorage.getItem('currentUser'));
              console.log(currentUser)
                this.id=currentUser;
             //   console.log(currentUser.json().idUtilisateur)   */
}
        ngOnInit() {
             let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
              this.id=currentUserId;
               console.log(this.id)
            console.log("ngOnInit")
           this.getAnnoncesCovoi();
        }
}
