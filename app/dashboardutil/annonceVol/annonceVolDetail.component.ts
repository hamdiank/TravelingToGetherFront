import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import { AnnonceCovoi } from "../../_models/annonceCovoi";
import { AnnonceCovoiService } from "../../_services/annonceCovoi.service";
import { ActivatedRoute, Params } from "@angular/router";
import { UserService } from "../../_services/user.service";
import { AnnonceVolService } from "../../_services/annonceVol.service";
declare var google: any;
@Component({
    selector: 'annonce-vol-detail-cmp',
    moduleId: module.id,
    templateUrl: 'annonceVolDetail.component.html',
    providers:[AnnonceVolService]
})

export class AnnonceVolDetailComponent implements OnInit {
    message: string;

    currentUserId: string;
    annonceVol:any={};
    utilisateur:any={}
    id: number;
    private sub: any;

    constructor(private annonceVolService: AnnonceVolService, public route: ActivatedRoute,private userService: UserService){
       this.sub = this.route.params.subscribe(params => {
       this.id = +params['id']; 
       console.log(this.id)
       console.log('dddddddd')
    });
  
    console.log('I am here '+this.id)
    this.annonceVolService.getAnnonceVolById(this.id.toString()).subscribe( annonceVol=> { this.annonceVol = annonceVol,
        this.utilisateur=annonceVol.utilisateur

    });

}
  showPath(){

/*
var Depart= villeDepart;
var Arrivee= villeArrivee;

console.log('eeeeee'+Depart)
console.log('eeeeee'+Arrivee)*/





 var directionsService = new google.maps.DirectionsService;
       var directionsDisplay = new google.maps.DirectionsRenderer;
       var map = new google.maps.Map(document.getElementById('map'), {
          zoom: 7,
          center: {lat: 41.85, lng: -87.65}
        });
        directionsDisplay.setMap(map);
        calculateAndDisplayRoute(directionsService, directionsDisplay);

      function calculateAndDisplayRoute(directionsService, directionsDisplay) {

          var waypts = [];
        //  var stringDep:String; 


        directionsService.route({
          origin: 'Aéroport de Paris-Orly, Orly',
          destination: 'Aéroport Tunis Carthage Terminal 2, Tunis, Tunisie',
          waypoints: waypts,
          optimizeWaypoints: true,
          travelMode: 'WALKING'
        }, function(response, status) {
          if (status === 'OK') {
            directionsDisplay.setDirections(response);
          } else {
            window.alert('Directions request failed due to ' + status);
          }
        });
}
  }
ngOnInit(): void {
    this.currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
    this.showPath();
}

}
