import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit {
  constructor(private title: Title) {}

  ngOnInit() {
    this.title.setTitle('Angular Cascading or Dependent Dropdown');
  }

  hide = false;
  Placeholder = '';
  selectedReason: String = '--Select an adjustment reason--';

  Reasons: Array<any> = [
    {
      name: 'Pandsplit Reason',
      input: [
        {
          name: 'In number of items',
          placeholder: 'Enter the adjustment for forecast',
        },
        {
          name: 'In percentage points of Pandsplit',
          placeholder: 'Enter the percentage point for forecast',
        },
      ],
    },
    {
      name: 'Non-Pandsplit Reason',
      input: [
        {
          name: 'In number of items',
          placeholder: 'Enter the adjustment for forecast',
        },
        {
          name: 'In percentage of B-HOCA',
          placeholder: 'Enter the adjustment percentage for forecast',
        },
      ],
    },
  ];

  types: Array<any> = [];

  changeReason(type: any) {
    this.types = this.Reasons.find(
      (cntry: any) => cntry.name == type.target.value
    ).input;
    this.hide = false;
  }

  changeType(state: any) {
    this.hide = true;
    this.Placeholder = this.Reasons.find(
      (cntry: any) => cntry.name == this.selectedReason
    ).input.find((stat: any) => stat.name == state.target.value).placeholder; //Angular 11
  }
}
