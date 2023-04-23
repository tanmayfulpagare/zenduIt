
import { NgModule } from '@angular/core';
import {  DatepickerComponent } from './datepicker.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        DatepickerComponent
    ],  
    bootstrap: [
        DatepickerComponent
    ],
    exports: [
        DatepickerComponent
    ]
})

export class DatePickerModule {}
