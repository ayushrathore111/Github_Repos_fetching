import { Component, OnInit,Input } from '@angular/core';
import { GithubService } from '../services/api.service';

@Component({
  selector: 'app-repos',
  templateUrl: './repos.component.html',
  styleUrls: ['./repos.component.scss']
})

export class RepoListComponent {
  @Input() repos: any[] = [];
}
