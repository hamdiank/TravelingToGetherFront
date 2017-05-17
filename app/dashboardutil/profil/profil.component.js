"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require('@angular/core');
var forms_1 = require("@angular/forms");
var index_1 = require("../../_services/index");
var ProfilComponent = (function () {
    function ProfilComponent(element, _fb, _fb2, userService) {
        var _this = this;
        this.element = element;
        this._fb = _fb;
        this._fb2 = _fb2;
        this.userService = userService;
        this.events = [];
        this.userService.getById(localStorage.getItem('currentUserId')).subscribe(function (result) {
            _this.u = result;
            _this.avatarSrc = _this.u.avatarSrc;
            _this.nom = _this.u.nom;
            _this.prenom = _this.u.prenom;
            _this.email = _this.u.email;
            _this.preferences = _this.u.preferences;
            _this.fumeur = _this.preferences.fumeur;
            _this.animaux = _this.preferences.animaux;
            _this.musique = _this.preferences.musique;
            console.log("this.preferences   " + _this.animaux);
        });
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.myForm = this._fb.group({
            login: ['', []],
            email: ['', []],
            nom: ['', []],
            prenom: ['', []],
            password: ['', []],
            numTelephone: ['', []],
            dateNaissance: ['', []],
        });
        this.myForm2 = this._fb2.group({
            marque: ['', [forms_1.Validators.minLength(2), forms_1.Validators.maxLength(10)]],
            modele: ['', [forms_1.Validators.minLength(2), forms_1.Validators.maxLength(10)]],
            nbPlace: ['',],
            energie: ['', [forms_1.Validators.minLength(2), forms_1.Validators.maxLength(10)]],
        });
        // subscribe to form changes  
        this.subcribeToFormChanges();
        this.showImageUser(localStorage.getItem('currentUserId'));
        this.showImageVoiture(localStorage.getItem('currentUserId'));
    };
    ProfilComponent.prototype.subcribeToFormChanges = function () {
        var _this = this;
        var myFormStatusChanges$ = this.myForm.statusChanges;
        var myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(function (x) { return _this.events.push({ event: 'STATUS_CHANGED', object: x }); });
        myFormValueChanges$.subscribe(function (x) { return _this.events.push({ event: 'VALUE_CHANGED', object: x }); });
    };
    ProfilComponent.prototype.saveVoiture = function (model, isValid) {
        console.log(isValid);
        if (isValid) {
            console.log(model.marque);
            console.log(this.u.voiture);
            if (model.marque !== "")
                this.u.voiture.marque = model.marque;
            if (model.modele !== "")
                this.u.voiture.modele = model.modele;
            if (model.nbPlace !== "")
                this.u.voiture.nombrePlace = model.nbPlace;
            if (model.energie !== "")
                this.u.voiture.energie = model.energie;
            console.log(this.u.voiture);
            console.log(this.u);
            this.userService.update(this.u).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    ProfilComponent.prototype.save = function (model, isValid) {
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
            this.userService.update(this.u).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    ProfilComponent.prototype.showImageUser = function (filename) {
        var _this = this;
        this.userService.getImage(filename)
            .subscribe(function (file) {
            _this.image = file;
            console.log("imagee  " + _this.image);
        });
    };
    ProfilComponent.prototype.showImageVoiture = function (filename) {
        var _this = this;
        this.userService.getImageVoiture(filename)
            .subscribe(function (file) {
            _this.imageVoiture = file;
            console.log("imagee  " + _this.imageVoiture);
        });
    };
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
    ProfilComponent.prototype.changeListner = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        var image2 = this.element.nativeElement.querySelector('.t');
        reader.onload = function (e) {
            var src = e.target.result;
            image.src = src;
            image2.src = src;
        };
        console.log(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
        this.userService.uploadUserImage(event.target.files[0], localStorage.getItem('currentUserId')).subscribe(function (res) {
            console.log("res" + res);
        }, function (error) {
            console.log("eee " + error);
        });
    };
    ProfilComponent.prototype.changeListnerVoiture = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image2');
        //     var image2 = this.element.nativeElement.querySelector('.t');
        reader.onload = function (e) {
            var src = e.target.result;
            image.src = src;
            //    image2.src = src;
        };
        console.log(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
        this.userService.uploadVoitureImage(event.target.files[0], localStorage.getItem('currentUserId')).subscribe(function (res) {
            console.log("res" + res);
        }, function (error) {
            console.log("eee " + error);
        });
    };
    ProfilComponent.prototype.modifierFumeurFalse = function () {
        var _this = this;
        console.log("dd " + this.u.preferences.fumeur);
        if (this.fumeur != false) {
            this.u.preferences.fumeur = false;
            this.userService.update(this.u).
                subscribe(function (reultat) {
                _this.fumeur = _this.u.preferences.fumeur;
                console.log(_this.u);
            }, function (error) {
                console.log(error);
            });
            console.log(this.fumeur);
        }
    };
    ProfilComponent.prototype.modifierFumeurTrue = function () {
        var _this = this;
        console.log("dd " + this.u.preferences.fumeur);
        if (this.fumeur != true) {
            this.u.preferences.fumeur = true;
            this.userService.update(this.u).
                subscribe(function (reultat) {
                _this.fumeur = _this.u.preferences.fumeur;
                console.log(_this.u);
            }, function (error) {
                console.log(error);
            });
            console.log(this.fumeur);
        }
    };
    ProfilComponent.prototype.modifierAnimalFalse = function () {
        var _this = this;
        console.log("dd " + this.u.preferences.animaux);
        if (this.animaux != false) {
            this.u.preferences.animaux = false;
            this.userService.update(this.u).
                subscribe(function (reultat) {
                _this.animaux = _this.u.preferences.animaux;
                console.log(_this.u);
            }, function (error) {
                console.log(error);
            });
            console.log(this.animaux);
        }
    };
    ProfilComponent.prototype.modifierAnimalTrue = function () {
        var _this = this;
        console.log("dd " + this.u.preferences.animaux);
        if (this.animaux != true) {
            this.u.preferences.animaux = true;
            this.userService.update(this.u).
                subscribe(function (reultat) {
                _this.animaux = _this.u.preferences.animaux;
                console.log(_this.u);
            }, function (error) {
                console.log(error);
            });
            console.log(this.animaux);
        }
    };
    ProfilComponent.prototype.modifierMusicFalse = function () {
        var _this = this;
        console.log("dd " + this.u.preferences.musique);
        if (this.musique != false) {
            this.u.preferences.musique = false;
            this.userService.update(this.u).
                subscribe(function (reultat) {
                _this.musique = _this.u.preferences.musique;
                console.log(_this.u);
            }, function (error) {
                console.log(error);
            });
            console.log(this.animaux);
        }
    };
    ProfilComponent.prototype.modifierMusicTrue = function () {
        var _this = this;
        console.log("dd " + this.u.preferences.musique);
        if (this.musique != true) {
            this.u.preferences.musique = true;
            this.userService.update(this.u).
                subscribe(function (reultat) {
                _this.musique = _this.u.preferences.musique;
                console.log(_this.u);
            }, function (error) {
                console.log(error);
            });
            console.log(this.musique);
        }
    };
    ProfilComponent = __decorate([
        core_1.Component({
            selector: 'profil-cmp',
            moduleId: module.id,
            templateUrl: 'profil.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, forms_1.FormBuilder, forms_1.FormBuilder, index_1.UserService])
    ], ProfilComponent);
    return ProfilComponent;
}());
exports.ProfilComponent = ProfilComponent;
//# sourceMappingURL=profil.component.js.map