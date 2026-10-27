export interface Student {
  id: string,
  code : string,
  firstname : string,
  lastname : string ,
  email :string,
  photo:string
}

export interface Payment {
  id : string,
  amount :string,
  type : string,
  status:string,
  date : string,
  file:string,
  student : Student
}

export enum PaymentType{
  CASH, CHECK, TRANSFER, DEPOSIT
}
export enum PaymentStatus {
  CREATED, REJECTED, VALIDATED
}
