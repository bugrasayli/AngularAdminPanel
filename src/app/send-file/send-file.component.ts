import { Component, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrlService } from '../router-url.service';

@Component({
  selector: 'app-send-file',
  templateUrl: './send-file.component.html',
  styleUrls: ['./send-file.component.scss']
})
export class SendFileComponent implements OnInit {

  constructor(private router: Router, private routeUrlServ: RouterUrlService) { }
  ngOnInit(): void {
    this.routeUrlServ.ChangeMessage(this.router.url);
  }

}
