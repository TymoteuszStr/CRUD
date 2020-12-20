import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cities } from '../cities'
import { keyWords } from '../keyWords'
import { NgOption } from '@ng-select/ng-select';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor() { }

  cities = [...cities]
  keyWords = [...keyWords]
  status =[
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

  @Output()
  campainAdded = new EventEmitter()

  submit(currentFormInputs:NgForm):void{
    this.campainAdded.emit(currentFormInputs.value)
    console.log(currentFormInputs.value)
  }

  
  selectedKeyWords = [];
  
  onAdd = ($event: any): void => {
    this.form.keyWords.push($event);
    console.log(this.selectedKeyWords);
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