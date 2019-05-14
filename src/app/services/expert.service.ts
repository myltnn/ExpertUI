import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExpertService {
  url: string
  
  constructor(private http: HttpClient) {
      this.url = 'https://contributions.azurewebsites.net/api/contributions/expert/'
  }

  getExperts() {
    return this.http.get(this.url);
  }

  getExpert(id) {
      return this.http.get(this.url + id);
  }

  updateExpert(id, data) {
    return this.http.post(this.url + id, data);
  }

  createExpert(data) {
    return this.http.put(this.url, data);
  }
}
