import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SituazioneComponent } from './situazione/situazione.component';
import { SituazioneDettaglioComponent } from './situazione-dettaglio/situazione-dettaglio.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'previsioni', component: SituazioneComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    SituazioneComponent,
    HomeComponent,
    SituazioneDettaglioComponent
  ],
  imports: [
    BrowserModule,
    NgbModule.forRoot(),
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
