import { Component, OnInit } from '@angular/core';

import { PaysService, PagerService, CityService, AlertService } from "../../_services/index";
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
    aero: Aeroport[];
    station: Station[]
    trains: Train[];
    idM: string;
    paysM: Pays;
    cityM: City;
    aeroM: Aeroport;
    stationM: Station;
    avionM: Avion;
    trainM: Train;
    nomM: string;
    model: any = {};
    model2: any = {};
    model3: any = {};
    model4: any = {};
    avions: Avion[];
    returnArray = [];
    avion: Avion;
    // pager object
    pager: any = {};

    // paged items
    pagedItems: Pays[];
    pagedItemsCity: City[];
    pagedItemsAero: Aeroport[];
    pagedItemsStation: Station[];


    constructor(private paysService: PaysService, private pagerService: PagerService, private avionService: AvionService, private cityService: CityService, private aeroportService: AeroportService, private stationService: StationService, private trainService: TrainService, private alertService: AlertService) {

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
                this.setPage(1);


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

    addPays() {
        console.log(this.model2.nomPays);
        this.paysService.add(this.model2.nomPays).subscribe(result => {

            this.ListPays();

        });
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

    ////////////////////////////////////////////////////////////////





    /*---------------------------------------------------------------------------------*/

    getCity(city: City) {


        this.cityM = city;


    }
    ListCity() {
        this.cityService.getAll().
            subscribe(city => {

                this.city = city;
                // initialize to page 1
                // console.log(this.city);
                this.setPageCity(1);
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

    supprimerCity() {

        console.log(this.cityM.idCity);
        this.cityService.delete(this.cityM.idCity).subscribe(resultat => {
            this.ListCity();
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
    //////////////////////////////////////////////////////////////////////////////////////////////////////

    setPage(page: number) {
        console.log()
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service
        this.pager = this.pagerService.getPager(this.pays.length, page);

        // get current page of items
        this.pagedItems = this.pays.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }

    setPageCity(page: number) {
        console.log()
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service

        this.pager = this.pagerService.getPager(this.city.length, page);

        // get current page of items
        this.pagedItemsCity = this.city.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }

    setPageAero(page: number) {
        console.log()
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service

        this.pager = this.pagerService.getPager(this.aero.length, page);

        // get current page of items
        this.pagedItemsAero = this.aero.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }

    setPageStation(page: number) {
        console.log()
        if (page < 1 || page > this.pager.totalPages) {
            return;
        }

        // get pager object from service

        this.pager = this.pagerService.getPager(this.station.length, page);

        // get current page of items
        this.pagedItemsStation = this.station.slice(this.pager.startIndex, this.pager.endIndex + 1);

    }
    /*---------------------------------------------------------------------------------*/

    getAero(aero: Aeroport) {

        this.aeroM = aero;
        console.log("dqssssssssss:zs " + JSON.stringify(this.aero));
    }

    ListAero() {

        this.aeroportService.getAll().
            subscribe(aero => {

                this.aero = aero;
                console.log("dqssssssssss: " + JSON.stringify(this.aero));
                // initialize to page 1
                // console.log(this.city);
                this.setPageAero(1)
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


    supprimerAero() {

        console.log(this.aeroM.idAeroport);
        this.aeroportService.delete(this.aeroM.idAeroport).subscribe(resultat => {
            this.ListAero();
        });


    }

    /*---------------------------------------------------------------------------------*/

    getStation(station: Station) {

        this.stationM = station;
        console.log("dqssssssssss:zs " + JSON.stringify(this.stationM));
    }



    ListStation() {

        this.stationService.getAll().
            subscribe(station => {

                this.station = station;

                // initialize to page 1

                this.setPageStation(1)
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


    supprimerStation() {

        console.log(this.stationM.idStation);
        this.stationService.delete(this.stationM.idStation).subscribe(resultat => {
            this.ListStation();
        });


    }



    /*---------------------------------------------------------------------------------*/
    getAvion(avion: Avion) {

        this.avionM = avion;
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

    }

    ajoutAvion() {
        this.avion.type = this.model4.typeAvion;
        console.log(this.avion.type);
        /*this.avionService.add(this.avion).subscribe(result=>{
        this.ListAvions();
        });*/

    }

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
        console.log("df  " + JSON.stringify(this.trainM));
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


}