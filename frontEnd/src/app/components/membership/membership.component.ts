import {Component, OnInit, ViewChild} from '@angular/core';
import {MatSort} from "@angular/material/sort";
import {MatTableDataSource} from "@angular/material/table";

export interface MembershipPrice {
  type: string,
  price: string
}

const NAACP_MEMBERSHIP: MembershipPrice[] = [
  {type: 'Regular Adult', price: '$30.00 (Yearly)'},
  {type: 'Youth with Crisis', price: '$15.00'},
  {type: 'Youth without Crisis', price: '$10.00'},
  {type: 'Junior Life Membership (Ages 13 & Under)', price: '$100.00'},
  {type: 'Bronze Life Membership (Ages 14-20)', price: '$400.00'},
];

const LIFE_MEMBERSHIP: MembershipPrice[] = [
  {type: 'Adult Silver Life', price: '$750.00'},
  {type: 'Adult Gold Life (Only available to Fully Paid Silver or Regular Life Members)', price: '$1,500.00'},
  {type: 'Adult Diamond Life (Only available to Fully Paid Gold or Gold Heritage Life Members)', price: '$2,500.00'},
  {type: 'Annual Corporate', price: '$5,000.00'},
];


@Component({
  selector: 'app-membership',
  templateUrl: './membership.component.html',
  styleUrls: ['./membership.component.css']
})
export class MembershipComponent implements OnInit {

  displayedColumns: string[] = ['type', 'price'];
  dataSource = new MatTableDataSource(NAACP_MEMBERSHIP);
  dataSource1 = new MatTableDataSource(LIFE_MEMBERSHIP);


  constructor() { }

  ngOnInit() {

  }


}
