import { Component, OnInit } from '@angular/core';
import { AudioService } from './services/audio.service';
import { CloudService } from './services/cloud.service';
import { AuthService } from './services/auth.service';
import { StreamState } from './interfaces/stream-state';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  files: Array<any> = [];
  state: StreamState;
  currentFile: any = {};
  constructor(private audioService: AudioService, cloudService: CloudService, public auth: AuthService) {
    // handle authentication
    auth.handleAuthentication();

    // get media files
    cloudService.getFiles().subscribe(files => {
      this.files = files;
    });

    // listen to stream state
    this.audioService.getState()
    .subscribe(state => {
      this.state = state;
    });
  }

  ngOnInit() {
    if (this.auth.isAuthenticated()) {
      this.auth.renewTokens();
    }
  }

  playStream(url) {
    this.audioService.playStream(url)
    .subscribe(events => {
      // listening for fun here
    });
  }

  play() {
    this.audioService.play();
  }

  pause() {
    this.audioService.pause();
  }

  stop() {
    this.audioService.stop();
  }

  openFile(file, index) {
    this.currentFile = { index, file };
    this.audioService.stop();
    this.playStream(file.url);
  }

  next() {
    const index = this.currentFile.index + 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  previous() {
    const index = this.currentFile.index - 1;
    const file = this.files[index];
    this.openFile(file, index);
  }

  isFirstPlaying() {
    return this.currentFile.index === 0;
  }

  isLastPlaying() {
    return this.currentFile.index === this.files.length - 1;
  }

  onSliderChangeEnd(change) {
    this.audioService.seekTo(change.value);
  }
}
