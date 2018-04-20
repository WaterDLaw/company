import { Component, OnInit, ElementRef, AfterViewInit } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import {NgxCarousel} from 'ngx-carousel';

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})

export class SliderComponent implements OnInit, AfterViewInit {

    // Interval variable
    private intervalObj: any;
    projects: any;
    carousel: NgxCarousel;

    constructor(private elRef: ElementRef, private db: AngularFirestore) {
        this.resetInterval = this.resetInterval.bind(this);
        this.carousel = {
          grid: {xs: 1, sm: 1, md: 1, lg: 1, all: 0},
          slide: 1,
          speed: 400,
          interval: 4000,
          point: {
            visible: true
          },
          load: 2,
          touch: true,
          loop: true,
          custom: 'banner'
        };
    }

    ngOnInit() {
        // initializes the carousel with full width -> docs
        $('.carousel.carousel-slider').carousel({fullWidth: true});

        // changes the slide of the carousel every 5.5 seconds
        this.startInterval();
        this.projects = this.db.collection('projects').snapshotChanges().map(actions => {
            return actions.map(a => {
                const data = a.payload.doc.data();
                const id = a.payload.doc.id;

                const company = this.db.collection('company').doc(data.company.id);
                const tech = data.tech.map(t => {
                    return this.db.collection('tech').doc(t.id);
                });
                const devices = data.devices.map(dev => {
                    return this.db.collection('devices').doc(dev.id);
                });
                const topic = this.db.collection('topic').doc(data.topic.id);
                return { id, ...data, company, tech, topic, devices  };
            });
        });

        this.projects.subscribe(console.log);
    }

    ngAfterViewInit() {
        this.elRef.nativeElement.querySelectorAll('.indicators > li').forEach(item => {
            // Bind event for each li in the indicators
            item.addEventListener('click', this.resetInterval);
        });

    }

    // Function for starting the interval
    startInterval() {
        this.intervalObj = setInterval(() => $('.carousel.carousel-slider').carousel('next'), 5500);
    }

    resetInterval() {
        // reset the interval
        clearInterval(this.intervalObj);
        // start it again
        this.startInterval();
    }


}
