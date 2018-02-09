import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  private users:any;

  constructor(private githubService: GithubService) { }

  getUsers(){
    this.githubService.getUsers(null).subscribe( users => {
      console.log(users);
      this.users = users;
    });
  }


  ngOnInit() {
    this.getUsers();
  }

}
