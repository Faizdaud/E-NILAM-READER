import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';
import { NavController } from '@ionic/angular';


@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.page.html',
  styleUrls: ['./book-details.page.scss'],
})
export class BookDetailsPage implements OnInit {

  constructor(
    public router: Router,
    public navCtrl:NavController
  ) { }

  ngOnInit() {
  }

  startSession(){
    this.router.navigate(['/session'])
  }

  goBack() {
    this.navCtrl.back(); // Navigate back to the previous page
  }

}
