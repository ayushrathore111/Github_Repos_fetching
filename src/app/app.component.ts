import { Component, OnInit } from '@angular/core';
import { GithubService } from './services/api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})


export class AppComponent {
  user: any;
  repos: any[] = [];
  username: string = '';

  constructor(private githubService: GithubService) {}

  searchRepos(username: string) {
    this.username = username;
    this.githubService.getUserData(this.username).subscribe(
      (userData) => {
        this.user = userData;
      },
      (err) => {
        console.error(err);
        this.user = null;
      }
    );

    this.githubService.getRepos(this.username).subscribe(
      (repos) => {
        this.repos = repos;
      },
      (err) => {
        console.error(err);
        this.repos = [];
      }
    );
  }
}
