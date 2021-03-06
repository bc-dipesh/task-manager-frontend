import { Component, OnInit } from '@angular/core';
import { TaskService } from 'src/app/task.service';
import { Router } from '@angular/router';
import { List } from '../../models/list.model';

@Component({
  selector: 'app-new-list',
  templateUrl: './new-list.component.html',
  styleUrls: ['./new-list.component.scss'],
})
export class NewListComponent implements OnInit {
  list: List;

  constructor(private taskService: TaskService, private router: Router) {}

  ngOnInit(): void {}

  createNewList(title: string) {
    this.taskService.createList(title).subscribe((response: any) => {
      this.list = response.data;
      this.router.navigate(['lists', this.list._id]);
    });
  }
}
