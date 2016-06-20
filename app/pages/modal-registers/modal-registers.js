import {Page, NavController, ViewController} from 'ionic-angular';

/*
  Generated class for the ModalRegistersPage page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Page({
  templateUrl: 'build/pages/modal-registers/modal-registers.html',
})
export class ModalRegistersPage {
  static get parameters() {
    return [[NavController], [ViewController]];
  }

  constructor(nav, view) {
    this.nav = nav;
    this.view = view;
  }

  cancel(){
    this.view.dismiss();
  }
}
