import { Component, OnInit } from '@angular/core';
import { Router} from '@angular/router'

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage {

  constructor(private router: Router) {}

  navigateTo(){
    this.router.navigate(['tabs/start-session']);
  }

}
