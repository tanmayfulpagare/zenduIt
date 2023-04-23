
import { NgModule } from '@angular/core';
import {  HeaderComponent } from './header.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        HeaderComponent
    ],  
    bootstrap: [
        HeaderComponent
    ],
    exports: [
        HeaderComponent
    ]
})

export class HeaderModule {}
