import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';

@Component({
    selector: 'app-banner',
    templateUrl: './banner.component.html',
    styleUrls: ['./banner.component.css']
})
export class BannerComponent implements OnInit {

    private bannerimage: string;
    private routename: any;

    constructor(private location: Location){}


    // Change Banner image depending on the Route
    ngOnInit() {
        // Returns the path of the url
        this.routename = this.location.path();

        switch (this.routename) {
            case '':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/services':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/services/cooperateweb':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/services/webapps':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/services/desktopapps':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/services/office':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/services/templates':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/about':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            case '/templates':
                this.bannerimage = 'assets/images/header1.jpg';
                break;
            default:
                this.bannerimage = 'assets/images/header1.jpg';
        }


        console.log(this.routename);
    }

}
