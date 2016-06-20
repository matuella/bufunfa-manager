import {Page} from 'ionic-angular';
import {RegistersPage} from '../registers/registers'

@Page({
  templateUrl: 'build/pages/home/home.html'
})
export class HomePage {
  constructor() {
    this.registers = RegistersPage;
  }
}
