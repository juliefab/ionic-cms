import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import { UserProvider } from '../../providers/user/user';
import { User } from '../../models/user';
/**
 * Generated class for the UserViewPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-user-view',
  templateUrl: 'user-view.html',
})

export class UserViewPage {

    user: User;



    constructor(
          private userProvider: UserProvider,
          public navCtrl: NavController,
          public navParams: NavParams
        ) {
        }

  ionViewDidLoad() {
    // console.log('ionViewDidLoad UserViewPage');
      // this.userProvider.getUser();
      const id = this.navParams.data; // id out of parm map
      this.getUser(id);
  }

  getUser(id): void {
    this.userProvider.getUser(id).subscribe(
      (response) => {
        this.user = response.user
      }
    );
  }
  }
