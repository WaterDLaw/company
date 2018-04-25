import { Component } from '@angular/core';
import { NouisliderComponent } from 'ng2-nouislider';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css', '../app.component.css']
})

export class ContactComponent {

    budgetRange: number[] = [500];
    dauerRange: number[] = [1];

    onChange(ev) { }
}
