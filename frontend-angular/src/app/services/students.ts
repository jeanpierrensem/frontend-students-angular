import {inject, Service} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {environment} from '../../environments/environment';
import {Payment, Student} from '../model/student.model';

@Service()
export class StudentService {
 private httpClient  = inject(HttpClient)

  public getAllPayments() : Observable<Array<Payment>>{
    return this.httpClient.get<Array<Payment>>(`${environment.backendHost}/payments`)
  }

  public getAllStudents() : Observable<Array<Student>>{
   return this.httpClient.get<Array<Student>>(`${environment.backendHost}/students`)
  }

  public getStudentPayments(code:string) : Observable<Array<Payment>>{
   return this.httpClient.get<Array<Payment>>(`${environment.backendHost}/students/${code}/payments`)
  }
}
