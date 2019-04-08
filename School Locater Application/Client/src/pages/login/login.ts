import { Component,ViewChild  } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {RegisterPage} from '../register/register'
import {TabsPage} from '../tabs/tabs'

@IonicPage()
@Component({
  selector: 'page-login',
  templateUrl: 'login.html',
})
export class LoginPage {
  @ViewChild('username') uname;
  @ViewChild('password') pwd;
  public url:string;
  public i:number;
  constructor(public navCtrl: NavController, public navParams: NavParams,public http: HttpClient) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }
  signIn(){
    var validate = true

    if(this.uname.value == "" || this.pwd.value == ""){
      alert("Please enter the credentials")
      validate= false
    }
    if (validate == true){
      console.log(this.uname.value);
      this.url = 'http://127.0.0.1:3000/user/fetch?userName='+this.uname.value;
      this.http.get(this.url).subscribe(
        (res:any)=>{
          console.log(res);
          console.log("length is"+res.data.length);
          if(res.data.length != 0) {
            for (this.i = 0; this.i < res.data.length; this.i++) {
              if (res.data[this.i].password == this.pwd.value) {
                console.log("matched");
                this.navCtrl.push(TabsPage);
              }
              else {
                alert("Password is Incorrect Please Enter Valid Password");
              }
            }
          }else{
            console.log("Username is Not Avaliable");
            alert("UserName is Not Available");
          }
        }
      );
      }
    }
  register(){
    this.navCtrl.push(RegisterPage)

  }
  }
