import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private _historal: string[] = [];

  get historial(){
    return [...this._historal];
  }

  insertarHistorial(value: string){

    if(!this._historal.includes(value)){
      this._historal.unshift(value);
    }
    this._historal = this._historal.splice(0,10);
  };
}
