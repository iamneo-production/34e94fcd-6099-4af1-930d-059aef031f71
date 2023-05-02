import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { UserComponent } from './user/user.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { LoginComponent } from './login/login.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { AdmissionComponent } from './admission/admission.component';
import { CourseComponent } from './course/course.component';
import { HomeComponent } from './home/home.component';
import { InstituteComponent } from './institute/institute.component';
import { LogoutComponent } from './logout/logout.component';
import { ReviewComponent } from './review/review.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddInstituteComponent } from './add-institute/add-institute.component';
import { CourseTwoComponent } from './course-two/course-two.component';
import { InstituteTwoComponent } from './institute-two/institute-two.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateInstituteComponent } from './update-institute/update-institute.component';
import { UserService } from './service/user.service';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { NoPageComponent } from './no-page/no-page.component';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    LoginComponent,
    UserPageComponent,
    AdminPageComponent,
    AdmissionComponent,
    CourseComponent,
    HomeComponent,
    InstituteComponent,
    LogoutComponent,
    ReviewComponent,
    AddCourseComponent,
    AddInstituteComponent,
    CourseTwoComponent,
    InstituteTwoComponent,
    UpdateCourseComponent,
    UpdateInstituteComponent,
    ViewAdmissionComponent,
    NoPageComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    ReactiveFormsModule,
    HttpClientModule,
    FormsModule
     ],
  providers: [UserService],
  bootstrap: [AppComponent]
})
export class AppModule { }
