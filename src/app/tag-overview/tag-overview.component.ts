import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router';
import {AngularFirestore} from 'angularfire2/firestore';
import {Tech} from '../models/tech';
import {Project} from '../models/project';

@Component({
  selector: 'app-tag-overview',
  templateUrl: './tag-overview.component.html',
  styleUrls: ['./tag-overview.component.css']
})
export class TagOverviewComponent implements OnInit {
  id: string;
  tech;
  projects;
  topics;

  show:boolean = false;

  constructor(private route: ActivatedRoute, private db: AngularFirestore) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.id = params.tag;
      this.db
        .collection('tech')
        .doc<Tech>(this.id)
        .valueChanges()
        .subscribe(tech =>  {
          this.tech = tech;
          this.show = true;
        });
      this.projects = this.db
        .collection<Project>('projects')
        .valueChanges()
        .map(projects => {
          return projects.filter(project =>
            project.tech.filter(tech => tech.id === this.id).length > 0
          );
        });
    });
  }

}
