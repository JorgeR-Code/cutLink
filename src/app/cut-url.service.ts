import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { BehaviorSubject, Observable } from 'rxjs';
import { Result } from './interfaces/url.interface';

@Injectable({
  providedIn: 'root'
})
export class CutUrlService {

  private urlApi: string = 'https://api.shrtco.de/v2/shorten?url=';

  private urlReq = new BehaviorSubject<string>('');
  public urlRequest = this.urlReq.asObservable();

  constructor(private http: HttpClient) { }

  searchUser (termino: string):Observable<Result>{
    const url = `${this.urlApi}/${termino}`;
    return this.http.get<Result>(url);

  }

  public requestUrl(urlR: string): void{
    this.urlReq.next(urlR);
  }

}
