import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import 'rxjs/add/operator/map';

@Injectable()
export class ExpertService {
  url: string
  
  constructor(private http: HttpClient) {
      this.url = 'https://contributions.azurewebsites.net/api/contributions/'
  }

  getExperts() {
    return this.http.get(this.url + 'expert/');
  }

  getExpert(id) {
      return this.http.get(this.url + 'expert/id/' + id);
  }

  updateExpert(id, data) {
    return this.http.post(this.url + id, data);
  }

  createExpert(data) {
    let expertData = {
      "type":"expert",
      "name":data.name,
      "age":data.age,
      "relatedTo":data.relatedTo,
      "relation":data.relation,
      "comment":data.comment
    };

    return this.http.put(this.url, expertData);
  }
}
