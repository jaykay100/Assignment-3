import { Component, OnInit } from '@angular/core';
import { kapoorj } from "../kapoorj.ts.component";
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  currkapoorj : kapoorj = 
{ sid: 991289004, sname: "Jasmine kapoor", scampus: "Davis", slogin: "kapoorj", sassignment: "Assignment 3" };
  }

}
