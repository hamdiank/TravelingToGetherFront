import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

import { AlertService, AuthenticationService } from '../_services/index';
import { LoaderComponent } from "../shared/loader/loader.component";
@Component({
    moduleId: module.id,
    templateUrl: 'login.component.html'
})

export class LoginComponent implements OnInit {
    model: any = {};
    loading = false;
    returnUrl: string;

    constructor(
        private route: ActivatedRoute,
        private router: Router,
        private authenticationService: AuthenticationService,
        private alertService: AlertService) { }

    ngOnInit() {
        // reset login status
        this.authenticationService.logout();

        // get return url from route parameters or default to '/'
        this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
    }

    login() {
        this.loading = true;
        this.authenticationService.login(this.model.username, this.model.password)
            .subscribe(
                data => {
                    console.log("dataaa :"+localStorage.getItem('currentUserRole'));
                    if(localStorage.getItem('currentUserRole')=='ADMIN')
                   this.router.navigate(['dashboard/Statistiques']);
                   else{
                    this.router.navigate(['dashboardutil/Accueil']);
                    console.log(this.returnUrl); }
                },
                error => {
                    if(error)

                    this.alertService.error("verifier votre login ou mot de passe");
                    this.loading = false;
                });
    }
}