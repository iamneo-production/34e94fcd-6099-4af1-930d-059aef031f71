import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-institute',
  templateUrl: './add-institute.component.html',
  styleUrls: ['./add-institute.component.css'],
})
export class AddInstituteComponent {
  
  // constructor(private admission: UserService) {}
  constructor(private admission: UserService, private router : Router) {}


  getUserFormData(institute: any) {
    this.admission.addInstitute(institute).subscribe((result) => {
      console.log(result);
      this.router.navigate(['instituteTwo']);
    });
    Swal.fire('Added Successfully');
  }

}
