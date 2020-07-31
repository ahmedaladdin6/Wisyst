import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import {SharedModulesModule} from '../shared-modules/shared-modules.module';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ServicesComponent } from './components/services/services.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { MediaComponent } from './components/media/media.component';
import { VoiceComponent } from './components/voice/voice.component'
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PolicyComponent,
    ReportsComponent,
    ServicesComponent,
    ActivitesComponent,
    MediaComponent,
    VoiceComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    SharedModulesModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
