import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// Services
import { ServicesComponent } from './services/services.component';
import {TagOverviewComponent} from './tag-overview/tag-overview.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'services/:type', component: ServicesComponent},
    { path: 'tags/:tag', component: TagOverviewComponent}
];

@NgModule({
    imports: [
        RouterModule.forRoot(
            appRoutes,
            { enableTracing: true } // Debugging
        )
    ],
    exports: [
        RouterModule
    ]
})
export class AppRoutingModule { }
