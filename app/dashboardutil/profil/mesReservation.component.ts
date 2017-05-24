import { Component, OnInit } from "@angular/core";
import { ReservationService } from "../../_services/reservation.service";

@Component({
    selector: 'mes-reservations-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'mesReservations.component.html',
    providers:[],
    styleUrls:  ['mesReservations.component.css']
})

export class MesReservationsComponent implements OnInit {
    id: string;
    reservations: any[];
    idReservation: string;
    
constructor(private reservationService: ReservationService){}
getReservationsByUtilisateurReservation(){
    console.log("here")
    this.reservationService.getReservationsByUtilisateurReservation(this.id)
   .subscribe( reservations=> { this.reservations=reservations,
       console.log("hhhh")
       console.log(this.reservations)
       
    
    });

}

annulerReservation(){
    this.reservationService.annulerReservation(this.idReservation).subscribe(data=>{
        //this.getReservationsByUtilisateurReservation();
    });
}

onClick(reservation){
    this.idReservation=reservation.idReservation;
    console.log(this.idReservation)
}

        ngOnInit(){
            let currentUserId = JSON.parse(localStorage.getItem('currentUserId'));
            this.id=currentUserId;
            console.log(this.id)
            this.getReservationsByUtilisateurReservation();

        }
}


