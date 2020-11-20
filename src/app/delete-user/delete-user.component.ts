import { Component, OnInit } from '@angular/core';
import { UpdateUser } from '../update-user';
import { UserService } from '../user.service';


@Component({
  selector: 'app-delete-user',
  templateUrl: './delete-user.component.html',
  styleUrls: ['./delete-user.component.css']
})
export class DeleteUserComponent implements OnInit {

  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }

  info=new UpdateUser('');


  deleteUser(id:any){
    this._user.deleteUser(id)
          .subscribe()
    console.log(id);
  }

  updateUser(id:any,email:string){
    this.info=new UpdateUser(email);
    this._user.updateUser(id,this.info)
          .subscribe()
    console.log(id+this.info);
  }

}
