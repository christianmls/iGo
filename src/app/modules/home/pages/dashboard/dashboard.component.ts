import { Component, OnInit } from '@angular/core';

import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';

import { DatatableService } from '../../../../services/datatable/datatable.service';

@Component({
  selector: 'cmaginet-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  user: any = {};
  dtOptions: any = {};

  constructor(private authService: NbAuthService, private datatableService: DatatableService) {
    this.authService.onTokenChange().subscribe((token)=>{
      console.log('Token', token);
      if (token.isValid()) {
        this.user = token.getPayload();
        console.log('User', this.user);
      }
    });
  }

  ngOnInit(): void {
    const columns = [0, 1, 2, 3];
    this.dtOptions = this.datatableService.getOptions('CLIENTE', columns);
  }

}
