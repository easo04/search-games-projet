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
  terrains = [];

  constructor(private terrainsService: TerrainsService) { }

  ngOnInit() {
    this.terrainsService.getAllTerrains().subscribe(res => {
      this.terrains = res;
    });
  }

  showCriteresFilter(){
	this.showCriteres = this.showCriteres ? false : true;
  }

  showInfosTerrain(){
	this.showInformationsTerrain = this.showInformationsTerrain ? false : true;
  }

}
