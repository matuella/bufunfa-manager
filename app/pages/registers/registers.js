import {Page, NavController, Modal} from 'ionic-angular';
import {ModalRegistersPage} from '../modal-registers/modal-registers';
/*
  Generated class for the RegistersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/registers/registers.html',
})
export class RegistersPage {
  static get parameters() {
    return [[NavController]];
  }

  constructor(nav) {
    this.nav = nav;
  }

  insert(){
    let modal = Modal.create(ModalRegistersPage);

    this.nav.present(modal);
  }
}
