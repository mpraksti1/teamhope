import { Component } from '@angular/core';
import {FormBuilder} from '@angular/forms'

@Component({
  selector: 'app-admin',
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.scss']
})
export class AdminComponent {
  form = null;

  org = {
    initiatives: [
      {
        name: 'Harm reduction',
        value: 1,
        selected: false
      },
      {
        name: 'Community Support',
        value: 2,
        selected: false
      },
      {
        name: 'Therapy',
        value: 3,
        selected: false
      },
      {
        name: 'Treatment',
        value: 4,
        selected: false
      },
      {
        name: 'Needle Exchanging',
        value: 5,
        selected: false
      },
      {
        name: 'Shelters',
        value: 6,
        selected: false
      },
    ]
  };

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      initiatives: this.buildInitiatives()
    });
  }

  get initiatives(){
    return this.form.get('initiatives');
  }

  buildInitiatives() {
    const arr = this.org.initiatives.map(skill => {
      return this.fb.control(skill.selected);
    });
    return this.fb.array(arr);
  }
}
