import { Component, OnInit } from '@angular/core';
import {DonationService} from '../../shared/donation.service';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'app-my-metrics',
  templateUrl: './my-metrics.component.html',
  styleUrls: ['./my-metrics.component.scss']
})
export class MyMetricsComponent implements OnInit {
  user: any;
  donations: any[];
  orgs: any;
  initiatives: any;
  isDataAvailable = false;

  public pieChartOptions = {
    responsive: true
  }
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';

  private colors: any[] = [{ backgroundColor: [
    '#114B5F',
    '#00d9f9',
    '#028090',
    '#E4FDE1',
    '#F45B69',
    '#a4c73c'
  ] }];

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartType = 'bar';
  public barChartData: any[] = [];

  constructor(
    private donationService: DonationService,
    private angularFire: AngularFireAuth,
  ) { }

  ngOnInit() {
    this.user = this.angularFire.auth.currentUser;
    console.log('user', this.user);

    this.donationService.getDonationsById(this.user.uid).subscribe(data => {
      console.log(data);
      this.donations = data.data;

      this.initiatives = this.donations.reduce((allInitiatives, initiative) => {
        if (initiative.initiativeName in allInitiatives) {
          allInitiatives[initiative.initiativeName]++;
        } else {
          allInitiatives[initiative.initiativeName] = 1;
        }

        return allInitiatives;
      }, {});

      this.orgs = this.donations.reduce((allOrgs, org) => {
        if (org.orgName in allOrgs) {
          allOrgs[org.orgName] += org.amount;
        } else {
          allOrgs[org.orgName] = org.amount;
        }

        return allOrgs;
      }, {});

      this.barChartLabels = Object.keys(this.orgs);
      this.barChartData = (<any>Object).values(this.orgs);

      console.log(this.barChartLabels);
      console.log(this.barChartData);

      this.pieChartLabels = Object.keys(this.initiatives);
      this.pieChartData = (<any>Object).values(this.initiatives);

      this.isDataAvailable = true;
    });
  }
}