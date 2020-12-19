import { Component, Input, OnInit, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  constructor() { 
    
  }
  @Input()
  index:any
 
  @Input()
  item = 
  {
    name: '',
    keyWords: [''],
    bidAmount: 0,
    campainFound: 0,
    status: false,
    town: '',
    radius: ''
  }

 
  @Output()
  editingCampain = new EventEmitter()
  
  @Output()
  deleteCampain = new EventEmitter()

  delete = ():void=>{
    this.deleteCampain.emit(this.index)
  }

  edit = ():void =>{
    this.editingCampain.emit([this.item, this.index])
  }

  ngOnInit(): void {
  }

}
