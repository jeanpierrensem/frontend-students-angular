import {AfterViewInit, Component, OnInit, ViewChild} from '@angular/core';
import {DataSource} from '@angular/cdk/table';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {Router} from '@angular/router';
interface Student {
  id : number,
  firstname : string,
  lastName : string,
}

@Component({
  selector: 'app-students',
  standalone: false,
  styleUrl: './students.css',
  templateUrl: './students.html',
})
export class Students implements OnInit, AfterViewInit{
   public  students : Student[] = []
  public dataSource : any
  public displayedColumns = [
    "id", "firstName", "lastName", "payments"
  ]
  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort : MatSort|undefined

  constructor(private router : Router) {
  }

  ngAfterViewInit(): void {
        this.dataSource.paginator = this.paginator
    if(this.sort !=undefined){
      this.dataSource.sort = this.sort
    }
    }
    ngOnInit(): void {
     let st : Student
     for(let i:number =1; i<100; i++){
         st = {
           id : i, firstname : Math.random().toString(20),
           lastName : Math.random().toString(30)
         }
     this.students.push(st)
     }
     this.dataSource = new MatTableDataSource(this.students)

   }

  protected filterStudents(event: Event) {
    let val : string = (event.target as HTMLInputElement).value
    this.dataSource.filter = val

  }



  protected gotoPayments(student: any) {
    this.router.navigateByUrl("/payments")
  }
}
