import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { User } from '../../models/user';
import { RegisterPage } from '../register/register'; 
import { AngularFireAuth } from 'angularfire2/auth';
import { HomePage } from '../home/home';


/**
 * Generated class for the LoginPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
	
	user = {} as User;

  constructor(private ofauth:AngularFireAuth, public navCtrl: NavController, public navParams: NavParams) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }

   async login(user: User){
   	try {

   		const result =  await this.ofauth.auth.signInWithEmailAndPassword(user.email, user.password)

   		console.log(result); 
   	// 	console.log(result.code); 
   	this.navCtrl.setRoot(HomePage)


   
   	}
   	catch (e) {
   		console.log(e);
   		console.log(e.message);
   				var errorCode = e.code;
  		var errorMessage = e.message;
  		alert(errorMessage);

  		// if (errorCode === 'auth/argument-error') {
  		// 	// alert('Falta llenar un campo');
  		// }
  		// if(errorCode == 'auth/invalid-email'){

  		// 	// alert('Introduzca un correo valido');
  		// }
  		// if(errorCode == 'auth/user-not-found'){

  		// 	// alert('Usuario no existe');
  		// }
  		// if(errorCode == 'auth/wrong-password'){

  		// 	// alert('Credenciales invalidas');
  		// }



   	}
  

  }

  register(){
  	this.navCtrl.push('RegisterPage');
  }

}
