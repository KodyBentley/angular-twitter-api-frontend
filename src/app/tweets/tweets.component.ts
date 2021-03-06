import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-tweets',
  templateUrl: './tweets.component.html',
  styleUrls: ['./tweets.component.css']
})
export class TweetsComponent {

  /**
   * Input declaration
   */
  @Input() imgSrc: string 
  @Input() profileImg: string
  @Input() screenName: string
  @Input()createdAt: string
  @Input() idStr: string

  // Define a time to format our created at time
  time: number;
  constructor() {}

  ngOnInit() {
    this.time = this.formatTime(this.createdAt);
  }

  /**
   * Function to get difference between time of tweet and the time now
   * @param time date string passed from a tweet iteration from data
   */
  formatTime(time: string) {
    let postDate = new Date(time);
    let postHours = postDate.getHours();
    let postHoursStr = postHours.toString();
    let postMinutes = postDate.getMinutes();
    let test = postDate.getTime();
    let finalPostMinutes = Math.floor(test / 60000);

    let timeNow = Date.now();
    let timeNowDate = new Date(timeNow);
    let timeNowHours = timeNowDate.getHours();
    let timeNowMinutes = timeNowDate.getMinutes();
    let finalTimeNowMinutes = Math.floor(timeNow / 60000)

    let difference = finalTimeNowMinutes - finalPostMinutes;
    return difference;
  }

}
