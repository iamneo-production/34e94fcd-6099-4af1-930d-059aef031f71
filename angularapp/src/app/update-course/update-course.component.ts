import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-course',
  templateUrl: './update-course.component.html',
  styleUrls: ['./update-course.component.css']
})
export class UpdateCourseComponent {
  userform:FormGroup;

  constructor(private admission: UserService, private router: Router) {
    const userDataState:any = this.router.getCurrentNavigation()?.extras?.state;
      this.userform = new FormGroup(
        {        
          courseId:new FormControl(userDataState.userData.courseId,[Validators.required]),
          courseName:new FormControl(userDataState.userData.courseName,[Validators.required]),
          courseDuration:new FormControl(userDataState.userData.courseDuration,[Validators.required]),
          courseFees:new FormControl(userDataState.userData.courseFees,[Validators.required]),
      });
  }
 
  getUserFormData(data:any)
  {
    this.admission.updateCourse(data.courseId, data).subscribe((result: any)=>{
      console.log(result);
      this.router.navigate(['courseTwo']);
    });
    Swal.fire('Updated Successfully');
  }
}
