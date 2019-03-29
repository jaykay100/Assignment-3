import { Component, OnInit } from '@angular/core';
import { songInfo } from "../songInfo.ts";

var songInfo; 
@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    currsongInfo : songInfo = 
    { sname: "without you", sartist: "Halsey", sgenre: "pop", syear: 2018 };
  
  }

  ngOnInit2() {
    currsongInfo : songInfo = 
    { sname: "surfin", sartist: "the beach boys", sgenre: "pop" , syear: 1963, spicture: "Assignment 3" };
  }

  ngOnInit3() {
    currsongInfo : songInfo = 
    { sname: "believe", sartist: "cher", sgenre: "pop", syear: 2000, spicture: "Assignment 3" };
  }
  ngOnInit4() {
    currsongInfo : songInfo = 
    { sname: "breathe", sartist: "Faith hill", sgenre: "pop", syear: 2000, spicture: "Assignment 3" };
  
  }
}
