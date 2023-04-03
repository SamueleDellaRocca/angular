import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class OpentableService {


  constructor(private httpClient: HttpClient) { }

  getPosts(pagina: number = 0, elementi: number = 10) {
    return this.httpClient.get(`http://localhost:5000/api/restaurant/getRestaurants/${pagina}/${elementi}`);
  }

}
