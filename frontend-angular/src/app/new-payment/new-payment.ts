import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
import {ActivatedRoute} from '@angular/router';
import {PaymentType} from '../model/student.model';
import {StudentService} from '../services/students';

@Component({
  selector: 'app-new-payment',
  standalone: false,
  styleUrl: './new-payment.css',
  templateUrl: './new-payment.html',
})
export class NewPayment implements  OnInit{
  public paymentFormGroup! : FormGroup
  public studentCode!: string
  public paymentTypes : Array<string> = []
  private pdfFileUrl!: string;
  constructor(private fb : FormBuilder, private studentService : StudentService, private activatedRoute : ActivatedRoute) {
  }

  ngOnInit(): void {
    for (let elt in  PaymentType){
      let paymentTypeElement: string = PaymentType[elt];
      if (typeof paymentTypeElement==='string'){
        this.paymentTypes.push(paymentTypeElement)
      }
    }
 console.log(this.paymentTypes)
    this.studentCode = this.activatedRoute.snapshot.params['studentCode']
        this.paymentFormGroup = this.fb.group( {
           date : this.fb.control(''),
           amount : this.fb.control(''),
           type : this.fb.control('') ,
           studentCode : this.fb.control(this.studentCode),
           fileSource : this.fb.control(''),
           fileName: this.fb.control('')
        });
    }


  protected selectFile(event: Event) {
    // @ts-ignore
     if(event.target.files.length > 0){
     // @ts-ignore
       let file = event.target.files[0]
     this.paymentFormGroup.patchValue({
       fileSource : file,
       fileName : file.name
     })
   this.pdfFileUrl = window.URL.createObjectURL(file)
   }
  }

  protected savePayment() {
     let formData :  FormData  = new FormData();
     let date = new Date(this.paymentFormGroup.value.date)
     let formattedDate = date.getDate() +'/'+ (date.getMonth()+1)+  '/'+date.getFullYear()
     formData.append('date', formattedDate)
     formData.append('amount', this.paymentFormGroup.value.amount)
     formData.append('type', this.paymentFormGroup.value.type)
     formData.append('studentCode', this.paymentFormGroup.value.studentCode)
     formData.append('file', this.paymentFormGroup.value.fileSource)

    this.studentService.savePayment(formData).subscribe({
      next : value => {
        alert("Payment saved successfully")
      },
      error : err => {
        console.log("error saving the payment")
      }
    })

  }
}
