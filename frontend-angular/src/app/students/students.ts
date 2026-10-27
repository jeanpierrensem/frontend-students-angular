import {AfterViewInit, Component, Inject, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import { StudentService} from '../services/students';
import {Student} from '../model/student.model';
import {ActivatedRoute, Router} from '@angular/router';


@Component({
  selector: 'app-students',
  standalone: false,
  styleUrl: './students.css',
  templateUrl: './students.html',
})
export class Students implements OnInit, AfterViewInit{
  public  students :any
  public dataSource! : MatTableDataSource<Student>
  public displayedColumns = [
    "id", "firstName", "lastName", "payments"
  ]
  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort : MatSort|undefined
  //private  router = Inject(Router);



  constructor(private router : Router, private studentService : StudentService ) {}

  ngAfterViewInit(): void {
    // The template is rendered here
  }
    ngOnInit(): void {
      // Inputs are available here

     this.studentService.getAllStudents().subscribe( {
       next : value => {
         this.students = value
         this.dataSource = new MatTableDataSource(this.students)
         this.dataSource.paginator = this.paginator
         if(this.sort !=undefined){
           this.dataSource.sort = this.sort
         }
       },
       error : err => { console.log(err)}
       }
     )
   }
  protected filterStudents(event: Event) {
    let val : string = (event.target as HTMLInputElement).value
    this.dataSource.filter = val
  }

  protected gotoPayments(student: Student) {
    this.router.navigateByUrl(`/admin/studentDetails/${student.code}`)
  }
}
