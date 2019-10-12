import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import {Observable} from 'rxjs';
import {map} from 'rxjs/operators';
import { switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-player-profile',
  templateUrl: './player-profile.component.html',
  styleUrls: ['./player-profile.component.css']
})
export class PlayerProfileComponent implements OnInit {

	sportPersonProfile: Array<{ 
		id: string, 
		firstName: string, 
		middleName: string, 
		lastName: string, 
		placeOfBirth: string, 
		age: string, 
		currentTeam: string,
		imgUrl: any
		}>;

		currentProfile:any;
		lastName: any;

  constructor(private route: ActivatedRoute) { 
  	this.populateSportPersonProfile();
  	console.log(this.route.paramMap)
  	this.route.paramMap.subscribe(
  		(params: any) => {
  			this.lastName = params.get('lastName');
  			
  			//return this.sportPersonProfile[0];
  			this.currentProfile =  this.sportPersonProfile.filter(player => player.lastName === this.lastName)[0];
  		});

  	// this.currentProfile = this.sportPersonProfile[0];
  }

  populateSportPersonProfile(){
  	this.sportPersonProfile = [
  	{
  		id: "001", 
		firstName: "Lionel", 
		middleName: "Andrés", 
		lastName: "Messi", 
		placeOfBirth: "Rosario, Argentina", 
		age: "32", 
		currentTeam: "Barcelona",
		imgUrl: "./assets/profileImg/messi.jpg"
  	}
  	];
  }

  ngOnInit() {
  }

}
