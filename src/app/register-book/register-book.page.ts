import { Component, OnInit } from '@angular/core';
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NavController } from '@ionic/angular';

@Component({
  selector: 'app-register-book',
  templateUrl: './register-book.page.html',
  styleUrls: ['./register-book.page.scss'],
})
export class RegisterBookPage implements OnInit {
  book = {
    isbn: '',
    name: '',
    author: '',
    description: '',
  };
  coverFile: File | null = null; // Initialize with null

  constructor(
    private afStorage: AngularFireStorageModule,
    private firestore: AngularFirestore,
    private navCtrl:NavController
     ) { }

  ngOnInit() {
  }

  handleFileInput(event: any) {
    this.coverFile = event.target.files[0];
  }

  // async registerBook() {
  //   // Upload the book cover to Firebase Storage
  //   const storageRef = this.afStorage.ref(`book-covers/${this.coverFile.name}`);
  //   await storageRef.put(this.coverFile);

  //   // Get the URL of the uploaded cover
  //   this.book.coverURL = await storageRef.getDownloadURL();

  //   // Add book data to Firestore
  //   this.firestore.collection('books').add(this.book);

  //   // Clear the form
  //   this.book = {
  //     isbn: '',
  //     name: '',
  //     author: '',
  //     description: '',
  //     coverURL: '',
  //   };
  // }
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

    alert("sucess!")
  }

  goBack() {
    this.navCtrl.back(); // Navigate back to the previous page
  }



}
