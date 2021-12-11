import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class HistorialService {

  private _historal: string[] = [];

  get historial(){
    return [...this._historal];
  }

  constructor(){

    this._historal = JSON.parse(localStorage.getItem('urlHistorial')!) || [];

  }

  insertarHistorial(value: string){

    if(!this._historal.includes(value)){
      this._historal.unshift(value);

      localStorage.setItem('urlHistorial', JSON.stringify(this._historal));
    }
    this._historal = this._historal.splice(0,10);
  };
}
