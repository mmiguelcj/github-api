import { GithubService } from './../github.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router/src/router_state';
import { Router } from '@angular/router/src/router';
import { Subscription } from 'rxjs/Subscription';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  id: number;
  user: any;
  repos: any;
  inscricao: Subscription;

  constructor(
    private route: ActivatedRoute, 
    private githubService: GithubService,
    private router: Router
  ) { }
  
  voltar(){
    this.router.navigate(['']);
  }
  getUser() {
    this.githubService.getUser(this.id).subscribe( user => {
      console.log(user);
      this.user = user;
    });
  }
  getRepos() {
    this.githubService.getUserRepos(this.id).subscribe( repos => {
      console.log(repos);
      this.repos = repos;
    });
  }
  ngOnInit() {
    this.inscricao = this.route.params.subscribe(
      (params: any) => {
        this.id = params['id'];
        console.log('ID: '+ this.id);
        this.getUser();
        this.getRepos();    
      }
    );
  }
}
