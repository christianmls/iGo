import { Component, OnInit } from '@angular/core';

import { DatatableService } from '../../../../services/datatable/datatable.service';

@Component({
  selector: 'cmaginet-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {
  public dtOptions: any = {};

  constructor(private datatableService: DatatableService) {}

  ngOnInit(): void {
    const columns = [0, 1, 2, 3];
    this.dtOptions = this.datatableService.getOptions('CLIENTE', columns);
  }

}
