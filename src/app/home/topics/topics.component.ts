import {Component, OnInit} from '@angular/core';
import {AngularFirestore} from 'angularfire2/firestore';
import { Observable } from '@firebase/util';

import { Topic } from '../../models/topic';

@Component({
    selector: 'app-topics',
    templateUrl: './topics.component.html',
    styleUrls: ['./topics.component.css', '../../app.component.css']
})

export class TopicsComponent {
    topics;
    constructor(db: AngularFirestore) {
        this.topics = db.collection('topics').snapshotChanges().map(actions => {
            return actions.map(a => {
              const data = a.payload.doc.data();
              const id = a.payload.doc.id;
              return { id, ...data };
            });
          });
    }
}
