import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AudioService } from './services/audio.service';
import { CloudService } from './services/cloud.service';
import { AuthService } from './services/auth.service';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
  ],
  providers: [
    AudioService,
    CloudService,
    AuthService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
