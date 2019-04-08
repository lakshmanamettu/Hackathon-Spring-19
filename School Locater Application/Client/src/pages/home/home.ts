import { Component,ViewChild } from '@angular/core';
import { NavController } from 'ionic-angular';
import { HttpClient } from '@angular/common/http';
import * as alasql from 'alasql';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  @ViewChild('categorysearch') searchtxt;
  @ViewChild('ratings') rating;
  public url:string
  public results: Array<{}>

  tabBarElement: any;
  splash = true;
  count=1;


  constructor(public navCtrl: NavController, public http: HttpClient) {
    this.tabBarElement = document.querySelector('.tabbar');
  }

  ionViewDidLoad() {
    this.tabBarElement.style.display = 'none';
    setTimeout(() => {
      this.splash = false;
      this.tabBarElement.style.display = 'flex';
    }, 4000);
  }

  search(){
      console.log(this.searchtxt.value);
      this.url = 'https://api.mlab.com/api/1/databases/hackaroo/collections/gamedata?apiKey=2jkY2cQ4fkSQ72fiQ_RDts_gztuVCYvC';
      this.http.get(this.url).subscribe(
        (res:any)=>{
          console.log(res);
          console.log(this.searchtxt.value);
          var filter=alasql('SELECT * from ? as t1 where t1.category LIKE "%'+this.searchtxt.value+'%"',[res]);
          console.log(filter);
          this.results = filter;
          console.log(this.results);
          // this.results.push(filter);
          // console.log(this.results);
        }
      );
    }

}
