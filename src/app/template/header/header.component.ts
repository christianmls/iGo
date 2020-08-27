import { Component, OnInit } from '@angular/core';

import { NbAuthJWTToken, NbAuthService } from '@nebular/auth';
import { NbSidebarService, NbMenuService, NbMenuBag } from '@nebular/theme';
import { Router } from '@angular/router';

@Component({
  selector: 'cmaginet-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  user: any = {};
  context: any = [{ title: 'Perfil', data: 'profile' }, { title: 'Cerrar Sesión', data: 'logout' }];

  constructor(private authService: NbAuthService, private sidebarService: NbSidebarService, private nbMenuService: NbMenuService, private router: Router) {
    this.authService.onTokenChange().subscribe((token)=>{

      if (token.isValid()) {
        this.user = token.getPayload();
      }
    });
  }

  ngOnInit(): void {
    this.nbMenuService.onItemClick().subscribe((menu: NbMenuBag) => {
      switch (menu.item?.data) {
        case "profile":
          console.log('profile');
          break;
        case "logout":
          this.authService.logout('email').subscribe((result)=> {
            if(result.isSuccess()) {
              console.log('logout', result.getRedirect())
              this.router.navigate([result.getRedirect()]);
            }
          });
          break;
      }
    });
  }

  toggle() {
    this.sidebarService.toggle(true);
    return false;
  }
}
