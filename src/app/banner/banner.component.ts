import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { MaterializeAction } from 'angular2-materialize';
import { MaterializeDirective } from "angular2-materialize";


@Component({
    selector:'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})
export class BannerComponent{

    private bannerimage:string;
    private routename:any;

    constructor(private location:Location){}


    // Change Banner image depending on the Route
    ngOnInit(){
        // Returns the path of the url
        this.routename = this.location.path();

        switch(this.routename){

            case "":{
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/services":{
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/services/cooperateweb":{
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/services/webapps": {
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/services/desktopapps": {
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/services/office": {
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/services/templates":{
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/services/webapps":{
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/about":{
                this.bannerimage = "assets/images/header1.jpg";
            }

            case "/templates": {
                this.bannerimage = "assets/images/header1.jpg";
            }
        }


        console.log(this.routename);
    }

}