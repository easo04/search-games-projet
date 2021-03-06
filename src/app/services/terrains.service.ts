import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpErrorResponse } from '@angular/common/http';
import { Observable, of } from 'rxjs';
import { map, catchError, tap } from 'rxjs/operators';

export class TerrainsService {

  urlEndpoint = ""

  constructor(private http: HttpClient){}

  getAllTerrains() {
    return this.http.get(this.urlEndpoint);
  }

  addTerrain(params){

  }
}
