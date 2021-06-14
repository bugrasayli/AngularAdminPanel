import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrlService } from '../router-url.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  constructor(private router: Router, private routeUrlServ: RouterUrlService) { }
  ngOnInit(): void {
    this.routeUrlServ.ChangeMessage("");
  }

}
