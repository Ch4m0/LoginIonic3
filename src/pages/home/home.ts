import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { LoginPage } from '../login/login'; 

@IonicPage()
@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
})

export class HomePage {

	constructor(private ofauth:AngularFireAuth,  public navCtrl: NavController, public navParams: NavParams) {
	}

	ionViewDidLoad() {
		console.log('ionViewDidLoad HomePage');
	}

	logout(){


		this.ofauth.auth.signOut();

		this.navCtrl.push(LoginPage)

	}

}
