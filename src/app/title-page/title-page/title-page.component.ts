import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js'


@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  private app: PIXI.Application = new PIXI.Application({
    width: window.innerWidth,
    height: window.innerHeight
  });

  constructor() { }

  ngOnInit(): void {
    this.app.renderer.backgroundColor = 0x040A42;

    document.body.appendChild(this.app.view);
  }

}
