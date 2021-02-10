import { Component, OnInit } from '@angular/core';
import { DataService } from './data.service';
import { User } from './User'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [DataService]
})
export class AppComponent implements OnInit {
  title = 'angular-my-proj';
  users: User[] | undefined;
  user: User = new User(-1, "test", 1000);
  tableMode: boolean = true;
  headElements: string[] = ["Id", "Name", "Age"];

  constructor(private dataService: DataService) { }

  ngOnInit(): void {
    this.loadUsers();
  }

  loadUsers() {
    this.dataService.getUsers()
      .subscribe(data => this.users = data);
  }

  save() {
    if (this.user)
        this.dataService.createUser(this.user)
          .subscribe(data => this.users?.push(data));
       else {
        this.dataService.updateUser(this.user)
          .subscribe(data => this.loadUsers());
      }

    this.cancel();
  }
  editUser(p: User) {
    this.user = p;
  }
  cancel() {
    this.tableMode = true;
  }
  delete(u: User) {
    if (u)
      this.dataService.deleteUser(u.id)
        .subscribe(data => this.loadUsers());
  }
  add() {
    // this.cancel();
    // this.tableMode = false;
  }
}
