import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';
@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private http: HttpClient) { }

  public __post(url: string, body: object) {
    url = environment.baseUrl + url;
    return this.http.post<any>(url, body);
  }
  public __get(url: string) {
    url = environment.baseUrl + url;
    return this.http.get(url);
  }

  public __put(url: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    url = environment.baseUrl + url;
    return this.http.put(url, { headers });
  }

  public __delete(url: string) {
    const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
    url = environment.baseUrl + url;
    return this.http.delete(url, { headers });
  }

  public getBaseUrl() {
    return environment.baseUrl;
  }

}
