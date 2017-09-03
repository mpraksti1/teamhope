import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  organizations: any[];

  constructor() {
    this.organizations = [
      1,2,3,4,5,6,7,8,9,0,
    ];
  }

  ngOnInit() {
  }

}
