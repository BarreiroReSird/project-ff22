import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { RouterModule } from '@angular/router';
import { HomeComponent } from '../home/home.component';
import { StandingsComponent } from '../standings/standings.component';
import { PageNotFoundComponent } from '../page-not-found/page-not-found.component';
import { DriverStandingsComponent } from '../driver-standings/driver-standings.component';
import { ConstructorStandingsComponent } from '../constructor-standings/constructor-standings.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      { path: '', component: HomeComponent },
      // { path: 'team-standings', component: StandingsComponent },
      {
        path: 'constructor-standings',
        component: ConstructorStandingsComponent,
      },
      { path: 'driver-standings', component: DriverStandingsComponent },
      { path: '404', component: PageNotFoundComponent },
      { path: '**', redirectTo: '/404' },
    ]),
  ],
  declarations: [AppComponent, HelloComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
