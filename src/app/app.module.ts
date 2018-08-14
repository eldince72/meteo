import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { SituazioneComponent } from './situazione/situazione.component';
import { SituazioneDettaglioComponent } from './situazione-dettaglio/situazione-dettaglio.component';
import { PrevisioniComponent } from './previsioni/previsioni.component';
import { PrevisioniDettaglioComponent } from './previsioni-dettaglio/previsioni-dettaglio.component';
import { IconameteoComponent } from './iconameteo/iconameteo.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'situazione', component: SituazioneComponent },
  { path: 'previsioni', component: PrevisioniComponent },
  { path: '',
    redirectTo: '/home',
    pathMatch: 'full'
  }
];

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SituazioneComponent,
    SituazioneDettaglioComponent,
    PrevisioniComponent,
    PrevisioniDettaglioComponent,
    IconameteoComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
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
