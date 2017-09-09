import { Component, OnInit } from '@angular/core';
import {OrgService} from '../shared/org.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  orgId: string;
  currOrg: any;
  private sub: any;

  constructor(
    private orgService: OrgService,
    private route: ActivatedRoute
  ) {}

  ngOnInit() {
    this.sub = this.route.params.subscribe(params => {
      this.orgId = params['id']; // (+) converts string 'id' to a number

      this.orgService.getOrgById(this.orgId).subscribe(data => {
        console.log(data);
        this.currOrg = data.data;
      });
    });
  }

}
