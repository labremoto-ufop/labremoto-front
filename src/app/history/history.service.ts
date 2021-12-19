import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class HistoryService {

  constructor(private http: HttpClient) {
  }

  getHistoricoList() {
    return this.http.get(environment.URLS.getExperimentosHistory);
  }

}
