import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-course-two',
  templateUrl: './course-two.component.html',
  styleUrls: ['./course-two.component.css']
})
export class CourseTwoComponent {

  course: any;
  constructor(private admission:UserService, private router: Router)
  {
    
  }

  ngOnInit(){
    this.getCourse();
  }

  getCourse(){
    this.admission.getCourse().subscribe((data: any)=>{
      console.log("data",data);
    this.course=data;
    })
  }

  deletecourse(courseId:any){
      console.log(courseId);
      this.admission.deleteCourse(courseId).subscribe((result)=>{
        console.log(result);
        this.getCourse();
      });
  
  }
  updateCourse(data: any){
    this.router.navigate(['updateCourse'],{state:{userData:data}});
  }
}
