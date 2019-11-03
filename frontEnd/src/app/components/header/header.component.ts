import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  navigateToPrivacy() {
    this.router.navigateByUrl("/privacy");
  }

  navigateToHome() {
    this.router.navigateByUrl("/home");
  }

  navigateToAbout() {
    this.router.navigateByUrl("/about");
  }

  navigateToLeadership() {
    this.router.navigateByUrl("/leadership");
  }

  navigateToEvents() {
    this.router.navigateByUrl("/events");
  }

  navigateToMembership() {
    this.router.navigateByUrl("/membership");
  }

  navigateToYouth() {
    this.router.navigateByUrl("/youth");
  }

}
