import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SubmissionService {
  private filteredData = new BehaviorSubject<any>([]);

  constructor() { }

  setFilteredData(data: any[]) {
    this.filteredData.next(data);
  }

  getFilteredData() {
    return this.filteredData.asObservable();
  }
}
