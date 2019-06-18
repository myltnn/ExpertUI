import { Component } from '@angular/core';
import { ExpertService } from '../../services/expert.service';
import { FormGroup, FormControl } from '@angular/forms';

@Component({
  selector: 'experts',
  templateUrl: 'expert.template.html'
})
export class ExpertComponent { 
  experts: any;
  expert: any;
  expertStatus: String;
  public creationState: boolean = false;

  constructor(public expertService: ExpertService){
    this.loadExperts();
  }

  onClickSubmit(data) {
      this.expertStatus = 'Adding the expert to the system.';
      this.createExpert({
        name: data.firstName + " " + data.lastName,
        age: data.age,
        address: data.address
      });
  }

  onClickCancel(data) {
    this.createToggle();
  }

  createToggle() {
    this.creationState = !this.creationState;
  }

  loadExperts(){
    this.expertService.getExperts().subscribe(response => {
      //console.log(this.convertExperts(response));
      this.experts = this.convertExperts(response);
    });
  }

  getExpert(id){
    this.expertService.getExpert(id).subscribe(response => {
      this.expert = this.convertExpert(response);
    });
  }

  createExpert(data){
    return this.expertService.createExpert(data).subscribe(response => {
      this.expertStatus = 'The expert is added to the system successfuly.';
      this.loadExperts();
      this.createToggle();
    });
  }

  updateExpert(id){
    this.expertService.updateExpert(id, {}).subscribe(response => {
      this.expertStatus = 'Existing expert is updated';
    });    
  }

  convertExperts(res){
    let experts = [];
    res.forEach(expert => {
      experts.push(this.convertExpert(expert));
    });

    return experts;
  }

  convertExpert(expert){
    return {
      "name": expert.properties.name ? expert.properties.name[0].value : "",
      "age": expert.properties.age ? expert.properties.age[0].value : "",
      "address": expert.properties.address ? expert.properties.address[0].value : "",
      "email": expert.properties.email ? expert.properties.email[0].value : "",
      "relatedTo": expert.properties.relatedTo ? expert.properties.relatedTo[0].value : "",
      "relation":  expert.properties.relation ? expert.properties.relation[0].value : "",
      "comment": expert.properties.comment ? expert.properties.comment[0].value : ""
    };
  }
}