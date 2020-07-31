import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { SharedModulesRoutingModule } from './shared-modules-routing.module';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { ScoialMediaComponent } from './components/scoial-media/scoial-media.component';


@NgModule({
  declarations: [HeaderComponent, FooterComponent, ScoialMediaComponent],
  imports: [
    CommonModule,
    SharedModulesRoutingModule
  ],
  exports:[HeaderComponent,FooterComponent,ScoialMediaComponent]
})
export class SharedModulesModule { }
