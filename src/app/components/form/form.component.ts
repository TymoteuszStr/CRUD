import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cities } from '../cities'
import { keyWords } from '../keyWords'
import { NgOption } from '@ng-select/ng-select';
import { fakeAsync } from '@angular/core/testing';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor() { }

  cities = [...cities]
  keyWords = [...keyWords]
  Status =[
    'ON',
    'OFF'
  ]
  @Input()
  form:Data = 
  {
    name: null,
    keyWords: null,
    bidAmount: null,
    campainFound: null,
    status: null,
    town: null,
    radius: null
  }

  @ViewChild('ngForm', {read: NgForm})
  ngForm!: NgForm;

  isFormValid = (f:any):boolean => 
    (f.name && f.keyWords && f.bidAmount && f.campainFound && f.status && f.radius)

  @Output()
  campainAdded = new EventEmitter()

  resetForm = () => {
   this.ngForm.onReset();
  }

  showErrMsg:boolean=false;

  submit(currentFormInputs:NgForm):void{
    if(this.isFormValid(this.form)){  
      this.campainAdded.emit(currentFormInputs.value)
      this.resetForm();
      this.showErrMsg=false;
    }
    else this.showErrMsg=true;
  }

  ngOnInit(): void {
  }

}
interface Data {
  name: string,
  keyWords: string[],
  bidAmount:string ,
  campainFound: string
  status: boolean,
  town?: string,
  radius: string,
}