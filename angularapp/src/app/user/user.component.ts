import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { UserService } from '../service/user.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css'],
})
export class UserComponent {
  userForm = new FormGroup({
    email: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required]),
  });
  message: any;
  errormessage: any;

  constructor(private service: UserService, private router: Router) {}
  ngOnInit(): void {}
  public LoginNow() {
    let resp = this.service.isUserPresent(this.userForm.value);
    resp.subscribe((data) => {
      this.message = data;
      console.log(this.message);
      if(data=="true"){

      
      this.service.getUserByEmail(this.userForm.value.email?this.userForm.value.email:"").subscribe((res:any)=>{
        if (
         res.role=='admin'
        ) {
          console.log('Admin page loggin succesfully');
          this.router.navigate(['./adminPage']);
        } else if (this.message == 'true') {
          console.log('userpage login successfully');
          this.router.navigate(['./home']);
        } 
      })
    } else{
      alert("wrong credentials");
    }
     
    });
  }

  userSubmit() {
    console.log(this.userForm.value);
  }
  get email() {
    return this.userForm.get('email');
  }
  get password() {
    return this.userForm.get('password');
  }
}
