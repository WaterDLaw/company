import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
    selector: 'app-topics',
    templateUrl: './topics.component.html',
    styleUrls: ['./topics.component.css', '../../app.component.css']
})

export class TopicsComponent {
    topics;
    constructor(db: AngularFirestore) {
        this.topics = db.collection('topics').valueChanges();
    }
}
