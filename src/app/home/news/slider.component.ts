import { Component, EventEmitter, OnInit, ElementRef,AfterViewInit } from "@angular/core";
import { MaterializeAction } from 'angular2-materialize'

@Component({
    selector: 'app-slider',
    templateUrl: './slider.component.html',
    styleUrls: ['./slider.component.css']
})

export class SliderComponent{

    //Interval variable
    private intervalObj: any;

    actions = new EventEmitter<string>();
    showInitialized = false;
  
    constructor(private elRef:ElementRef) {

    }

    ngOnInit(){
        // initializes the carousel with full widt -> docs
        $('.carousel.carousel-slider').carousel({fullWidth: true});

        // changes the slide of the carousel every 5.5 seconds
        this.startInterval();

    }

    ngAfterViewInit(){

        this.elRef.nativeElement.querySelectorAll('.indicators > li').forEach(item => {
            // Bind event for each li in the indicators
            item.addEventListener('click', this.resetInterval.bind(this));
        })

    }

    // Function for starting the interval
    startInterval(){
        this.intervalObj = setInterval(function(){
            console.log("start carousel");

            $('.carousel.carousel-slider').carousel('next')
        }, 5500);
    }

    resetInterval(event){
        console.log("reset Interval");
        // reset the interval
        clearInterval(this.intervalObj);
        // start it again
        this.startInterval();
    }


}