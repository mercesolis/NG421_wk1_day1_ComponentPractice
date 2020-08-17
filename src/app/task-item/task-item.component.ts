import { Component, OnInit } from '@angular/core';
import tasks from '../tasks';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {

  tasks = [];

  constructor() { 
    this.tasks = tasks;
  }

  ngOnInit() {
  }

}
