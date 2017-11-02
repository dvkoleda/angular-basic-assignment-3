import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-btn-counter',
  templateUrl: './btn-counter.component.html',
  styleUrls: ['./btn-counter.component.css']
})
export class BtnCounterComponent implements OnInit {

  isVisibleMsg = true;
  logMsgs = [];

  constructor() { }

  onBtnClick() {
    this.isVisibleMsg = !this.isVisibleMsg;
    this.logMsgs.push({ number: this.logMsgs.length + 1, timeStamp : new Date().getMilliseconds()});
    console.log(this.logMsgs);
  }

  ngOnInit() {
  }

}
