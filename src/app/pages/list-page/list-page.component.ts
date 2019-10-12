import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-page',
  templateUrl: './list-page.component.html',
  styleUrls: ['./list-page.component.css']
})
export class ListPageComponent implements OnInit {
	sportPersons: Array<{ id: string, name: string}>;

  constructor() {
  this.populateSportPerson();
   }

  populateSportPerson(){
  	this.sportPersons = [
  		{id:"001",name:"Messi"},
  		{id:"002",name:"Ronaldo"},
  		{id:"003",name:"Kaka"},
  		{id:"004",name:"Mppape"},
  		{id:"005",name:"Nyamar"},
  		{id:"007",name:"Sterling"},
  		{id:"008",name:"salah"},
  		{id:"009",name:"ven diek"},
  		{id:"0010",name:"Saurez"}
  	]
  }

  ngOnInit() {
  }

}
