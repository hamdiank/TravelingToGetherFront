

import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from "@angular/router";
import { MotDePasseOublieService } from "../_services/MotDePassOublie";
import { AlertService } from "../_services/index";

@Component({
    moduleId: module.id,
    selector: 'selector',
    templateUrl: 'MotDePasse.component.html'
})
export class MotDePasseComponent implements OnInit {
    model: any = {};
    loading = false;

    constructor(private route: ActivatedRoute,
        private router: Router,
        private motDePasseService: MotDePasseOublieService,
        private alertService: AlertService) { }

    ngOnInit() { }





    reset() {
        this.loading = true;

        this.motDePasseService.reset(this.model.mail).subscribe(result => {
            this.alertService.success("Consulter votre mail");
            this.loading = false;
            

        },
            error => {
                if (error)
                    this.alertService.error("verifier votre mail");
                this.loading = false;
            }
        );


    }
}