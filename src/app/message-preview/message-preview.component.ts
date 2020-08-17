import { Component, OnInit } from '@angular/core';
import messages from '../messages';

@Component({
  selector: 'app-message-preview',
  templateUrl: './message-preview.component.html',
  styleUrls: ['./message-preview.component.css']
})
export class MessagePreviewComponent implements OnInit {

  messages = [];

  constructor() { }

  ngOnInit() {
    this.messages = messages;
  }

}
