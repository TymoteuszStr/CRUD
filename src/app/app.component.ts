import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  title = 'CRUD';
  editingIntex:any = null;

  
  
  addCampain = (e:any):void =>{
    this.ListOfCampain.push(e)
  }
  

  editCampain = (e:any) => {
      this.ListOfCampain.splice(this.editingIntex,1,e)
      this.editingIntex = null
  }
  deleteCampain = (e:any) => {
      this.ListOfCampain.splice(e,1)
      this.editingIntex = null
  }

  submitBtnClicked = (e:any):void =>{
    (this.editingIntex === null)? this.addCampain(e) : this.editCampain(e) 
  }
  
  setCampainEditable = (editingCampain:any) =>{
    this.CurrentFormInputs = (editingCampain[0])
    this.editingIntex=editingCampain[1]
  }

  CurrentFormInputs =
  {
    name: '',
    keyWords: [''],
    bidAmount: '',
    campainFound: '',
    status: false,
    town: '',
    radius: '',
  }

  
  ListOfCampain = [
      {
        name: 'Tymek',
        keyWords: ['lol','lol2'],
        bidAmount:'',
        campainFound: '',
        status: false,
        town: 'Jaworzno',
        radius: '10000',
      },
      {
        name: 'Basia',
        keyWords: ['rolf','rolf2'],
        bidAmount:  124,
        campainFound: 234353453,
        status: true,
        town: 'Krakow',
        radius: '12'
     }
    ]
 
}

// interface Data {
//   name: string,
//   keyWords: string[],
//   bidAmount:string ,
//   campainFound: string
//   status: boolean,
//   town?: string,
//   radius: string,
// }