import { Component, OnInit } from '@angular/core';
import {TerrainsService} from "../services/terrains.service";

@Component({
  selector: 'app-recherche-terrains',
  templateUrl: './recherche-terrains.component.html',
  styleUrls: ['./recherche-terrains.component.sass']
})
export class RechercheTerrainsComponent implements OnInit {

  name: String = 'Test';
  showCriteres = false;
  showInformationsTerrain = false;

  constructor(private terrainsService: TerrainsService) { }

  ngOnInit() {
    this.terrains = this.terrainsService.getAllTerrains();
  }

  showCriteresFilter(){
	this.showCriteres = this.showCriteres ? false : true;
  }

  showInfosTerrain(){
	this.showInformationsTerrain = this.showInformationsTerrain ? false : true;
  }

}
