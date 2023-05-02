import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-admission',
  templateUrl: './admission.component.html',
  styleUrls: ['./admission.component.css']
})
export class AdmissionComponent {
  AddmissionForm= new FormGroup(
    {
    
    studentName:new FormControl(''),
    phoneNumber:new FormControl(''),
    email:new FormControl('',[Validators.required,Validators.email]),
    age:new FormControl(''),
    gender:new FormControl(''),
    instituteName:new FormControl('',[Validators.required]),
    courseName:new FormControl('',[Validators.required]),
  
   }
   )
   constructor(private admission:UserService)
  {}
   ngOnInit(){

   }

   admissionUser(){
    console.log(this.AddmissionForm.value);
   
    this.admission.addAdmission(this.AddmissionForm.value).subscribe(data=>{
      // alert("your enrolled sucessfully"); 
      Swal.fire('Enrolled Successfully');
      console.log(data);
    })                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                     
   }
  get StudentName(){
    return this.AddmissionForm.get('studentName');
  }
  get phoneNumber(){
    return this.AddmissionForm.get('phoneNumber');
  }
  get email(){
    return this.AddmissionForm.get('email');
  }
  get Age(){
    return this.AddmissionForm.get('age');
  }
  get Gender(){
    return this.AddmissionForm.get('gender');
  }
  get InstituteName(){
    return this.AddmissionForm.get('instituteName');
  }
  get CourseName(){
    return this.AddmissionForm.get('courseName');
  }
}
