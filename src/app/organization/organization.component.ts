import { Component, OnInit } from '@angular/core';
import {OrgService} from '../shared/org.service';
import { ActivatedRoute } from '@angular/router';
import {Initiative} from '../models/initiative.model';

@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  orgId: string;
  currOrg: any;
  isModalActive = false;
  currInitiative: Initiative;
  userDonation = 10;
  modalStatus = 0;
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
        this.currInitiative = data.data.initiatives[0];
      });
    });
  }

  toggleModal(initiative) {
    this.isModalActive = !this.isModalActive;
    this.currInitiative = initiative;
  }

  modalNavigator(bool) {
    if (bool) {
      this.modalStatus++;
    } else if (!bool && this.modalStatus !== 0) {
      this.modalStatus--;
    }
  }

  incrementDonation(bool, amount) {
    if (bool) {
      this.userDonation += amount;
    } else if (!bool && this.userDonation !== 0) {
      this.userDonation -= amount;
    }
  }

}
