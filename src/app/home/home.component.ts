import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  users:any;
  name: string = "Mauri Miguel";
  numRepos: number = 0;

  constructor(private githubService: GithubService) { }

  getUsers(){
    this.githubService.getUsers(this.name, this.numRepos).subscribe( users => {
      this.users = users;
    });
  }


  ngOnInit() {
    this.getUsers();
  }

}
