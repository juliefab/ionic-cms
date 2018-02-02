import { Component } from '@angular/core';
//1. Import LoadingController
import { IonicPage, NavController, NavParams, LoadingController } from 'ionic-angular';

import { UserViewPage } from '../user-view/user-view';

import { UserProvider } from '../../providers/user/user';

import { User } from '../../models/user';

/**
 * Generated class for the UsersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-users',
  templateUrl: 'users.html',
})
export class UsersPage {
  // public toUserView: UserViewPage;
  pushPage:any;
  public users: User;
  //2. Create a space in memory to hold a loader
  private loader: any;

  constructor(
    public navCtrl: NavController,
    public navParams: NavParams,
    private userProvider: UserProvider,
    //3. Inject the LoadingController
    public loadingCtrl: LoadingController
  ) {
    //4. Build and display a loader on instaniation
    this.loader = this.loadingCtrl.create({
      content: 'Loading...',
    });

    this.loader.present();

    this.pushPage = UserViewPage;
  }

  public ionViewDidLoad() {
    this.getUsers();
    // this.userProvider.getUser();
    // this.userProvider.editUser();
    // this.userProvider.createUser();
    // this.userProvider.deleteUser();
  }


  public getUsers(): void {
    this.userProvider.getUsers().subscribe(
      (response:any) => {
        this.users = response.users,
        console.log(this.users),
        //5. Dismiss the loader after the Http Request has completed
        this.loader.dismiss()
      }
    );
  }

}
