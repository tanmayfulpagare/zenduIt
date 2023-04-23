
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import {  SubmissionComponent} from './submission.component';
import { MapModule } from './map/map.module';
import { ListModule } from './list/list.module';
import { DropdownModule } from '../shared/components/dropdown/dropdown.module';
import { SearchbarModule } from '../shared/components/searchbar/searchbar.module';
import { DatePickerModule } from '../shared/components/datepicker/datepicker.module';

@NgModule({
    imports: [
        CommonModule,
        MapModule,
        ListModule,
        DropdownModule,
        SearchbarModule,
        DatePickerModule
    ],
    declarations: [
        SubmissionComponent
    ],
    bootstrap: [
        SubmissionComponent
    ],
    exports: [SubmissionComponent]

})

export class SubmissionModule {}
