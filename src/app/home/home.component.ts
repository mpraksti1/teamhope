import { Component, OnInit } from '@angular/core';
import SharedConstants from '../constants/shared';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  partners: string[];
  inits: any[];

  constructor() {
    this.partners = SharedConstants.partners;
    this.inits = SharedConstants.Initiatives;
  }
  ngOnInit() {

  }

}
