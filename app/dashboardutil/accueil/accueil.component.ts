import { Component, OnInit, trigger, state, style, transition, animate } from '@angular/core';
import initDemo = require('../../../assets/js/charts.js');

declare var $:any;

@Component({
    selector: 'accueil-cmp',
    moduleId: module.id,
    templateUrl: 'accueil.component.html',
    styleUrls:['../../../assets/css/pe-icon-7-stroke.css','http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css','http://maxcdn.bootstrapcdn.com/font-awesome/latest/css/font-awesome.min.css','https://fonts.googleapis.com/css?family=Cambo|Poppins:400,600','../../../assets/css/gaia.css']
})

export class AccueilComponent implements OnInit{
    ngOnInit(){

    }
}
