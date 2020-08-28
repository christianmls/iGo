import { Component, OnInit } from '@angular/core';

import { NbMenuItem } from '@nebular/theme';
import { NbAuthService } from '@nebular/auth';

@Component({
  selector: 'cmaginet-layout',
  templateUrl: './layout.component.html',
  styleUrls: ['./layout.component.scss']
})
export class LayoutComponent implements OnInit {
  items: NbMenuItem[] = [];

  constructor(
    private authService: NbAuthService
  ) {
    this.authService.onTokenChange().subscribe((token)=>{
      if (token.isValid()) {
        this.items = token.getPayload().user.menuOptions;
      }
    });
   }

  ngOnInit(): void {
  }
}
