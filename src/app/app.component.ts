import { Component, OnInit, ViewChild } from '@angular/core';
import * as PIXI from 'pixi.js'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})



export class AppComponent implements OnInit {
  private app: PIXI.Application = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight
  });

  ngOnInit(): void {
    document.body.appendChild(this.app.view);
  }


}
