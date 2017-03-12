import { Component } from '@angular/core';

import { NavController} from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  angle: Number;
  transformStyle: String;
  title = 'Rotate Me!';

  constructor(public navCtrl: NavController) {
    // set default angle to 0deg
    this.angle=0;
    this.transformStyle="rotate(0deg)"; 
  }

  onRotation(event: any): void {
    this.angle=event.angle;
    this.transformStyle="rotate("+this.angle+"deg)";
  }

}
