import { Component, OnInit, Input } from '@angular/core';
import { Tech } from '../models/tech';

@Component({
  selector: 'app-tech-banner',
  templateUrl: './tech-banner.component.html',
  styleUrls: ['./tech-banner.component.css']
})
export class TechBannerComponent implements OnInit {
  @Input() tech: Tech;

  private maintitle: string;
  private subtitle: string;
  private bannerimage: string;
   
  constructor(){}

  // Change Banner image depending on the Route
  ngOnInit() {

    this.maintitle = this.tech.label;
    this.subtitle = this.tech.subtitle;
    this.bannerimage = this.tech.banner;

  }

}
