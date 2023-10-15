import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-session',
  templateUrl: './session.page.html',
  styleUrls: ['./session.page.scss'],
})
export class SessionPage implements OnInit {
  elapsedTime: number = 0;
  stopwatchRunning: boolean = false;
  stopwatchInterval: any;

  constructor() { }

  ngOnInit() {
  }

  ionViewDidEnter(){
    this.startStopwatch()
  }
  startStopwatch() {
    this.stopwatchRunning = true;
    this.stopwatchInterval = setInterval(() => {
      this.elapsedTime += 1000;
    }, 1000);
  }

  stopStopwatch() {
    clearInterval(this.stopwatchInterval);
    this.stopwatchRunning = false;
  }

  resetStopwatch() {
    clearInterval(this.stopwatchInterval);
    this.stopwatchRunning = false;
    this.elapsedTime = 0;
  }

  formatTime(time: number): string {
    const hours = Math.floor(time / 3600000);
    const minutes = Math.floor((time % 3600000) / 60000);
    const seconds = Math.floor((time % 60000) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  }
  

}
