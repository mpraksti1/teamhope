import { Component, OnInit } from '@angular/core';
import {DonationService} from '../../shared/donation.service';
import {AuthService} from '../../auth/auth.service';

@Component({
  selector: 'app-my-metrics',
  templateUrl: './my-metrics.component.html',
  styleUrls: ['./my-metrics.component.scss'],
})
export class MyMetricsComponent implements OnInit {
  user: any;
  donations: any[];
  orgs: any;
  initiatives: any;
  isDataAvailable = false;
  pieChart: any[];
  barChart: any[];
  noDonations = false;
  isResizing = false;

  // options
  showXAxis = true;
  showYAxis = true;
  gradient = false;
  showLegend = true;
  showLabels = false;
  doughnut = true;
  arc = .5;
  explodeSlices = true;
  showYAxisLabel = true;
  showXAxisLabel = true;
  xAxisLabel = 'Organization';
  yAxisLabel = 'Amount';

  colorScheme = {
    domain: [
      '#d20357',
      '#ff8100',
      '#00d1d6',
      '#103a5a',
      '#092442',
      '#114B5F',
      '#a4af3c',
      '#F45B69',
      '#00d9f9',
      '#028090',
    ]
  };

  constructor(
    private donationService: DonationService,
    private authService: AuthService
  ) {}

  ngOnInit() {
    let barChartLabels = [];
    let barChartData = [];
    let pieChartLabels = [];
    let pieChartData = [];

    this.authService.user.subscribe(data => {
      this.user = data;

      this.donationService.getDonationsById(this.user.uid).subscribe(data => {
        console.log(data);
        this.donations = data.data;

        console.log(this.donations);

        if (!this.donations || this.donations.length < 1) {
          this.noDonations = true;
          return;
        }

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

        console.log(this.orgs);
        barChartLabels = Object.keys(this.orgs);
        barChartData = (<any>Object).values(this.orgs);

        this.barChart = barChartLabels.map((key, i) => {
          return { name: key, value: barChartData[i]};
        });

        pieChartLabels = Object.keys(this.initiatives);
        pieChartData = (<any>Object).values(this.initiatives);

        this.pieChart = pieChartLabels.map((key, i) => {
          return { name: key, value: pieChartData[i]};
        });

        this.isDataAvailable = true;
        window.dispatchEvent(new Event('resize'));
      });
    });
  }



  yAxisTickFormatting(label) {
    return `$${label}`;
  };

  onResize(event) {
    console.log(event);

    if (this.isResizing) { return false; }

    this.isResizing = true;

    if (event.target.innerWidth < 768 || !this.isResizing) {
      this.showYAxis = false;
      this.showLegend = false;
      this.showYAxisLabel = false;
    } else if (event.target.innerWidth >= 768 || !this.isResizing){
      this.showYAxis = true;
      this.showLegend = true;
      this.showYAxisLabel = true;
    }

    setTimeout(() => {
      this.isResizing = false;
    }, 2000);
  }

  onSelect(event) {
    console.log(event);
  }
}
