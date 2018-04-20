import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MaterializeModule } from 'angular2-materialize';
import { FormsModule } from '@angular/forms';
import { NouisliderModule } from 'ng2-nouislider/src/nouislider';
import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';
import { AngularFireStorageModule } from 'angularfire2/storage';
import { AngularFireAuthModule } from 'angularfire2/auth';
import { environment } from '../environments/environment';
import { NgxCarouselModule } from 'ngx-carousel';

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
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NouisliderModule,
    NgxCarouselModule,
    AngularFireModule.initializeApp(environment.firebase, 'company'),
    AngularFirestoreModule, // imports firebase/firestore, only needed for database features
    AngularFireAuthModule, // imports firebase/auth, only needed for auth features,
    AngularFireStorageModule // imports firebase/storage only needed for storage features
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
