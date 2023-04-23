
import { NgModule } from '@angular/core';
import {  SearchbarComponent } from './searchbar.component';
import { CommonModule } from '@angular/common';

@NgModule({
    imports: [
        CommonModule,
    ],
    declarations: [
        SearchbarComponent
    ],  
    bootstrap: [
        SearchbarComponent
    ],
    exports: [
        SearchbarComponent
    ]
})

export class SearchbarModule {}
