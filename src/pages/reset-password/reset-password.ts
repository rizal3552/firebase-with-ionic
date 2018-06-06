import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {AuthProvider} from '../../providers/auth/auth';
import {FormBuilder,FormGroup,Validators} from '@angular/forms';
import {Alert,AlertController} from 'ionic-angular';


@IonicPage()
@Component({
  selector: 'page-reset-password',
  templateUrl: 'reset-password.html',
})
export class ResetPasswordPage {
//global variable 
public resetPasswordForm : FormGroup;


  constructor(public navCtrl: NavController, public navParams: NavParams
  , public authProvider :AuthProvider, public alertCtrl1 : AlertController,
public formBuilder : FormBuilder) {
  //cek validasi form
  this.resetPasswordForm = formBuilder.group(
    {
      email: ["",Validators.compose([Validators.required])
    ]
    }
  );

}

//proses reset pasword
resetPassword():void{

  //cek kevalidan form
if(!this.resetPasswordForm.valid){
  console.log(`form belum valid :${this.resetPasswordForm.value} `);
}else{
  const email : string = this.resetPasswordForm.value.email;
  
  //baca dari firebase
    this.authProvider.resetPassword(email)
    .then(user => { //resolve
        const myAlert : Alert = this.alertCtrl1.create({
          message: 'cek email untuk reset password',
          buttons : [{
            text : 'Yes',
            role: 'cancel',
            handler : () => {
              this.navCtrl.pop();
            }

          }]
        });
        myAlert.present();
    },
    error => {  //reject
        const errorAlert : Alert = this.alertCtrl1.create(
          {
            message : error.message,
            buttons:[
              {
                text:'OK',
                role: 'cancel'
              }
            ]
          }
        );
        errorAlert.present();
    }
  );
   
}

}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ResetPasswordPage');
  }

}
