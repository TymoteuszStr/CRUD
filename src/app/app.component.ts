import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CRUD';
  editingIntex:number = null;

  
  
  addCampain = (e:any):void =>{
    this.ListOfCampain.push(e)
  }
  

  editCampain = (e:any):void => {
      this.ListOfCampain.splice(this.editingIntex,1,e)
      this.editingIntex = null
  }
  deleteCampain = (e:number):void => {
      this.ListOfCampain.splice(e,1)
      this.editingIntex = null
  }

  submitBtnClicked = (e:Data):void =>{
    (this.editingIntex === null)? this.addCampain(e) : this.editCampain(e) 
  }
  
  setCampainEditable = (editingCampain:any):void =>{
    this.CurrentFormInputs = (editingCampain[0])
    this.editingIntex=editingCampain[1]
  }

  CurrentFormInputs:Data =
  {
    name: null,
    keyWords: null,
    bidAmount: null,
    campainFound: null,
    status: null,
    town: null,
    radius: null,
  }
  ListOfCampain = [
  ]
 
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