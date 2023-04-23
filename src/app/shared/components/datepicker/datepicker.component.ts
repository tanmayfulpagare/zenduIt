import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-datepicker',
  templateUrl: './datepicker.component.html',
  styleUrls: ['./datepicker.component.scss']
})
export class DatepickerComponent {

  constructor() { }

  @Input() style = {};

  @Output() dateChange = new EventEmitter<string>();

  onDateChange(event: any) {
    this.dateChange.emit(event.target.value);
  }
}
