import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-view-admission',
  templateUrl: './view-admission.component.html',
  styleUrls: ['./view-admission.component.css']
})
export class ViewAdmissionComponent {

  view: any;
  constructor(private admission:UserService, private router: Router)
  {
    
  }

  ngOnInit(){
    this.getAdmission();
  }

  getAdmission(){
    this.admission.getAdmission().subscribe((data: any)=>{
      console.log("data",data);
    this.view=data;
    })
  }

  deleteadmission(Id:any){
    
      console.log(Id);
      this.admission.deleteadmission(Id).subscribe((result:any)=>{
        console.log(result);
        this.getAdmission();
      });

}
}
