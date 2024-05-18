import { Component,EventEmitter, Output } from '@angular/core';
import { GithubService } from '../services/api.service';


@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent {
  @Output() search = new EventEmitter<string>();
  username: string = '';

  onSearch() {
    this.search.emit(this.username);
  }
}
