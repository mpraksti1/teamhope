import { Component, OnInit } from '@angular/core';
import {DonationService} from '../../shared/donation.service';
import {AuthService} from '../../auth/auth.service';

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
    responsive: true,
    maintainAspectRatio: true,
  };
  public pieChartLabels: string[] = [];
  public pieChartData: number[] = [];
  public pieChartType = 'pie';

  public barChartOptions: any = {
    scaleShowVerticalLines: false,
    responsive: true,
    scales: {
      xAxes: [{
        ticks: {
          beginAtZero: true,
          callback: function(value) {
            return '$' + value;
          }
        }
      }]
    }
  };
  public barChartLabels: string[] = [];
  public barChartData: any[] = [];
  public barChartType = 'horizontalBar';

  public colors: any[] = [{ backgroundColor: [
    '#114B5F',
    '#00d9f9',
    '#028090',
    '#F45B69',
    '#a4c73c'
  ] }];

  constructor(
    private donationService: DonationService,
    private authService: AuthService
  ) { }

  ngOnInit() {
    this.authService.user.subscribe(data => {
      this.user = data;

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
    });

    console.log('user', this.user);
  }
}
