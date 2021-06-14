import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrlService } from '../router-url.service';

@Component({
  selector: 'app-my-mapper',
  templateUrl: './my-mapper.component.html',
  styleUrls: ['./my-mapper.component.scss']
})
export class MyMapperComponent implements OnInit {

  constructor(private router: Router, private routeUrlServ: RouterUrlService) { }
  ngOnInit(): void {
    this.routeUrlServ.ChangeMessage(this.router.url);
  }
}
