import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrlService } from '../router-url.service';

@Component({
  selector: 'app-my-origin-file',
  templateUrl: './my-origin-file.component.html',
  styleUrls: ['./my-origin-file.component.scss']
})
export class MyOriginFileComponent implements OnInit {

  constructor(private router: Router, private routeUrlServ: RouterUrlService) { }
  ngOnInit(): void {
    this.routeUrlServ.ChangeMessage(this.router.url);
  }

}
