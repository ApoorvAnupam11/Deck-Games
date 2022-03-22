import { Component, OnInit, ViewEncapsulation } from '@angular/core';



@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class TitlePageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
