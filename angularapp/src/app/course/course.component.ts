import { Component } from '@angular/core';
import { UserService } from '../service/user.service';

@Component({
  selector: 'app-course',
  templateUrl: './course.component.html',
  styleUrls: ['./course.component.css']
})
export class CourseComponent {
  data:any
  courses:any
  constructor(private userdata:UserService){
    userdata.getCourse().subscribe((courses:any)=>{
      console.log("courses",courses);
      this.courses=courses;
    });
}
}
