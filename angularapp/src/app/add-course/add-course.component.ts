import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-course',
  templateUrl: './add-course.component.html',
  styleUrls: ['./add-course.component.css']
})
export class AddCourseComponent {
  constructor(private admission:UserService, private router : Router){}
  AddCourseForm=new FormGroup(
    {
      courseId:new FormControl(''),
      courseName:new FormControl(''),
      courseDuration:new FormControl(''),
      courseFees:new FormControl('')
    }
  )

getUserForm()
{
  this.admission.addCourse(this.AddCourseForm.value).subscribe((result)=>{
  console.log(result);
  this.router.navigate(['courseTwo']);
});
// alert("sucessfully");
Swal.fire('Added Successfully');
}
}
