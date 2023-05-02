import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';
import { UserPageComponent } from './user-page/user-page.component';
import { AdminPageComponent } from './admin-page/admin-page.component';
import { HomeComponent } from './home/home.component';
import { AdmissionComponent } from './admission/admission.component';
import { CourseComponent } from './course/course.component';
import { InstituteComponent } from './institute/institute.component';
import { LogoutComponent } from './logout/logout.component';
import { ReviewComponent } from './review/review.component';
import { AddCourseComponent } from './add-course/add-course.component';
import { AddInstituteComponent } from './add-institute/add-institute.component';
import { CourseTwoComponent } from './course-two/course-two.component';
import { InstituteTwoComponent } from './institute-two/institute-two.component';
import { UpdateCourseComponent } from './update-course/update-course.component';
import { UpdateInstituteComponent } from './update-institute/update-institute.component';
import { ViewAdmissionComponent } from './view-admission/view-admission.component';
import { NoPageComponent } from './no-page/no-page.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'user',
    pathMatch: 'full',
  },
  {
    path: 'adminPage',
    redirectTo: 'instituteTwo',
    // component:AdminPageComponent,
    pathMatch: 'full',
  },
  {
    path: 'home',
    redirectTo: 'institute',
    // component:HomeComponent,
    pathMatch: 'full',
  },
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'user',
    component: UserComponent,
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'adminPage',
    component: AdminPageComponent,
  },
  {
    path: 'admission',
    component: AdmissionComponent,
  },
  {
    path: 'course',
    component: CourseComponent,
  },
  {
    path:"courseTwo",
    component:CourseTwoComponent
  },
  {
    path:"updateCourse",
    component:UpdateCourseComponent
  },
  {
    path:"updateInstitute",
    component:UpdateInstituteComponent
  },
  {
    path: 'institute',
    component: InstituteComponent,
  },
  {
    path:"instituteTwo",
    component:InstituteTwoComponent
  },
  {
    path:"addInstitute",
    component:AddInstituteComponent
  },
  {
    path: 'logout',
    component: LogoutComponent,
  },
  {
    path: 'review',
    component: ReviewComponent,
  },
  {
    path: 'userPage',
    component: UserPageComponent,
  },
  {
    path:"addCourse",
    component:AddCourseComponent
  },
  {
    path:"viewAdmission",
    component:ViewAdmissionComponent
  },
  {
    path:"**",
    component:NoPageComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
