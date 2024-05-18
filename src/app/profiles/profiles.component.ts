import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profiles.component.html',
  styleUrls: ['./profiles.component.scss']
})
export class UserProfileComponent {
  @Input() user: any;
}
