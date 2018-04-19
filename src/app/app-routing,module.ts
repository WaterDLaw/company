import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { HomeComponent } from './home/home.component';

// Services
import { ServicesComponent } from './services/services.component';
import { CooperatewebServiceComponent } from './services/cooperateweb-services/cooperateweb_services.component';
import { DesktopappsServiceComponent } from './services/desktopapps-services/desktopapps_services.component';
import { WebappsServiceComponent } from './services/webapps-services/webapps_services.component';
import { OfficeServiceComponent } from './services/office-services/office_services.component';
import { TemplatesServiceComponent } from './services/templates-services/templates_services.component';
import { MobileappsServiceComponent } from './services/mobileapps-services/mobileapps_services.component';

const appRoutes: Routes = [
    { path: '', component: HomeComponent},
    { path: 'about', component: AboutComponent },
    { path: 'services', component: ServicesComponent },
    { path: 'services/cooperateweb', component: CooperatewebServiceComponent},
    { path: 'services/webapps', component: WebappsServiceComponent},
    { path: 'services/mobileapps', component: MobileappsServiceComponent},
    { path: 'services/desktopapps', component: DesktopappsServiceComponent},
    { path: 'services/office', component: OfficeServiceComponent},
    { path: 'services/templates', component: TemplatesServiceComponent}
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
