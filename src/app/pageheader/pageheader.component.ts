import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RouterUrlService } from '../router-url.service';

@Component({
  selector: 'app-pageheader',
  templateUrl: './pageheader.component.html',
  styleUrls: ['./pageheader.component.scss']
})
export class PageheaderComponent implements OnInit {

  constructor(private router: Router, private routeService: RouterUrlService) {
    this.urls = '';
  }

  urls: string;
  ngOnInit(): void {
    this.routeService.currentMessage.subscribe(x => {
      this.urls = x.substring(1);
      let first = this.urls.substr(0, 1).toUpperCase();
      this.urls = first + this.urls.substr(1)

    });
  }


}
