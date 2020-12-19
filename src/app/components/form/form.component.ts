import { Component, Input, OnInit, Output, EventEmitter, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { cities } from '../cities'
import { keyWords } from '../keyWords'
 
@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.scss']
})

export class FormComponent implements OnInit {

  constructor() { }


  cities = [...cities]
  keyWords = [...keyWords]
  @Input()
  form = 
  {
    name: '',
    keyWords: [''],
    bidAmount: 0,
    campainFound: 0,
    status: false,
    town: '',
    radius: '',
  }

  @Output()
  campainAdded = new EventEmitter()

  submit(currentFormInputs:NgForm):void{
    this.campainAdded.emit(currentFormInputs.value)
  }

  // @ViewChild('ngForm', {read: NgForm})
  // ngForm!: NgForm
  // reset = () => { this.ngForm.reset(this.form) }

  ngOnInit(): void {
  }

}
