

import { Component, OnInit } from '@angular/core';
import { UserService } from "../../_services/user.service";
import { User } from "../../_models/index";
import { ActivatedRoute } from "@angular/router";

@Component({
  moduleId: module.id,
  selector: 'public_profil',
  templateUrl: 'profil_public.component.html',
  styles: [`

  .material-button {
    position: relative;
    top: 0;
    z-index: 1;
    width: 70px;
    height: 70px;
    font-size: 1.5em;
    color: #fff;
    background: #2C98DE;
    border: none;
    border-radius: 50%;
    box-shadow: 0 3px 6px rgba(0,0,0,.275);
    outline: none;
}

 /* USER PROFILE PAGE */
 .card {
    margin-top: 20px;
    padding: 30px;
    background-color: rgba(214, 224, 226, 0.2);
    -webkit-border-top-left-radius:5px;
    -moz-border-top-left-radius:5px;
    border-top-left-radius:5px;
    -webkit-border-top-right-radius:5px;
    -moz-border-top-right-radius:5px;
    border-top-right-radius:5px;
    -webkit-box-sizing: border-box;
    -moz-box-sizing: border-box;
    box-sizing: border-box;
}
.card.hovercard {
    position: relative;
    padding-top: 0;
    overflow: hidden;
    text-align: center;
    background-color: #fff;
    background-color: rgba(255, 255, 255, 1);
}
.card.hovercard .card-background {
    height: 130px;
}
.card-background img {
    -webkit-filter: blur(25px);
    -moz-filter: blur(25px);
    -o-filter: blur(25px);
    -ms-filter: blur(25px);
    filter: blur(25px);
    margin-left: -100px;
    margin-top: -200px;
    min-width: 130%;
}
.card.hovercard .useravatar {
    position: absolute;
    top: 15px;
    left: 0;
    right: 0;
}
.card.hovercard .useravatar img {
    width: 100px;
    height: 100px;
    max-width: 100px;
    max-height: 100px;
    -webkit-border-radius: 50%;
    -moz-border-radius: 50%;
    border-radius: 50%;
    border: 5px solid rgba(255, 255, 255, 0.5);
}
.card.hovercard .card-info {
    position: absolute;
    bottom: 14px;
    left: 0;
    right: 0;
}
.card.hovercard .card-info .card-title {
    padding:0 5px;
    font-size: 20px;
    line-height: 1;
    color: #262626;
    background-color: rgba(255, 255, 255, 0.1);
    -webkit-border-radius: 4px;
    -moz-border-radius: 4px;
    border-radius: 4px;
}
.card.hovercard .card-info {
    overflow: hidden;
    font-size: 12px;
    line-height: 20px;
    color: #737373;
    text-overflow: ellipsis;
}
.card.hovercard .bottom {
    padding: 0 20px;
    margin-bottom: 17px;
}
.btn-pref .btn {
    -webkit-border-radius:0 !important;
}



.panel-shadow {
    box-shadow: rgba(0, 0, 0, 0.3) 7px 7px 7px;
}
.panel-white {
  border: 1px solid #dddddd;
}
.panel-white  .panel-heading {
  color: #333;
  background-color: #fff;
  border-color: #ddd;
}
.panel-white  .panel-footer {
  background-color: #fff;
  border-color: #ddd;
}

.post .post-heading {
  height: 95px;
  padding: 20px 15px;
}
.post .post-heading .avatar {
  width: 60px;
  height: 60px;
  display: block;
  margin-right: 15px;
}
.post .post-heading .meta .title {
  margin-bottom: 0;
}
.post .post-heading .meta .title a {
  color: black;
}
.post .post-heading .meta .title a:hover {
  color: #aaaaaa;
}
.post .post-heading .meta .time {
  margin-top: 8px;
  color: #999;
}
.post .post-image .image {
  width: 100%;
  height: auto;
}
.post .post-description {
  padding: 15px;
}
.post .post-description p {
  font-size: 14px;
}
.post .post-description .stats {
  margin-top: 20px;
}
.post .post-description .stats .stat-item {
  display: inline-block;
  margin-right: 15px;
}
.post .post-description .stats .stat-item .icon {
  margin-right: 8px;
}
.post .post-footer {
  border-top: 1px solid #ddd;
  padding: 15px;
}
.post .post-footer .input-group-addon a {
  color: #454545;
}
.post .post-footer .comments-list {
  padding: 0;
  margin-top: 20px;
  list-style-type: none;
}
.post .post-footer .comments-list .comment {
  display: block;
  width: 100%;
  margin: 20px 0;
}
.post .post-footer .comments-list .comment .avatar {
  width: 35px;
  height: 35px;
}
.post .post-footer .comments-list .comment .comment-heading {
  display: block;
  width: 100%;
}
.post .post-footer .comments-list .comment .comment-heading .user {
  font-size: 14px;
  font-weight: bold;
  display: inline;
  margin-top: 0;
  margin-right: 10px;
}
.post .post-footer .comments-list .comment .comment-heading .time {
  font-size: 12px;
  color: #aaa;
  margin-top: 0;
  display: inline;
}
.post .post-footer .comments-list .comment .comment-body {
  margin-left: 50px;
}
.post .post-footer .comments-list .comment > .comments-list {
  margin-left: 50px;
}

    `]
})
export class PublicProfilComponent implements OnInit {
  avis: any[];
  id: any;
  image: any;
  imageVoiture: any;
  imageavis: any;
  u: any;
  nom: string;
  prenom: string;
  mail: string;
  dateN: string;
  profession: string;
  description: string;
  nTel: string;
  preferences: any;
  fumeur: any;
  animaux: any;
  musique: any;
  modele: any;
  energie: any;
  nbPlace: any;
  marque: any;
  constructor(private userService: UserService, public route: ActivatedRoute) {

    this.route.params.subscribe(params => {
      this.id = +params['id'];
      console.log(this.id);


    });


    this.userService.getById(this.id).subscribe(result => {

      this.u = result;
      console.log(this.u.voiture);
      this.nom = this.u.nom;
      this.prenom = this.u.prenom;
      this.mail = this.u.email;
      this.dateN = this.u.dateNaissance;
      this.profession = this.u.profession;
      this.nTel = this.u.numTelephone;
      this.description = this.u.description;
      this.preferences = this.u.preferences;
      console.log(this.u.preferences)
      this.animaux = this.preferences.animaux;
      this.fumeur = this.preferences.fumeur;
      this.musique = this.preferences.musique;
      this.modele = this.u.voiture.modele;
      this.energie = this.u.voiture.energie;
      this.nbPlace = this.u.voiture.nombrePlace;
      this.marque = this.u.voiture.marque;
      console.log(this.energie);
    });
  }

  ngOnInit() {
    $.getScript('../assets/js/initMenu.js');
    console.log("mmmmm"+typeof(this.id))
    this.showImage(this.id);
    this.showImageVoiture(this.id);
    this.getAvis(this.id);
    this.showImageavis(this.id);
  }


  showImage(filename: string) {
    this.userService.getImage(filename)
      .subscribe((file) => {
        this.image = file;
        console.log("imagee  " + this.image);
      });
  }
  showImageVoiture(filename: string) {
    this.userService.getImageVoiture(filename)
      .subscribe((file) => {
        this.imageVoiture = file;
        console.log("imagee  " + this.imageVoiture);
      });
  }
  showImageavis(filename: string) {
    this.userService.getImage(filename)
      .subscribe((file) => {
        this.imageavis = file;
        console.log("imagee  " + this.image);
      });
  }


  getAvis(id) {
    this.userService.getAvis(id).subscribe(result => {
      this.avis = result;
      console.log("aviiis" + this.avis);

    });

  }


}