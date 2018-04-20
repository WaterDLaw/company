import {Component, OnInit} from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';

@Component({
    selector: 'app-services',
    templateUrl: './services.component.html',
    styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {
  topic;
  constructor(private db: AngularFirestore, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const obs = this.db.collection('topics').doc(params.type).snapshotChanges().map(a => {
        return a.payload.data();
      });
      obs.subscribe(topic => this.topic = topic);
    });
  }
}

