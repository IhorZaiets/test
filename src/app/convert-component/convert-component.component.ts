import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-convert-component',
  templateUrl: './convert-component.component.html',
  styleUrls: ['./convert-component.component.css']
})
export class ConvertComponentComponent implements OnInit {

  constructor() { }

  @Input() currensies:any;
  leftInputValue = 0;
  rightInputValue = 0;

  leftDropdownValue = 1;
  rightDropdownValue = 1;

  leftInputHandler(event:any){
    this.rightInputValue = event.target.value * this.leftDropdownValue / this.rightDropdownValue;    
    this.leftInputValue = event.target.value;
  }
  
  rightInputHandler(event:any){
    this.rightInputValue = event.target.value;
    this.leftInputValue = event.target.value * this.rightDropdownValue / this.leftDropdownValue;    
    
  }
  


  leftDropdownChange(event:any){
    this.leftDropdownValue = event.target.value;
    this.leftInputValue = this.rightInputValue *  this.rightDropdownValue / event.target.value;
     
  }

  rightDropdownChange(event:any){
    this.rightDropdownValue = event.target.value;
    this.rightInputValue = this.leftInputValue * this.leftDropdownValue / event.target.value;    
  }


  
  ngOnInit(): void {
  }

}
