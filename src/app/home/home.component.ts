import { Component, OnInit } from '@angular/core';
import { UserService } from '../user.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  public users=[];

  constructor(private _users:UserService) { }

  ngOnInit(): void {
    this._users.getUsers()
    .subscribe(data=>this.users=data)
    console.log(this.users.length);
  }
  
  onDelete(id:any){
    this._users.deleteUser(id)
    .subscribe()

    location.reload()
  }
}
