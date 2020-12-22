import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cities } from '../cities'
import { keyWords } from '../keyWords'
import { NgOption } from '@ng-select/ng-select';
import { fakeAsync } from '@angular/core/testing';
import { findLast } from '@angular/compiler/src/directive_resolver';

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
  BtnName:string

  @Input()
  form:Data = 
  {
    name: null,
    keyWords: null,
    bidAmount: null,
    campaignFound: null,
    status: null,
    town: null,
    radius: null
  }

  @ViewChild('ngForm', {read: NgForm})
  ngForm!: NgForm;

  isFormValid = (f:any):boolean => 
    (f.name && f.keyWords && f.bidAmount && f.campaignFound && f.status && f.radius)

  @Output()
  campaignAdded = new EventEmitter()

  resetForm = ():void => {
   this.ngForm.onReset();
  }

  showErrMsg:boolean=false;

  submit(currentFormInputs:NgForm):void{
    if(this.isFormValid(this.form)){  
      this.campaignAdded.emit(currentFormInputs.value)
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
  campaignFound: string
  status: string,
  town?: string,
  radius: string,
}