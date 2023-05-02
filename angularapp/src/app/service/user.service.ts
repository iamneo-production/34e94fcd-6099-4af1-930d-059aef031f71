import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  Create(value: any) {
    throw new Error('Method not implemented.');
  }

  baseUrl = 'http://localhost:8082';

  constructor(private http: HttpClient) {}

  //admin

  public addCourse(course: any) {
    return this.http.post(this.baseUrl + '/admin/addCourse', course, {
      responseType: 'text' as 'json',
    });
  }

  public updateCourse(id: string, course: any) {
    return this.http.put(this.baseUrl + '/admin/updateCourse/' + id, course, {
      responseType: 'text' as 'json',
    });
  }

  public deleteCourse(id: string) {
    return this.http.delete(this.baseUrl + '/admin/deleteCourse/' + id);
  }

  public getAdminInstitute() {
    return this.http.get(this.baseUrl + '/admin/getInstitute');
  }

  public addInstitute(institute: any) {
    return this.http.post(this.baseUrl + '/admin/addInstitute', institute, {
      responseType: 'text' as 'json',
    });
  }

  public updateInstitute(id: string, institute: any) {
    return this.http.put(
      this.baseUrl + '/admin/updateInstitute/' + id,
      institute,
      { responseType: 'text' as 'json' }
    );
  }

  public deleteInstitute(id: string) {
    return this.http.delete(this.baseUrl + '/admin/deleteInstitute/' + id);
  }

  //user
  public adduser(user: any) {
    return this.http.post(this.baseUrl + '/user/register', user, {
      responseType: 'text' as 'json',
    });
  }
  public getUserByEmail(email: string): any {
    return this.http.get(this.baseUrl + '/user/' + email);
  }
  public isUserPresent(user: any) {
    return this.http.post(this.baseUrl + '/user/login', user, {
      responseType: 'text' as 'json',
    });
  }
  public getCourse(): any {
    return this.http.get(this.baseUrl + '/user/getCourse');
  }
  public getUserInstitute(): any {
    return this.http.get(this.baseUrl + '/user/getInstitute');
  }

  public addAdmission(addAdmission: any) {
    return this.http.post(this.baseUrl + '/user/addAdmission', addAdmission, {
      responseType: 'text' as 'json',
    });
  }

  public getAdmission(): any {
    return this.http.get(this.baseUrl + '/user/getAdmission');
  }

  public deleteadmission(id: any) {
    return this.http.delete(this.baseUrl + '/user/deleteAdmission/' +id);
  }
}
