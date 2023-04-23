import { Component, Input, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubmissionService } from 'src/app/shared/services/submission.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent {

  itemsPerPage = 8; 
  currentPage = 1; 
  totalItems = 0;
  totalPages = 0;
  itemsToDisplay:any;
  items:any;

  private subscription: Subscription;

  constructor( private _submissionService: SubmissionService) {
      this.getFilteredData()
  }

  toggleSelectAll(target: any) {
    const checked = target.checked;
    this.items.forEach(item => item.selected = checked);
  }

  updateItemsToDisplay(): void {
    const startIndex = (this.currentPage - 1) * this.itemsPerPage;
    const endIndex = startIndex + this.itemsPerPage;
    this.itemsToDisplay = this.items.slice(startIndex, endIndex);
    this.totalItems= this.items.length
    this.calculateTotalPages()
  }

  calculateTotalPages(): void {
    this.totalPages = Math.ceil(this.totalItems / this.itemsPerPage);
  }

  onPageChange(pageNumber: number): void {
    this.currentPage = pageNumber;
    this.updateItemsToDisplay();
  }

  toggleSelect(target: any,id) {
    const checked = target.checked;
    const itemIndexToUpdate = this.items.findIndex(task => task.id === id);
    if (itemIndexToUpdate !== -1) {
      this.items[itemIndexToUpdate].selected = checked;
    }
  }

  getFilteredData() {
    this.subscription = this._submissionService.getFilteredData().subscribe(data => {
      this.items = data;
      this.updateItemsToDisplay();
    });
  }


  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }

  onExport() {
    const exportItem = this.items.filter((item => item.selected)) || [];
    if(!exportItem.length ){
      alert("Select rows from table first")
      return;
    }
    const filteredExportItem = exportItem.map(({ id,selected,...rest }) => rest);
    const worksheet = XLSX.utils.json_to_sheet(filteredExportItem);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, 'Sheet1');
    XLSX.writeFile(workbook, 'table-data.xlsx');
  }

}
