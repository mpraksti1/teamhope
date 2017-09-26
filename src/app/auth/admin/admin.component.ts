import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {OrgService} from "../../shared/org.service";
import {InitiativeService} from "../../shared/initiative.service";
import SharedConstants from "../../constants/shared"

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  orgs: any[];

  initiatives = [...SharedConstants.Initiatives];

  constructor(
    private orgService: OrgService,
    private  initiativeService: InitiativeService) {}

  ngOnInit() {
    this.orgService.getOrgs().subscribe(data => {
      console.log(data);
      this.orgs = data.data;
    });
  }

  onSubmit(form: NgForm) {
    let orgId = null;
    const selected = this.initiatives
        .filter(c => c.selected);

    this.orgService.createNewOrg(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          orgId = response.data._id;

          selected.forEach((initiative: any) => {
            initiative.orgId = orgId;
            this.initiativeService.createNewInitiative(initiative)
              .subscribe(
                (resp) => {
                  console.log(resp);
                }
              );
          });
        }
      );
  }
}
