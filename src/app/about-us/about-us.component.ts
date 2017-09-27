import { Component, OnInit } from '@angular/core';
import SharedConstants from '../constants/shared'

@Component({
  selector: 'app-about-us',
  templateUrl: './about-us.component.html',
  styleUrls: ['./about-us.component.scss']
})
export class AboutUsComponent implements OnInit {
  founders = SharedConstants.founders;

  hoverStatus = {
    0: false,
    1: false,
    2: false,
    3: false,
  };

  constructor() { }

  ngOnInit() {
  }

  setHover(bool, index) { this.hoverStatus[index] = bool }

  generateImgUrl(founder, index) {
    return this.hoverStatus[index]
      ? `url(/assets/img/founders/${founder.imageKey}2.jpg)`
      : `url(/assets/img/founders/${founder.imageKey}1.jpg)`
      ;
  }
}
