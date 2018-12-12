import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import {DataServiceProvider} from '../../providers/data-service/data-service';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

	query : any;
	words: any = [];

  constructor(public navCtrl: NavController, public dataService: DataServiceProvider) {

  }
  
  public searchPlace(){
	console.log('query '+this.query);
	this.words = [];
	if(this.query.length > 0){
	
		this.dataService.getSuggestions(this.query)
		.then(results => {
			this.words = results.matchedWords;
		});
	
	/*this.words.push("test1");
	this.words.push("test2");
	this.words.push("test3");*/
	}
  }

}
