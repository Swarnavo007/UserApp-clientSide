import { Component, OnInit } from '@angular/core';
import { UserData } from '../user-data';
import { UserService } from '../user.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  submitted=false;

  constructor(private _user:UserService) { }

  ngOnInit(): void {
  }

  userModel=new UserData('','','','');
  

  onSubmit(){
    // console.log(this.userModel);
    this._user.postUser(this.userModel)
    .subscribe(
      data=>{
        console.log('Success',data)
        this.submitted=true;
      } ,
      error=>{
        alert('Name or email should not contain number');
        this.submitted=false;
      }
    )
  }

}
