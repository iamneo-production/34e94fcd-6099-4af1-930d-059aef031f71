import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-institute',
  templateUrl: './institute.component.html',
  styleUrls: ['./institute.component.css']
})
export class InstituteComponent {
  users:any;
  constructor(private userdata:UserService){
    userdata.getUserInstitute().subscribe((users:any)=>{
      console.log("users",users);
      this.users=users;
    });
   
  }
}
