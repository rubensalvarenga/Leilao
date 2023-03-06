import { Component } from '@angular/core';

@Component({
  selector: 'app-ngxvideo',
  template: `
  <youtube-player
    [videoId]="id"
    (ready)="savePlayer($event)"
    (change)="onStateChange($event)"
  ></youtube-player>
`,
  templateUrl: './ngxvideo.component.html',
  styleUrls: ['./ngxvideo.component.scss']
})
export class NgxvideoComponent {


    id = "r7FCkz7k74Y";
    playerVars = {
      cc_lang_pref: "en",
    };
    private player:any;
    public ytEvent:any;

    constructor() {}
    onStateChange(event:any) {
      this.ytEvent = event.data;
    }
    savePlayer(player:any) {
      this.player = player;
    }

    playVideo() {
      this.player.playVideo();
    }

    pauseVideo() {
      this.player.pauseVideo();
    }
  }



