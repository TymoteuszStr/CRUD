import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    this.updateAccountValue()
  }

  editingIntex:number = null;
  
  mainBtnName:string= "Add campaign"
  EmeraldAccount:number

  @Input()
  emeraldAccountStart:number 

  @Input()
  productName:string 

  submitBtnClicked = (e:Data):void =>{
     (this.editingIntex === null)? this.addCampaign(e) : this.editCampaign(e) 
   }
  
   
  updateAccountValue = () =>{
    (this.ListOfCampaign.length === 0)? 
       this.EmeraldAccount = this.emeraldAccountStart 
    :
      this.ListOfCampaign.forEach((item:any)=>{
       this.EmeraldAccount= this.emeraldAccountStart - Number(item.campaignFound)
       })
    
  } 
  addCampaign = (e:any):void =>{
    this.ListOfCampaign.push(e)
    this.updateAccountValue();
  }
  
  editCampaign = (e:any):void => {
      this.ListOfCampaign.splice(this.editingIntex,1,e)
      this.editingIntex = null
      this.mainBtnName="Add campaign"
      this.updateAccountValue();

  }
  deleteCampaign = (e:number):void => {
      this.ListOfCampaign.splice(e,1)
      this.editingIntex = null
      this.updateAccountValue();

  }

  
  setCampaignEditable = (editingCampaign:any):void =>{
    this.CurrentFormInputs = (editingCampaign[0])
    this.editingIntex=editingCampaign[1]
    this.mainBtnName="Edit campaign"
  }

 
  CurrentFormInputs:Data =
  {
    name: null,
    keyWords: null,
    bidAmount: null,
    campaignFound: null,
    status: null,
    town: null,
    radius: null,
  }
  ListOfCampaign = []
 
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