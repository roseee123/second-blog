import { Injectable, Injector } from '@angular/core';
import { Router } from '@angular/router';
import { UtilsService } from '.';
import { UserService } from '../user/service/user.service';

@Injectable({
  providedIn: 'root'
})
export class StartupService {

  constructor(
    private injector: Injector,
    private utils: UtilsService,
    private userService: UserService
  ) { }

  load(): Promise<any> {
    return new Promise((resolve, reject) => {
      return this.userService.checkUser()
          .subscribe(res => {
              if (res) {
                  setInterval(() => {
                      this.checkStatus();
                  }, 1000 * 60 * 5);    // check current status every 5 min
              }
              resolve(res);
          }, err => {
              console.log(err);
              reject(err);
          });
  });
  }

  checkStatus() {
    if (this.utils.isTokenExpired()) {   // if token expired
        this.userService.logout();
        const router = this.injector.get(Router);
        router.navigate(['/']);
        console.log('logout due to token expired');
    }
  }
}
