import {Component, OnInit, ViewChild} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';

@Component({
  selector: 'app-payments',
  standalone: false,
  styleUrl: './payments.css',
  templateUrl: './payments.html',
})
export class Payments implements  OnInit{
  public payments! : any
  public dataSource : any
  public displayedColumns = ['id', 'date','amount', 'status', 'type', 'firstname']
  @ViewChild(MatPaginator) paginator! : MatPaginator
  @ViewChild(MatSort) sort! : MatSort
  constructor(private httpClient : HttpClient) {}

    ngOnInit(): void {

    this.httpClient.get("http://localhost:8787/payments").subscribe({
      next : value => {
         this.payments = value
         this.dataSource = new MatTableDataSource(this.payments)
         this.dataSource.paginator  = this.paginator
        this.dataSource.sort = this.sort
      },
       error : err => {
        console.log(err)
       }
      }
    )
    }
  protected filterPayments(event: Event) {
    let value: String = (event.target as HTMLInputElement).value
    this.dataSource.filter = value
  }
}
