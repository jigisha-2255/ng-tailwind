import { Component } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent {
  given=false;
  received=false;
  activeSprint=false;
  settingDropdown=false;
  exportMode=false;
  showName=false;
  popup=false;
  addPrize=false;
}
