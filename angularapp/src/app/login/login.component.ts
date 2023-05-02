import { Component, OnInit } from '@angular/core';
import {
  AbstractControl,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { UserService } from '../service/user.service';
import { UserLogin } from '../userLogin';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
})
export class LoginComponent implements OnInit {
  user: UserLogin = new UserLogin('', '', 0, '', '');
  message: any;
  constructor(private service: UserService) {}
  ngOnInit(): void {}
  public registerNow() {
    let resp = this.service.adduser(this.loginForm.value);
    resp.subscribe((data: any) => {
      this.message = data;
    });
  }
  inteRegx = /^\d+$/;
  loginForm = new FormGroup({
    role: new FormControl('', [Validators.required]),
    email: new FormControl('', [Validators.required, Validators.maxLength(32)]),
    username: new FormControl('', [Validators.required]),
    mobileNumber: new FormControl('', [
      Validators.required,
      Validators.minLength(10),
      Validators.maxLength(10),
      Validators.pattern(this.inteRegx),
    ]),
    password: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ]),
    cnfPassword: new FormControl('', [
      Validators.required,
      Validators.minLength(8),
      Validators.maxLength(32),
    ]),
  });
  loginUser() {
    console.log(this.loginForm.value);
    
  }
  getControl(name: any): AbstractControl | null {
    return this.loginForm.get(name);
  }
  // get email() {
  //   return this.loginForm.get('email');
  // }
  // get password() {
  //   return this.loginForm.get('password');
  // }
}
