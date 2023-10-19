import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

// 1) import this libraries
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { doc, setDoc } from "firebase/firestore";

@Component({
  selector: 'app-testfirebase',
  templateUrl: './testfirebase.page.html',
  styleUrls: ['./testfirebase.page.scss'],
})
export class TestfirebasePage implements OnInit {

  user = {
    userId: '',
    book:{
      bookName:  '',
      lastpage: ''
    }
  };



  constructor(
    private afStorage: AngularFireStorageModule,
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit() {
  }

  async registerBook() {
    // Add book data to Firestore
    // this.firestore.collection('user').add(this.user);
    
    // to update data in firebase
    // this.firestore.collection('user').doc('lightState').update(this.user);
    
    // // Clear the form
    // this.book = {
    //   isbn: '',
    //   name: '',
    //   author: '',
    //   description: '',

    // };

    alert("success!")
  }

}
