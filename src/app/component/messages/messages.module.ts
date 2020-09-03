import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { CKEditorModule } from 'ckeditor4-angular';

import { MessagesRoutingModule } from './messages-routing.module';
import { MessagesComponent } from '../messages/messages.component';


@NgModule({
  declarations: [MessagesComponent],
  imports: [
    CommonModule,
    MessagesRoutingModule,
    FormsModule,
    CKEditorModule
  ]
})
export class MessagesModule { }
