import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  constructor(
    public router: Router
  ) { }

  ngOnInit() {
  }

  startSession(){
    this.router.navigate(['/session'])
  }

}
