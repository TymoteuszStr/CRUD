import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent{
  
  title = 'CRUD';

  activeProduct=0;

  modalVisible=false
  newProductName=''
  newAccountVal:number =null

  changeProduct=(nr:number)=>{
    this.activeProduct=nr;
  }

  openModal(){
    this.modalVisible=true
  }
  closeModal = ()=>{
    this.modalVisible=false
  }

  addProduct = () =>{
    this.ListOfProduct.push({
      name: this.newProductName,
      account: this.newAccountVal,
    })
    this.closeModal()
    this.changeProduct(this.ListOfProduct.length-1)
  }

  deleteProduct = (e) =>{
    this.ListOfProduct.splice(e,1)
    this.changeProduct(this.ListOfProduct.length-1)
  }

  ListOfProduct = [
    {
      name:'Product 1',
      account: 10000000,
    },    
  ]

}
