import { Component, OnInit } from "@angular/core";
import { ReservationService } from "../../_services/reservation.service";
import { AlertService } from "../../_services/alert.service";

@Component({
    selector: 'mes-reservations-covoi-cmp',
    moduleId: module.id,
    templateUrl: 'mesReservations.component.html',
    providers:[],
    styleUrls:  ['mesReservations.component.css']
})

export class MesReservationsComponent implements OnInit {
    length:number;
    id: string;
    reservations: any[];
    idReservation: string;
    message: string;
    
constructor(private reservationService: ReservationService, private alertService : AlertService){}
getReservationsByUtilisateurReservation(){
    console.log("here")
    this.reservationService.getReservationsByUtilisateurReservation(this.id)
   .subscribe( reservations=> { this.reservations=reservations,
       console.log("hhhh")
       console.log(this.reservations.length)
       console.log(typeof(this.reservations))
       this.length=this.reservations.length,
       console.log("typ"+typeof(reservations.length))
    this.message = " La Liste de vos réservation est vide !! ",
    this.alertService.error(this.message);
       
    
    });

}
confirmerReservation(){
    console.log("ggggggggg")
    this.reservationService.confirmerReservation(this.idReservation).subscribe(
                   data => { 
                  if(data !== null){
                  // this.router.navigate(['dashboardutil/Accueil']);
                    console.log("ffffffffff"+data);
                    this.getReservationsByUtilisateurReservation();

                 }else {
                     console.log("ssssssss")
                    this.message = " nombre de places indisponibles ";
                    console.log(this.message)
                    this.alertService.error(this.message);
                    console.log(data)

                }
            },  error => {
                if(error){
                    console.log("ssssssss")
                    this.message = "Complet!!! pas de places disponibles ";
                    console.log(this.message)
                    this.alertService.error(this.message);
                }}
    );
}

annulerReservation(){
    this.reservationService.annulerReservation(this.idReservation).subscribe(data=>{
        this.getReservationsByUtilisateurReservation();
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


