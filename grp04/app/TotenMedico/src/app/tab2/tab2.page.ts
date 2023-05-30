import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss']
})
export class Tab2Page {

  items: any[] = [];

  constructor(private http: HttpClient) {}

  ionViewWillEnter(){
    this.getDataFromAPI();
  }

  getDataFromAPI() {
    this.http.get<any>('http://localhost:3000/api/senha').subscribe(data =>{
    console.log(data);
    this.items = data;
    })
  }

}