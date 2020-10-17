import { Component, OnInit } from '@angular/core';
import { Home } from '../home/home.model';
import { HomeService } from '../home/home.service';


@Component({
  selector: 'app-admin',
  templateUrl: './admin.page.html',
  styleUrls: ['./admin.page.scss'],
})
export class AdminPage implements OnInit {
  homes : Home[];

  constructor(private homeService : HomeService) { }

  ngOnInit(){
    this.homes = this.homeService.getAllHome();
  }

  add(){
    console.log("tes");
    
  }
}
