import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-dropdown',
  templateUrl: './dropdown.component.html',
  styleUrls: ['./dropdown.component.scss']
})
export class DropdownComponent {

  @Input() options:any

  @Input() placeholder: string = 'Select an option' 

  @Input() style = {}

  @Output() selectedValue = new EventEmitter<string>();

  onSelect(event: any) {
    this.selectedValue.emit(event.target.value);
  }

}
