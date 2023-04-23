
import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { GoogleMapsModule } from '@angular/google-maps';


@NgModule({
    imports: [
        CommonModule,
        GoogleMapsModule
    ],
    declarations: [
        MapComponent,
    ],
    bootstrap: [
        MapComponent
    ],
    exports: [MapComponent]

})

export class MapModule {}
