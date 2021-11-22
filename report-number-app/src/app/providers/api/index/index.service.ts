import { Injectable } from '@angular/core';
import { HttpService } from 'src/app/providers/http/http.service'
@Injectable({
  providedIn: 'root'
})
export class IndexService {

  constructor(private http: HttpService) { }

  getOperators() {
    return this.http.__get('operators/')
  }

  reportNumber(number: object) {
    return this.http.__post('phone-numbers/create', number)
  }
}
