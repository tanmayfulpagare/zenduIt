import { Component } from '@angular/core';
import { Subscription } from 'rxjs';
import { SubmissionService } from 'src/app/shared/services/submission.service';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss']
})
export class MapComponent {

  items: any = [];

  icon = { url: "assets/map.svg" };

  private subscription: Subscription;

  markers = [
    { position: { lat: 18.5204, lng: 73.8567 }, icon: this.icon }, // Pune city center
    { position: { lat: 18.5710, lng: 73.7798 }, icon: this.icon }, // Aundh
    { position: { lat: 18.5357, lng: 73.8677 }, icon: this.icon }, // Shivajinagar
    { position: { lat: 18.4927, lng: 73.8235 }, icon: this.icon }  // Kothrud
  ];
  
  center = { lat: 18.5204, lng: 73.8567 };
  
  zoom = 12;

  constructor( private _submissionService: SubmissionService) {
    this.getFilteredData()
  }
 

  getFilteredData() {
    this.subscription = this._submissionService.getFilteredData().subscribe(data => {
      this.items = data || [];
    });
  }

  ngOnDestroy() {
    if (this.subscription) {
      this.subscription.unsubscribe();
    }
  }
  
}
