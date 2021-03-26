import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent implements OnInit {
  public name = "Namitha"
  public greeting = '';
  @Input() public parentData;
  constructor() { }

  ngOnInit(): void {
  }
 
  onclick(event){
    console.log(event)
    this.greeting = 'Welcom To CODE'
  }
}
