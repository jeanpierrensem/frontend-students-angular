import {Component, OnInit, signal} from '@angular/core';
import {StudentService} from '../services/students';
import {Payment} from '../model/student.model';
import {ActivatedRoute} from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-student-details',
  standalone: false,
  styleUrl: './student-details.css',
  templateUrl: './student-details.html',
})
export class StudentDetails implements OnInit{
  private payments! : Array<Payment>
  public paymentsDatasource = signal(new MatTableDataSource<Payment>([]) )
  public displayedColumns: string[] = ['id', 'date','amount', 'type' , 'status',  'firstname']
  private studentCode! : string

  constructor(private studentService : StudentService, private activatedRoute: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.studentCode = this.activatedRoute.snapshot.params['code']

    this.studentService.getStudentPayments(this.studentCode).subscribe({
      next : value => {
        this.payments = value
        this.paymentsDatasource.set(new MatTableDataSource(this.payments))
      },
      error : err => {console.log(err)}
    });

  }

  //protected readonly parent = parent;
}

