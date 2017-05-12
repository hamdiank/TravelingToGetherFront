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
    function ProfilComponent(element, _fb, userService) {
        var _this = this;
        this.element = element;
        this._fb = _fb;
        this.userService = userService;
        this.events = [];
        this.userService.getById(localStorage.getItem('currentUserId')).subscribe(function (result) {
            _this.u = result;
        });
    }
    ProfilComponent.prototype.ngOnInit = function () {
        var emailRegex = '^[a-z0-9]+(\.[_a-z0-9]+)*@[a-z0-9-]+(\.[a-z0-9-]+)*(\.[a-z]{2,15})$';
        this.myForm = this._fb.group({
            login: ['', [forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            email: ['', [forms_1.Validators.pattern(emailRegex)]],
            nom: ['', [forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            prenom: ['', [forms_1.Validators.minLength(4), forms_1.Validators.maxLength(10)]],
            password: ['', [forms_1.Validators.maxLength(15)]],
            numTelephone: ['', [forms_1.Validators.maxLength(15)]]
        });
        // subscribe to form changes  
        this.subcribeToFormChanges();
    };
    ProfilComponent.prototype.subcribeToFormChanges = function () {
        var _this = this;
        var myFormStatusChanges$ = this.myForm.statusChanges;
        var myFormValueChanges$ = this.myForm.valueChanges;
        myFormStatusChanges$.subscribe(function (x) { return _this.events.push({ event: 'STATUS_CHANGED', object: x }); });
        myFormValueChanges$.subscribe(function (x) { return _this.events.push({ event: 'VALUE_CHANGED', object: x }); });
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
            console.log("numTelephone " + this.u.numTelephone);
            this.userService.update(this.u).subscribe(function (result) {
                console.log(result);
            });
        }
    };
    ProfilComponent.prototype.changeListner = function (event) {
        var reader = new FileReader();
        var image = this.element.nativeElement.querySelector('.image');
        reader.onload = function (e) {
            var src = e.target.result;
            image.src = src;
        };
        console.log(event.target.files[0]);
        reader.readAsDataURL(event.target.files[0]);
    };
    ProfilComponent = __decorate([
        core_1.Component({
            selector: 'profil-cmp',
            moduleId: module.id,
            templateUrl: 'profil.component.html'
        }), 
        __metadata('design:paramtypes', [core_1.ElementRef, forms_1.FormBuilder, index_1.UserService])
    ], ProfilComponent);
    return ProfilComponent;
}());
exports.ProfilComponent = ProfilComponent;
//# sourceMappingURL=profil.component.js.map