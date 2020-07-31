import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ProjectsComponent } from './components/projects/projects.component';
import { PolicyComponent } from './components/policy/policy.component';
import { ReportsComponent } from './components/reports/reports.component';
import { ServicesComponent } from './components/services/services.component';
import { ActivitesComponent } from './components/activites/activites.component';
import { MediaComponent } from './components/media/media.component';
import { VoiceComponent } from './components/voice/voice.component';

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'home', component: HomeComponent},
  { path: 'about', component: AboutComponent},
  { path: 'projects', component: ProjectsComponent},
  { path: 'policy', component: PolicyComponent},
  { path: 'reports', component: ReportsComponent},
  { path: 'services', component: ServicesComponent},
  { path: 'activites', component: ActivitesComponent},
  { path: 'media', component: MediaComponent},
  { path: 'voice', component: VoiceComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
