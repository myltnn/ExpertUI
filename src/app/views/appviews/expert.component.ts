import { Component } from '@angular/core';
import { ExpertService } from '../../services/expert.service';

@Component({
  selector: 'experts',
  templateUrl: 'expert.template.html'
})
export class ExpertComponent { 
  experts: any;
  expert: any;
  updateExpertStatus: String;

  constructor(public expertService: ExpertService){
    this.loadExperts();
  }

  loadExperts(){
    this.expertService.getExperts().subscribe(response => {
      this.experts = response;
    });
  }

  getExpert(id){
    this.expertService.getExpert(id).subscribe(response => {
      this.expert = response;
    });
  }

  createExpert(){
    this.expertService.createExpert({}).subscribe(response => {
      this.updateExpertStatus = 'New expert is created';
    });
  }

  updateExpert(id){
    this.expertService.updateExpert(id, {}).subscribe(response => {
      this.updateExpertStatus = 'Existing expert is updated';
    });    
  }
}