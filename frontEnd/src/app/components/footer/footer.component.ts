import {AfterViewInit, Component, ElementRef, OnInit, ViewChild} from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements AfterViewInit {

  @ViewChild('footer') footer: ElementRef;

  constructor() { }

  ngAfterViewInit(){
    //this.main.height = 100 - (this.toolbar.height + this.footer.height)
  }

}
