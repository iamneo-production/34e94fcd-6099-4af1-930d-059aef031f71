import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router} from '@angular/router'
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-institute',
  templateUrl: './update-institute.component.html',
  styleUrls: ['./update-institute.component.css'],
})
export class UpdateInstituteComponent {
  userform:FormGroup;

  constructor(private admission: UserService, private router: Router) {
    const userDataState:any = this.router.getCurrentNavigation()?.extras?.state;
      this.userform = new FormGroup(
        {        
          instituteId:new FormControl(userDataState.userData.instituteId,[Validators.required]),
          instituteName:new FormControl(userDataState.userData.instituteName,[Validators.required]),
          instituteLocation:new FormControl(userDataState.userData.instituteLocation,[Validators.required]),
          phoneNumber:new FormControl(userDataState.userData.phoneNumber,[Validators.required]),
          email:new FormControl(userDataState.userData.email,[Validators.required,Validators.email]),
      });
  }

  getUserFormData(data: any) {
    this.admission.updateInstitute(data.instituteId, data).subscribe((result: any) => {
      console.log(result);
      this.router.navigate(['instituteTwo']);
    });
    Swal.fire('Updated Successfully');
  }
}
