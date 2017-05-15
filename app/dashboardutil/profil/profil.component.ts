import { Component, OnInit, ElementRef } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from "@angular/forms";
import { User } from "../../_models/index";
import { UserService } from "../../_services/index";

@Component({
    selector: 'profil-cmp',
    moduleId: module.id,
    templateUrl: 'profil.component.html'
})

export class ProfilComponent implements OnInit {


    image: any;
    fumeur: any;
    animaux: any;
    musique: any;
    preferences: any;
    userImageName: any;
    public myForm: FormGroup;
    public myForm2: FormGroup;
    public submitted: boolean;
    public events: any[] = [];
    u: any;
    avatarSrc: string;
    nom: string;
    prenom: string;
    constructor(private element: ElementRef, private _fb: FormBuilder, private _fb2: FormBuilder, private userService: UserService) {

        this.userService.getById(localStorage.getItem('currentUserId')).subscribe(result => {
            this.u = result;
            this.avatarSrc = this.u.avatarSrc;
            this.nom = this.u.nom;
            this.prenom = this.u.prenom;
            this.preferences = this.u.preferences;
            this.fumeur = this.preferences.fumeur;
            this.animaux = this.preferences.animaux;
            this.musique = this.preferences.musique;
            console.log("this.preferences   " + this.animaux);
        });
    }
    ngOnInit() {
        let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.myForm = this._fb.group({
            login: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            email: ['', [<any>Validators.pattern(emailRegex)]],
            nom: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            prenom: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            password: ['', [<any>Validators.maxLength(15)]],
            numTelephone: ['', [<any>Validators.maxLength(15)]],
            dateNaissance: ['', [<any>Validators.maxLength(15)]],
        });
        this.myForm2 = this._fb2.group({
            marque: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            modele: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            nbPlace: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
        });

        // subscribe to form changes  
        this.subcribeToFormChanges();
        this.showImage(localStorage.getItem('currentUserId'));

    }
    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }
    saveVoiture(model: any, isValid: boolean) {

    }
    save(model: any, isValid: boolean) {
        this.submitted = true;
        console.log("model save " + JSON.stringify(model), isValid);

        if (isValid) {
            // console.log(model.!=="");
            if (model.login !== "")
                this.u.login = model.login;
            if (model.nom !== "")
                this.u.nom = model.nom;
            if (model.prenom !== "")
                this.u.prenom = model.prenom;
            if (model.password !== "")
                this.u.password = model.password;
            if (model.numTelephone !== "")
                this.u.numTelephone = model.numTelephone;
            if (model.dateNaissance !== "")
                this.u.dateNaissance = model.dateNaissance.formatted;
            console.log("numTelephone " + this.u.dateNaissance);

            this.userService.update(this.u).subscribe(result => {
                console.log(result);
            })

        }
    }



 


    showImage(filename: string) {
        this.userService.getImage(filename)
            .subscribe((file) => {
                this.image = file;
                console.log("imagee  " + this.image);
            });
    }


    /*
    changeListner(event: any) {
            let fileList: FileList = event.target.files;
            if (fileList.length > 0) {
                let file: File = fileList[0];
                 this.image = file;
                this.userImageName = file.name;
                this.userService.uploadUserImage(file,localStorage.getItem('currentUserId')).subscribe(
                    res => {
                        console.log("res"+res);
                    }, error => {
                        console.log("eee " +error);
                      
                    }
                )
    
            }
    }*/

    changeListner(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        var image2 = this.element.nativeElement.querySelector('.t');
        reader.onload = function (e: any) {
            var src = e.target.result;
            image.src = src;
            image2.src = src;

        };
        console.log(event.target.files[0])
        reader.readAsDataURL(event.target.files[0]);
        this.userService.uploadUserImage(event.target.files[0], localStorage.getItem('currentUserId')).subscribe(
            res => {
                console.log("res" + res);
            }, error => {
                console.log("eee " + error);

            }
        )

    }




    modifierFumeurFalse() {
        console.log("dd " + this.u.preferences.fumeur);
        if (this.fumeur != false) {
            this.u.preferences.fumeur = false;
            this.userService.update(this.u).
                subscribe(reultat => {
                    this.fumeur = this.u.preferences.fumeur;
                    console.log(this.u);
                },
                error => {
                    console.log(error);
                });


            console.log(this.fumeur);
        }
    }
    modifierFumeurTrue() {
        console.log("dd " + this.u.preferences.fumeur);
        if (this.fumeur != true) {
            this.u.preferences.fumeur = true;
            this.userService.update(this.u).
                subscribe(reultat => {
                    this.fumeur = this.u.preferences.fumeur;
                    console.log(this.u);
                },
                error => {
                    console.log(error);
                });


            console.log(this.fumeur);
        }
    }


    modifierAnimalFalse() {
        console.log("dd " + this.u.preferences.animaux);
        if (this.animaux != false) {
            this.u.preferences.animaux = false;
            this.userService.update(this.u).
                subscribe(reultat => {
                    this.animaux = this.u.preferences.animaux;
                    console.log(this.u);
                },
                error => {
                    console.log(error);
                });


            console.log(this.animaux);
        }
    }
    modifierAnimalTrue() {
        console.log("dd " + this.u.preferences.animaux);
        if (this.animaux != true) {
            this.u.preferences.animaux = true;
            this.userService.update(this.u).
                subscribe(reultat => {
                    this.animaux = this.u.preferences.animaux;
                    console.log(this.u);
                },
                error => {
                    console.log(error);
                });


            console.log(this.animaux);
        }
    }


    modifierMusicFalse() {
        console.log("dd " + this.u.preferences.musique);
        if (this.musique != false) {
            this.u.preferences.musique = false;
            this.userService.update(this.u).
                subscribe(reultat => {
                    this.musique = this.u.preferences.musique;
                    console.log(this.u);
                },
                error => {
                    console.log(error);
                });


            console.log(this.animaux);
        }
    }
    modifierMusicTrue() {
        console.log("dd " + this.u.preferences.musique);
        if (this.musique != true) {
            this.u.preferences.musique = true;
            this.userService.update(this.u).
                subscribe(reultat => {
                    this.musique = this.u.preferences.musique;
                    console.log(this.u);
                },
                error => {
                    console.log(error);
                });


            console.log(this.musique);
        }
    }

}