import { Component } from '@angular/core';
import { HEADER_TABS } from '../../config';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent {

  tabs: any = HEADER_TABS;

  redirectTo(tab: any){
    //need to write code to handle other tabs
    if(!tab.isTabActive) alert('Not implemeted yet')
  }

  onClick(){
    alert('Not implemeted yet') 
  }
}
