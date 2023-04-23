
import { NgModule } from '@angular/core';
import {  DropdownComponent } from './dropdown.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule
    ],
    declarations: [
        DropdownComponent
    ],  
    bootstrap: [
        DropdownComponent
    ],
    exports: [
        DropdownComponent
    ]
})

export class DropdownModule {}
