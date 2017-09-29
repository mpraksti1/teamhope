import { Component, OnInit } from '@angular/core';
import { OrgService } from '../shared/org.service';
import { ActivatedRoute } from '@angular/router';
import { Initiative } from '../models/initiative.model';
import { InitiativeService } from '../shared/initiative.service';
import { DonationService } from '../shared/donation.service';
import {AuthService} from '../auth/auth.service';


@Component({
  selector: 'app-organization',
  templateUrl: './organization.component.html',
  styleUrls: ['./organization.component.scss']
})
export class OrganizationComponent implements OnInit {
  orgId: string;
  currOrg: any;
  user: any;
  isModalActive = false;
  currInitiative: Initiative;
  initiatives: any[];
  userDonation = 10;
  modalStatus = 0;
  isLoading: boolean = false;
  frequencyDropdown = false;
  private sub: any;

  constructor(
    private orgService: OrgService,
    private initiativeService: InitiativeService,
    private donationService: DonationService,
    private route: ActivatedRoute,
    private authService: AuthService,
  ) {}

  ngOnInit() {
    this.authService.user.subscribe(data => {
      this.user = data;
    });
    this.sub = this.route.params.subscribe(params => {
      this.orgId = params['id']; // (+) converts string 'id' to a number

      this.orgService.getOrgById(this.orgId).subscribe(data => {
        console.log(data);
        this.currOrg = data.data;
      });

      this.initiativeService.getInitiativesById(this.orgId).subscribe(data => {
        this.initiatives = data.data;
        if (this.initiatives) {
          this.currInitiative = this.initiatives[0];
        }
      });
    });
  }

  toggleModal(initiative) {
    if (this.isModalActive) {
      this.modalStatus = 0;
    }

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

  onDonate(initId) {
    this.isLoading = true;
    this.modalNavigator(true);

    if (!this.user) {
      alert('You must be logged in to donate!');
    }

    const donation = {
      orgName: this.currOrg.name,
      initiativeName: this.currInitiative.title,
      userId: this.user.uid,
      orgId: this.orgId,
      initiativeId: initId,
      amount: this.userDonation,
    };

    this.donationService.createNewDonation(donation)
      .subscribe(
        () => {
          this.currInitiative = null;
          setTimeout(() => {
            this.isLoading = false;
          }, 1000)
        }, error => {
          alert(error.message);
          this.isModalActive = false;
        }
      );
  }
}
