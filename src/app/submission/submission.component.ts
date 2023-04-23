import { Component, ViewChild } from '@angular/core';
import { FROM_OPTIONS, LIST_DATA, STATUS_OPTIONS } from '../shared/config';
import { SubmissionService } from '../shared/services/submission.service';
import { ListComponent } from './list/list.component';


@Component({
  selector: 'app-submission',
  templateUrl: './submission.component.html',
  styleUrls: ['./submission.component.scss']
})
export class SubmissionComponent {

  tab :string = 'map'; 

  fromOptions = FROM_OPTIONS;

  items = LIST_DATA;

  statusOptions = STATUS_OPTIONS;

  filterData:any = {};

  constructor(private _submissionService : SubmissionService) { 
    this.setFilteredData(this.items)
  }

  @ViewChild(ListComponent) listComponent: ListComponent;

  onSearch(event:string){
    this.filterData['search'] = event;
    this.updateFilter()
  }

  onStatusChange(event:string){
    this.filterData['status'] = event;
    this.updateFilter()
  }

  onFromChange(event:string){
    this.filterData['from'] = event;
    this.updateFilter()
  }

  onDateChange(event:string){
    this.filterData['dueDate'] = event;
    this.updateFilter()
  }

  updateFilter(){
      let outputData = [...this.items];

      const search = this.filterData.search && this.filterData.search.toLowerCase().trim() || '';
      outputData = outputData.filter(item => item.task.toLowerCase().includes(search));
    
      const status = this.filterData.status && this.filterData.status.toLowerCase().trim() || '';
      if (status.length > 0) {
       outputData = outputData.filter(item => item.status.toLowerCase() === status);
      }
    
      const from = this.filterData.from && this.filterData.from.toLowerCase().trim() || '';
      if (from.length > 0) {
       outputData = outputData.filter(item => item.from.toLowerCase() === from);
      }
    
      const dueDate = this.filterData.dueDate && this.filterData.dueDate.trim() || '';
      if (dueDate.length > 0) {
       outputData = outputData.filter(item => item.dueDate === dueDate);
      }
      this.setFilteredData(outputData);
  }

  setFilteredData(data: any[]) {
    this._submissionService.setFilteredData(data);
  }
  

  onButtonClick() {
    this.listComponent.onExport(); 
  }
  
}
