import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AngularFireModule } from '@angular/fire/compat';
import { AngularFireDatabaseModule } from '@angular/fire/compat/database';
import { environment } from '../environments/environment';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { JuegosComponent } from './components/juegos/juegos.component';
import { AddComponent } from './components/add/add.component';
import { ListJuegosComponent } from './components/list-juegos/list-juegos.component';
import { DetailsJuegosComponent } from './components/details-juegos/details-juegos.component';

@NgModule({
  declarations: [
    AppComponent,
    JuegosComponent,
    AddComponent,
    ListJuegosComponent,
    DetailsJuegosComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
