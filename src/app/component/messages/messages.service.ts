import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions, RequestMethod } from '@angular/http';
import { HttpClient, HttpHeaders, HttpRequest } from '@angular/common/http';
import { map } from "rxjs/operators";
import { urlConstant } from "../../../constant/urlConstant";


@Injectable({
  providedIn: 'root'
})
export class MessagesService {

  constructor( public http: HttpClient) { }


  GetMessageList() {
    return this.http.get(urlConstant.Messages.GetList)
      .pipe(map((x: Response) => x));
  }
}
