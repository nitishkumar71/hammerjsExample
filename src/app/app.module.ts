import { NgModule, ErrorHandler } from '@angular/core';
import { HammerGestureConfig, HAMMER_GESTURE_CONFIG } from '@angular/platform-browser';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import 'hammerjs';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { RotateCustomeDirective } from '../directives/rotate-custom-directive'

export class CustomHammerConfig extends HammerGestureConfig {
  overrides = {
    'rotate': { enable: true } //rotate is disabled by default, so we need to enable it
  }
}

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    RotateCustomeDirective
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage
  ],
  providers: [{
    provide: ErrorHandler,
    useClass: IonicErrorHandler,
  }, {
    provide: HAMMER_GESTURE_CONFIG,
    useClass: CustomHammerConfig
  }]
})
export class AppModule { }
