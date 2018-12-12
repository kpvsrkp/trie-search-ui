import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpModule } from '@angular/http';
import {Http, Headers, RequestOptions} from '@angular/http';

/*
  Generated class for the DataServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class DataServiceProvider {

  constructor(private http:Http) {
    console.log('Hello DataServiceProvider Provider');
  }
  
  public getSuggestions(query : any) : any{
	console.log('getting suggestions for '+query);
	let suggestionReq = {keyword:query};
	return this.http.post("http://localhost:8080/trieds/search/get",suggestionReq)
	.toPromise()
    .then((res) => {
		console.log('response '+JSON.stringify(res));
		let res_body = res.json();
		console.log('res_body '+JSON.stringify(res_body));
		return res_body;
	})
    .catch((err)=>{
		console.log('err response '+JSON.stringify(err));
		return err;
	});
	
  }

}
