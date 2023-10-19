import { Component, OnInit } from '@angular/core';

// import firebase libraries
import { AngularFireStorageModule } from '@angular/fire/compat/storage';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Component({
  selector: 'app-lights',
  templateUrl: './lights.page.html',
  styleUrls: ['./lights.page.scss'],
})

export class LightsPage implements OnInit {
  
  constructor(
    private afStorage: AngularFireStorageModule,
    private firestore: AngularFirestore,
  ) { }

  light = {
    state: true
  }
  async toggleLightStatus(){
    // to update data in firebase
    this.firestore.collection('light').doc('lightState').update(this.light);


  }
  // toggleLightStatus(lightsId: string){

  //   this.firebaseService.updateLightStatus(lightId, newStatus)
  // }
  ngOnInit() {
  }

}
