import { Component, OnInit } from '@angular/core';

import { PaysService, CityService, AlertService } from "../../_services/index";
import { Pays, Station } from "../../_models/index";
import * as _ from 'underscore';

import { AvionService } from "../../_services/avion.service";
import { Avion } from "../../_models/avion";
import { LoaderComponent } from "../../shared/loader/loader.component";
import { ValuesPipe } from "./valuesPipe";
import { FilterPipe } from './pipe'
import { City } from "../../_models/city";
import { AeroportService } from "../../_services/aeroport.service";
import { Aeroport } from "../../_models/aeroport";
import { StationService } from "../../_services/station.service";
import { TrainService } from "../../_services/train.service";
import { Train } from "../../_models/train";


@Component({
    selector: 'parametrage-cmp',
    moduleId: module.id,
    templateUrl: 'parametrage.component.html',
})

export class ParametrageComponent implements OnInit {

    paysCity: Pays;
    textFilter: string;
    cityFilter: string;
    loading: boolean = false;
    show: boolean = false;
    ajoute: boolean = false;
    pays: Pays[];
    city: City[];
    avions: Avion[];
    aero: Aeroport[];
    stations: Station[]
    trains: Train[];
    idM: string;
    paysM: Pays;
    cityM: City;
    aeroM: Aeroport;
    stationM: Station;
    avionM: Avion;
    trainM: Train;
    nomM: string;
    typeAvionM: string;
    nomVille: string;
    nomAero: string;
    nomStation: string;
    nomTrain:string;
    model: any = {};
    model2: any = {};
    model3: any = {};
    model4: any = {};
    model5: any = {};
    model6: any = {};
    model7: any = {};
    model8: any = {};
    model9: any = {};
    model10: any = {};
    avion: Avion;
    





    constructor(private paysService: PaysService, private avionService: AvionService, private cityService: CityService, private aeroportService: AeroportService, private stationService: StationService, private trainService: TrainService, private alertService: AlertService) {

    }

    ngOnInit() {
        // $.getScript('../../../assets/js/material-dashboard.js');

        console.log("loading on");
        this.loading = true;


        this.ListPays();
        this.ListAero();
        this.ListStation();
        this.ListAvions();
        this.ListCity();
        this.ListTrain();

    }

    //////////////////////////////////////////////////////////////////////////////////////////////

    ListPays() {

        this.paysService.getAll().
            subscribe(pays => {

                this.pays = pays;
                // initialize to page 1



                this.loading = false;
                console.log("loading off");


            },
            error => {
                if (error)

                    this.alertService.error("error");
                this.loading = false;
                console.log(error);
            }

            );
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////

    ajoutPays() {
        console.log(this.model2.nomPays);
        this.paysService.add(this.model2.nomPays).subscribe(result => {

            this.ListPays();

        });
        this.model2.nomPays = "";
    }

    //////////////////////////////////////////////////////////////////////////////////////////

    ajouterParametre() {
        this.ajoute = true;
        let v;
        let a;
        let s;
        if (this.model3.ville == null || this.model3.ville == "")
            console.log("ville null ");
        else v = this.model3.ville;
        if (this.model3.aeroport == null || this.model3.aeroport == "")
            console.log("aeroport null ");
        else a = this.model3.aeroport;

        if (this.model3.station == null || this.model3.station == "")
            console.log("aeroport null ");
        else s = this.model3.station;
        console.log(v + "  " + a + "  " + s);
        this.paysService.update(this.paysM, v, a, s).subscribe(result => {
            this.ListAero();
            this.ListCity();
            this.ListStation();
            this.ajoute = false;
        });
        this.model3.ville = "";
        this.model3.aeroport = "";
        this.model3.station = "";
    }

    /////////////////////////////////////////////////////////////////////////////////////////

    supprimerPays() {
        this.show = true;
        console.log(this.paysM.idPays);
        this.paysService.delete(this.paysM.idPays).subscribe(resultat => {
            this.ListPays();
            setTimeout(() => { this.show = false }, 2000);

        });


    }

    /////////////////////////////////////////////////////////////////////////////////////////////////////////

    modifierNomPays() {
        console.log(this.model.nom);
        this.paysM.nom = this.model.nom;
        this.paysService.updateNom(this.paysM).subscribe(result => {

            // this.ListPays();

        });
    }

    ////////////////////////////////////////////////////////////////////////////////////////////////////////

    getPays(pays: Pays) {


        this.paysM = pays;
        this.nomM = this.paysM.nom;

    }



    getCity(city: City) {


        this.cityM = city;
        this.nomVille = this.cityM.nom;
        console.log(this.nomVille);
    }
    ListCity() {
        this.cityService.getAll().
            subscribe(city => {

                this.city = city;
                // initialize to page 1
                // console.log(this.city);


            },
            error => {
                if (error)
                    this.alertService.error("error");

                this.loading = false;
                console.log(error);
            }

            );
    }

    supprimerCity() {

        console.log(this.cityM.idCity);
        this.cityService.delete(this.cityM.idCity).subscribe(resultat => {
            this.ListCity();
        });
    }

    modifierVille() {
        console.log(this.model5.nomVilleM);
        this.cityM.nom = this.model5.nomVilleM;
        this.cityService.update(this.cityM).subscribe(result => {

            // this.ListPays();

        });
    }

    getPaysById(id: string) {

        return this.paysService.getById(id).subscribe(p => {
            console.log(p.nom);
            return p.nom;
        });

    }

    getPaysByCity(nomC: string) {


        this.paysService.getByCity(nomC).subscribe(paysCity => {
            this.paysCity = paysCity;
            return this.paysCity.nom;

        });

    }


    /*---------------------------------------------------------------------------------*/

    getAero(aero: Aeroport) {

        this.aeroM = aero;
        console.log("dqssssssssss:zs " + JSON.stringify(this.aero));

        this.nomAero = this.aeroM.nom;
        console.log(this.nomAero);
    }

    ListAero() {

        this.aeroportService.getAll().
            subscribe(aero => {

                this.aero = aero;
                console.log("dqssssssssss: " + JSON.stringify(this.aero));
                // initialize to page 1
                // console.log(this.city);

               


            },
            error => {
                if (error)
                    this.alertService.error("error");

                this.loading = false;
                console.log(error);
            }

            );

    }


    supprimerAero() {

        console.log(this.aeroM.idAeroport);
        this.aeroportService.delete(this.aeroM.idAeroport).subscribe(resultat => {
            this.ListAero();
        });


    }
    modifierAero() {
        console.log(this.model6.nomAeroM);
        this.aeroM.nom = this.model6.nomAeroM;
        this.aeroportService.update(this.aeroM).subscribe(result => {

            // this.ListPays();

        });
    }

    /*---------------------------------------------------------------------------------*/

    getStation(station: Station) {

        this.stationM = station;
        console.log("dqssssssssss:zs " + JSON.stringify(this.stationM));
        this.nomStation = this.stationM.nom;
        console.log(this.nomStation);
    }



    ListStation() {

        this.stationService.getAll().
            subscribe(station => {
                console.log(JSON.stringify(station));
                this.stations = station;

                // initialize to page 1


               


            },
            error => {
                if (error)
                    this.alertService.error("error");
                this.loading = false;
                console.log(error);
            }

            );

    }


    supprimerStation() {

        console.log(this.stationM.idStation);
        this.stationService.delete(this.stationM.idStation).subscribe(resultat => {
            this.ListStation();
        });


    }

    modifierStation() {
        console.log(this.model7.nomStationM);
        this.stationM.nom = this.model7.nomStationM;
        this.stationService.update(this.stationM).subscribe(result => {

            // this.ListPays();

        });
    }

    /*---------------------------------------------------------------------------------*/
    getAvion(avion: Avion) {

        this.avionM = avion;
        this.typeAvionM = this.avionM.type;
        console.log("df  " + JSON.stringify(this.avionM));
    }


    ListAvions() {
        this.avionService.getAvions().subscribe(avions => {
            this.avions = avions;
            console.log("aaaaaaaaaaa");
        }
        );

    }
    //    console.log(this.avions);
    //    console.log(typeof(this.avions));

    modifierAvion() {
        this.avionM.type = this.model4.typeAvion;
        this.avionService.update(this.avionM).subscribe(resultat => {
            this.ListAvions();
        });

    }
ajoutAvion(){


console.log(this.model10.nomA);
        this.avionService.add(this.model10.nomA).subscribe(result => {

            this.ListAvions();

        });
        this.model10.nomA = "";

}
   /* ajoutAvion() {
        this.avion.type = this.model4.typeAvion;
        console.log(this.avion.type);
        this.avionService.add(this.avion).subscribe(result=>{
        this.ListAvions();
        });

}*/

    supprimerAvion() {

        console.log(this.avionM.id);
        this.avionService.delete(this.avionM.id).subscribe(resultat => {
            console.log("del");
            this.ListAvions();
        });


    }



    /*---------------------------------------------------------------------------------*/


    getTrain(train: Train) {

        this.trainM = train;
        this.nomTrain = this.trainM.type;
        console.log("df  " + JSON.stringify(this.trainM));
    }

ajoutTrain(){


console.log(this.model9.nomV);
        this.trainService.add(this.model9.nomV).subscribe(result => {

            this.ListTrain();

        });
        this.model9.nomV = "";

}

    ListTrain() {
        this.trainService.getAll().subscribe(trains => {
            this.trains = trains;
            console.log("aaaaaaaaaaa");
        }
        );

    }


    supprimerTrain() {

        console.log(this.trainM.id);
        this.trainService.delete(this.trainM.id).subscribe(resultat => {
            console.log("del");
            this.ListTrain();
        });


    }
modifierTrain() {
        console.log(this.model8.nomTrainM);
        this.trainM.type = this.model8.nomTrainM;
        this.trainService.update(this.trainM).subscribe(result => {

            // this.ListPays();

        });
    }


    ////////////////////////////////////////////////////////////////



    filterPays(ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.pays = this.pays.filter(
                (result) => {
                    return (result.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
        } else {
            this.ListPays();
        }

    }

    filterVille(ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.city = this.city.filter(
                (result) => {
                    return (result.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
        } else {
            this.ListCity();
        }

    }

    filterAero(ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.aero = this.aero.filter(
                (result) => {
                    return (result.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
        } else {
            this.ListAero();
        }

    }
    filterStation(ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.stations = this.stations.filter(
                (result) => {
                    return (result.nom.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
        } else {
            this.ListStation();
        }

    }
    filterTrain(ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.trains = this.trains.filter(
                (result) => {
                    return (result.type.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
        } else {
            this.ListTrain();
        }

    }

    filterAvion(ev) {
        var val = ev.target.value;
        // if the value is an empty string don't filter the items
        if (val && val.trim() != '') {
            this.avions = this.avions.filter(
                (result) => {
                    return (result.type.toLowerCase().indexOf(val.toLowerCase()) > -1);
                });
        } else {
            this.ListAvions();
        }

    }
    /*---------------------------------------------------------------------------------*/


}