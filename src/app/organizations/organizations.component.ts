import { Component, ViewChild, AfterViewChecked } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {OrgService} from '../shared/org.service';
import {InitiativeService} from '../shared/initiative.service';
import SharedConstants from '../constants/shared';

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements AfterViewChecked {
  @ViewChild('d') initSelect;

  dropdownValues = SharedConstants.Initiatives;
  organizations: any[];
  filterState: number;
  selectVal = 'all';
  beenSet = false;

  constructor(
    private orgService: OrgService,
    private initiativeService: InitiativeService,
    private route: ActivatedRoute,
  ) {
    this.orgService.getOrgs().subscribe(data => {
      const orgs = data.data;
      this.organizations = orgs.map((org, i) => {
        const max = orgs.length;
        this.initiativeService.getInitiativesById(org._id).subscribe(resp => {
          org.initiatives = resp.data;
        });
        return org;
      });
    });
  }

  ngAfterViewChecked() {
    if (!this.beenSet) {
      setTimeout(() => {
        this.route.params.subscribe(params => {
          console.log('PARAMS', params);
          if (params.init) {
            this.selectVal = params.init;
            this.onInitChanged(params.init);
            this.beenSet = true;
          }
        });
      }, 1000)
    }
  }


  fetchIconClass(init) {
    return init.icon;
  }

  onInitChanged(num) {
    if(num) {
      this.filterState = num;
      return;
    }

    this.filterState = this.initSelect.nativeElement.value;
  }
}
