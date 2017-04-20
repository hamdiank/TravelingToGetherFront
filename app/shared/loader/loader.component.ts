
import { Component, OnInit, Input } from '@angular/core';

@Component({
    moduleId: module.id,
    selector: 'app-loader',
    templateUrl: 'loader.html'
})
export class LoaderComponent implements OnInit {
   @Input() loading: boolean = false;
    constructor() { }

    ngOnInit() { }
}