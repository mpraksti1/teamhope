import { Component, OnInit } from '@angular/core';
import {OrgService} from "../shared/org.service";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  organizations: any[];

  constructor(private orgService: OrgService) {
    this.orgService.getOrgs().subscribe(data => {
      console.log(data);
      this.organizations = data.data;
    });
  }

  ngOnInit() {
  }

}
