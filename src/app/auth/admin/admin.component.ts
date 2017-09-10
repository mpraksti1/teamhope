import {Component, OnInit} from '@angular/core';
import {NgForm} from "@angular/forms";
import {OrgService} from "../../shared/org.service";

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit{
  orgs: any[];

  org = {
    initiatives: [
      {
        name: 'Harm reduction',
        value: 1,
        selected: false,
        title: '',
        description: '',
        image: ''
      },
      {
        name: 'Community Support',
        value: 2,
        selected: false,
        title: '',
        description: '',
        image: ''
      },
      {
        name: 'Therapy',
        value: 3,
        selected: false,
        title: '',
        description: '',
        image: ''
      },
      {
        name: 'Treatment',
        value: 4,
        selected: false,
        title: '',
        description: '',
        image: ''
      },
      {
        name: 'Needle Exchanging',
        value: 5,
        selected: false,
        title: '',
        description: '',
        image: ''
      },
      {
        name: 'Shelters',
        value: 6,
        selected: false,
        title: '',
        description: '',
        image: ''
      },
    ]
  };

  constructor(private orgService: OrgService) {}

  ngOnInit() {
    this.orgService.getOrgs().subscribe(data => {
      console.log(data);
      this.orgs = data.data;
    });
  }

  onOrgClicked(id) {
    this.orgService.getOrgById(id).subscribe(data => {
      console.log(data);
    });
  }

  onSubmit(form: NgForm) {
    console.log(form);

    const selected = this.org.initiatives
        .filter(c => c.selected)

    form.value.initiatives = selected;

    this.orgService.createNewOrg(form.value)
      .subscribe(
        (response) => {
          console.log(response);
          alert('Success!')
        }
      );
  }
}
