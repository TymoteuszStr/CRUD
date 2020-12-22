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
  isEditing:boolean = false;

  @Input()
  index:any
 
  @Input()
  item = 
  {
    name: null,
    keyWords: null,
    bidAmount: null,
    campaignFound: null,
    status: null,
    town: null,
    radius: null
  }

 
  @Output()
  editingCampaign = new EventEmitter()
  
  @Output()
  deleteCampaign = new EventEmitter()

  delete = ():void=>{
    this.deleteCampaign.emit(this.index)
    this.isEditing=true;
  }

  edit = ():void =>{
    this.editingCampaign.emit([this.item, this.index])
  }

  ngOnInit(): void {
  }

}
