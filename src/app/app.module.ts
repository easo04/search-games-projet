import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MonPremierComponent } from './mon-premier/mon-premier.component';
import { RechercheTerrainsComponent } from './recherche-terrains/recherche-terrains.component';
import { MenuPrincipalComponent } from './menu-principal/menu-principal.component';
import {TerrainsService} from "./services/terrains.service";

@NgModule({
  declarations: [
    AppComponent,
    MonPremierComponent,
    RechercheTerrainsComponent,
    MenuPrincipalComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [
    TerrainsService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
