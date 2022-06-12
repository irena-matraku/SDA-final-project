import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Status } from 'src/app/models/enum/status';
import { Task } from 'src/app/models/interfaces/task';
import { Users } from 'src/app/models/interfaces/user';
import { TaskService } from 'src/app/services/task.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-task-create',
  templateUrl: './tasks-create.component.html',
  styleUrls: ['./tasks-create.component.scss'],
})
export class TasksCreateComponent implements OnInit {
  taskId: string | null = null;
  task: Task | null = null;
  users: Users = [];

  name: string = '';
  description: string = '';
  status: Status = Status.TO_BE_DONE;
  userId: string = '';
  categoryName: string = '';
  date: Date = new Date();

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private taskService: TaskService,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.users = this.userService.all();

    this.route.params.subscribe((params) => {
      this.taskId = params['taskId'];
      if (this.taskId && this.taskId !== 'new') {
        this.task = this.taskService.get(Number(this.taskId));

        if (this.task) {
          this.name = this.task.title;
          this.description = this.task.description;
          this.status = this.task.status;
          this.userId = String(this.task.member.id);
          this.categoryName = this.task.category.name;
          this.date = this.task.date;
        }
      }
    });
  }

  handleSave() {
    const selectedUser = this.users.find((u) => u.id === Number(this.userId));
    if (!selectedUser) return;
    
    const newTask: Task = {
      id: Math.max(...this.taskService.all().map((t: any) => t.id))+1, // random ID
      title: this.name,
      description: this.description,
      status: this.status,
      member: selectedUser,
      category: { name: this.categoryName },
      date: this.date,
    };

    if (this.task) {
      this.taskService.update(this.task.id, { ...newTask, id: this.task.id });
    } else {
      this.taskService.create(newTask);
    }

    this.router.navigateByUrl('/tasks');
  }
}
