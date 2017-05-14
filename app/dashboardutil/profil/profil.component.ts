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
    public myForm: FormGroup;
    public submitted: boolean;
    public events: any[] = [];
    u: User;

    constructor(private element: ElementRef, private _fb: FormBuilder, private userService: UserService) {
        this.userService.getById(localStorage.getItem('currentUserId')).subscribe(result => {
            this.u = result;
        });
    }
    ngOnInit() {
        let emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.myForm = this._fb.group({
            login: ['', [ <any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            email: ['', [ <any>Validators.pattern(emailRegex)]],
            nom: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            prenom: ['', [<any>Validators.minLength(4), <any>Validators.maxLength(10)]],
            password: ['', [<any>Validators.maxLength(15)]],
            numTelephone:['', [<any>Validators.maxLength(15)]],
            dateNaissance:['', []],
        });

        // subscribe to form changes  
        this.subcribeToFormChanges();


    }
    subcribeToFormChanges() {
        const myFormStatusChanges$ = this.myForm.statusChanges;
        const myFormValueChanges$ = this.myForm.valueChanges;

        myFormStatusChanges$.subscribe(x => this.events.push({ event: 'STATUS_CHANGED', object: x }));
        myFormValueChanges$.subscribe(x => this.events.push({ event: 'VALUE_CHANGED', object: x }));
    }

    save(model: any, isValid: boolean) {
        this.submitted = true;
        console.log("model save " + JSON.stringify(model), isValid);

      if (isValid) {
         // console.log(model.!=="");
         if(model.login!=="")
         this.u.login=model.login;
         if(model.nom!=="")
         this.u.nom=model.nom;
         if(model.prenom!=="")
         this.u.prenom=model.prenom;
         if(model.password!=="")
         this.u.password=model.password;
         if(model.numTelephone!=="")
         this.u.numTelephone=model.numTelephone;
           if(model.dateNaissance!=="")
         this.u.dateNaissance=model.dateNaissance.formatted;
         console.log("numTelephone "+this.u.dateNaissance);
  
            this.userService.update(this.u).subscribe(result => {
                console.log(result);
            })

        }
    }













    changeListner(event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');

        reader.onload = function (e: any) {
            var src = e.target.result;
            image.src = src;

        };
        console.log(event.target.files[0])
        reader.readAsDataURL(event.target.files[0]);
    }
}
