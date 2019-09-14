import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-recherche-terrains',
  templateUrl: './recherche-terrains.component.html',
  styleUrls: ['./recherche-terrains.component.sass']
})
export class RechercheTerrainsComponent implements OnInit {

  name: String = 'Test';
  showCriteres = false;
  showInformationsTerrain = false;

  constructor() { }

  ngOnInit() {
  }

  showCriteresFilter(){
	this.showCriteres = this.showCriteres ? false : true;
  }

  showInfosTerrain(){
	this.showInformationsTerrain = this.showInformationsTerrain ? false : true;
  }

}
