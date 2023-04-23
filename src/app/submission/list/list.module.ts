
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ListComponent } from './list.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
    imports: [
        CommonModule,
        FormsModule
    ],
    declarations: [
        ListComponent,
    ],
    bootstrap: [
        ListComponent
    ],
    exports: [ListComponent]

})

export class ListModule {}
