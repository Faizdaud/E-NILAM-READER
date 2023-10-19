import { Component, OnInit } from '@angular/core';
import{ Router } from '@angular/router';

// 1) import this libraries
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.page.html',
  styleUrls: ['./register-book.page.scss'],
})

export class RegisterBookPage implements OnInit {
 // Add book variable( object definition): above the constructor in the class
//  declare an object name book
  book = {
    isbn: '',
    name: '',
    author: '',
    description: '',

  };
  coverFile: File | null = null;
  constructor(
    // add in constructor
    private afStorage: AngularFireStorageModule,
    private firestore: AngularFirestore,
    private router: Router,
  ) { }

  ngOnInit() {
  }
  async registerBook() {
    // Add book data to Firestore
    this.firestore.collection('books').add(this.book);

    // Clear the form
    this.book = {
      isbn: '',
      name: '',
      author: '',
      description: '',

    };

    alert("success!")
  }
  backTo(){
    this.router.navigate(['tabs/home']);
  }


}
