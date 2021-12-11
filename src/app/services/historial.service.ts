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
    this._historal.unshift(value);
    console.log(this._historal)
  };
}
