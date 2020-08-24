import { Component, OnInit } from '@angular/core';

import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

@Component({
  selector: 'cmaginet-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user = {};

  constructor(private authService: NbAuthService) {
    this.authService.onTokenChange().subscribe((token)=>{
      console.log('Token', token);
      if (token.isValid()) {
        this.user = token.getPayload();
        console.log('User', this.user);
      }
    });
  }

  ngOnInit(): void {
  }

}
