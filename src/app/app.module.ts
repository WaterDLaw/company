import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import {NouisliderModule} from 'ng2-nouislider/src/nouislider';

// Top level Components
import { AppComponent } from './app.component';
import { NavigationComponent } from './navigation/navigation.component';

// Home related Components
import { HomeComponent } from './home/home.component';
import { BannerComponent } from './banner/banner.component';
import { SliderComponent } from './home/news/slider.component';
import { NewsComponent } from './home/news/news.component';
import { TopicsComponent } from './home/topics/topics.component';

// Contact related Components
import { ContactComponent } from './contact/contact.component';

// About related Components
import { AboutComponent } from './about/about.component';

// Services
import { ServicesComponent } from './services/services.component';
import { CooperatewebServiceComponent } from './services/cooperateweb-services/cooperateweb_services.component';
import { DesktopappsServiceComponent } from './services/desktopapps-services/desktopapps_services.component';
import { WebappsServiceComponent } from "./services/webapps-services/webapps_services.component";
import { OfficeServiceComponent } from "./services/office-services/office_services.component";
import { TemplatesServiceComponent } from "./services/templates-services/templates_services.component";
import { MobileappsServiceComponent } from "./services/mobileapps-services/mobileapps_services.component";

import { AppRoutingModule } from './app-routing,module';

@NgModule({
  declarations: [
    AppComponent,
    NavigationComponent,
    HomeComponent,
    BannerComponent,
    SliderComponent,
    NewsComponent,
    ContactComponent,
    AboutComponent,
    TopicsComponent,
    ServicesComponent,
    CooperatewebServiceComponent,
    DesktopappsServiceComponent,
    WebappsServiceComponent,
    OfficeServiceComponent,
    TemplatesServiceComponent,
    MobileappsServiceComponent

    
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NouisliderModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
