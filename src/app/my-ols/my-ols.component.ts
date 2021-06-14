import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrlService } from '../router-url.service';

@Component({
  selector: 'app-my-ols',
  templateUrl: './my-ols.component.html',
  styleUrls: ['./my-ols.component.scss']
})
export class MyOlsComponent implements OnInit {

  constructor(private router: Router, private routeUrlServ: RouterUrlService) { }
  ngOnInit(): void {
    this.routeUrlServ.ChangeMessage(this.router.url);
  }

}
