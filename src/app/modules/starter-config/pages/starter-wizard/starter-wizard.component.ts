import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

import { environment } from 'src/environments/environment';

@Component({
  selector: 'cmaginet-starter-wizard',
  templateUrl: './starter-wizard.component.html',
  styleUrls: ['./starter-wizard.component.scss']
})
export class StarterWizardComponent implements OnInit {

  constructor(private httpClient: HttpClient, private router: Router) { }

  ngOnInit(): void {
    this.started();
  }

  async started() {
    const data = await this.httpClient.get( `${environment.api}/administration/company` ).toPromise();

    if( data.constructor.length >= 0 ) this.router.navigate(['/auth/login']);
  }

}
