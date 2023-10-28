import { Component } from '@angular/core';
import { Router} from '@angular/router'

import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  books: any[] = []; // Property to store the list of books
  newlyRegisteredBook: any; // Property for the newly registered book
  
  constructor(
    private router: Router,
    private firestore: AngularFirestore) {}

  navigateTo(){
    this.router.navigate(['tabs/book-details']);
  }

  ngOnInit() {
    // Fetch books data from Firestore
    this.firestore.collection('books').valueChanges().subscribe((data: any) => {
      this.books = data;
    });
  }
  // Function to register a new book and display it in the separate container
  registerNewBook(bookData: any) {
    this.firestore.collection('books').add(bookData).then((docRef) => {
      this.newlyRegisteredBook = { id: docRef.id, ...bookData };
    });
  }
}
