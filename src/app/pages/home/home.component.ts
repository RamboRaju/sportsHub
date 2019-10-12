import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

	 sports: Array<{ id: string, name: string, imgurl: any}>;



  constructor() { 
  	this.populateSports();
  }

  populateSports() {
  	this.sports = [
  	{id: "001", name: "Football", imgurl: "./assets/imgs/sports/football.jpg"},
  	{id: "002", name: "Cricket", imgurl: "./assets/imgs/sports/football.jpg"},
  	{id: "003", name: "Hockey", imgurl: "./assets/imgs/sports/football.jpg"},
  	{id: "004", name: "Tennis", imgurl: "./assets/imgs/sports/football.jpg"},
  	{id: "005", name: "Basketball", imgurl: "./assets/imgs/sports/football.jpg"},
  	{id: "006", name: "Bollyball", imgurl: "./assets/imgs/sports/football.jpg"},
  	{id: "007", name: "Rugby", imgurl: "./assets/imgs/sports/football.jpg"}
      
    ];
  }

  ngOnInit() {
  }

}
