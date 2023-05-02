import { Component } from '@angular/core';
import { UserService } from '../service/user.service';
import { Router} from '@angular/router'

@Component({
  selector: 'app-institute-two',
  templateUrl: './institute-two.component.html',
  styleUrls: ['./institute-two.component.css']
})
export class InstituteTwoComponent {

  institute: any;
  constructor(private admission:UserService, private router: Router)
  {
   
  }
ngOnInit(){
this.getUserInstitute();
}
getUserInstitute(){
  this.admission.getUserInstitute().subscribe((data: any)=>{
    console.log("data",data);
  this.institute=data;
  })
}


  deleteinstitute(instituteId:any){
    console.log(instituteId);
    this.admission.deleteInstitute(instituteId).subscribe((result)=>{
      console.log(result);
      this.getUserInstitute();
    });
  }

  updateInstitute(data: any){
    this.router.navigate(['updateInstitute'],{state:{userData:data}});
  }
}
