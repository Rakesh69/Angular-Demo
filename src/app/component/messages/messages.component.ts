import { Component, OnInit } from '@angular/core';
import { MessagesService } from './messages.service';
import { NgForm } from '@angular/forms';


@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  Messages = [];
  SingleMesssge = {
    Heading: null,
  }

  constructor(
    public MessagesService: MessagesService,

  ) { }

  ngOnInit() {
    this.GetMessageList();
  }

  GetMessageList() {
    this.MessagesService.GetMessageList().subscribe((response: any) => {
      if (response.status == "Success") {
        this.Messages = response.message
      }
    }, error => {
    });
  }


  EditMessage(index) {
    this.SingleMesssge = this.Messages[index];
  }
}
