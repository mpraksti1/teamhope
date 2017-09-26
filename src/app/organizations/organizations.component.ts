import { Component, OnInit, ViewChild } from '@angular/core';
import {OrgService} from "../shared/org.service";
import {InitiativeService} from "../shared/initiative.service";

@Component({
  selector: 'app-organizations',
  templateUrl: './organizations.component.html',
  styleUrls: ['./organizations.component.scss']
})
export class OrganizationsComponent implements OnInit {
  @ViewChild('d') initSelect;

  organizations: any[];
  filterState: number;

  constructor(
    private orgService: OrgService,
    private initiativeService: InitiativeService,
  ) {
    this.orgService.getOrgs().subscribe(data => {
      const orgs = data.data;

      this.organizations = orgs.map(org => {
        this.initiativeService.getInitiativesById(org._id).subscribe(resp => {
          org.initiatives = resp.data;
        });

        return org;
      });
    });
  }

  ngOnInit() {
  }

  fetchIconClass(init) {
    return init.icon;
  }

  onInitChanged() {
    this.filterState = this.initSelect.nativeElement.value;
  }
}
