import { AfterViewInit, Component, ElementRef, EventEmitter, Input, Output, ViewChild } from '@angular/core';
import { debounceTime, fromEvent } from 'rxjs';

@Component({
  selector: 'app-searchbar',
  templateUrl: './searchbar.component.html',
  styleUrls: ['./searchbar.component.scss']
})
export class SearchbarComponent implements AfterViewInit{

  @ViewChild('inputRef') inputRef!: ElementRef;

  @Input() style = {}

  @Output() search = new EventEmitter<string>();


  ngAfterViewInit() {
    fromEvent(this.inputRef.nativeElement, 'input')
      .pipe(debounceTime(500))
      .subscribe((event: any) => {
        const searchTerm = event.target.value;
        this.search.emit(searchTerm);
      });
  }
 

}
