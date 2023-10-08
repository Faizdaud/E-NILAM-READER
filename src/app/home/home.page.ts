import { Component } from '@angular/core';
import { Router} from '@angular/router'
@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  constructor(private router: Router) {}

  // navigateTo(){
    // this._navigateTo('login');
  // }
  testFunc(){
    console.log("Test Function Called");
    this.router.navigate(['login'])
  }

}
