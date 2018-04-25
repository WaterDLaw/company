import {Component, Input, OnChanges} from '@angular/core';

@Component({
    selector: 'app-news',
    templateUrl: './news.component.html',
    styleUrls: ['./news.component.css']
})

export class NewsComponent implements OnChanges {
    @Input() project;
    topic;
    tech;
    company;
    devices;

    ngOnChanges() {
        this.tech = [];
        this.devices = [];
        this.project.topic.get().then(topic => {
            // console.log(this.project.topic.id, topic.data());
            this.topic = topic.data();
        });
        this.project.topic.get().then(topic => this.topic = topic.data());
        this.project.tech.forEach((tech, i) =>  tech.get().then(res => this.tech[i] = res.data()));
        this.project.company.get().then(company => this.company = company.data());
        this.project.devices.forEach((tech, i) =>  tech.get().then(res => this.devices[i] = res.data()));
    }

}
