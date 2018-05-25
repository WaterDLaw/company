import { Component } from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
    selector: 'app-contact',
    templateUrl: './contact.component.html',
    styleUrls: ['./contact.component.css', '../app.component.css']
})

export class ContactComponent {
    frozen = false;
    defaultModel = {
      firstname: '',
      surname: '',
      email: '',
      description: '',
      budget: 500,
      length: 1
    };
    error = {
      firstname: null as string,
      surname: null as string,
      email: null as string,
      description: null as string,
    };
    model = { ...this.defaultModel };

    constructor(private db: AngularFirestore) { }

    onChange(ev) { }

    send() {
      if (this.model.firstname.length === 0) {
        this.error.firstname = 'Required';
      } else {
        this.error.firstname = null;
      }
      if (this.model.surname.length === 0) {
        this.error.surname = 'Required';
      } else {
        this.error.surname = null;
      }
      if (this.model.email.length === 0) {
        this.error.email = 'Required';
      } else if (!this.model.email.match(/^\w+@\w+.\w+$/)) {
        this.error.email = 'Needs to be a valid e-mail address';
      } else {
        this.error.email = null;
      }
      if (this.model.description.length === 0) {
        this.error.description = 'Required';
      } else {
        this.error.description = null;
      }
      if (this.error.firstname === null &&
        this.error.surname === null &&
        this.error.email === null &&
        this.error.description === null) {

        console.log('Success');
        this.frozen = true;
        this.db.collection('offers').add(this.model).then(response => {
          this.frozen = false;
          this.model = {
            ...this.defaultModel,
            firstname: this.model.firstname,
            surname: this.model.surname,
            email: this.model.email,
          };
        });
      }
    }
}
