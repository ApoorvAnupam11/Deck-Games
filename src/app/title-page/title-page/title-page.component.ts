import { Component, OnInit } from '@angular/core';
import * as PIXI from 'pixi.js'


@Component({
  selector: 'app-title-page',
  templateUrl: './title-page.component.html',
  styleUrls: ['./title-page.component.scss']
})
export class TitlePageComponent implements OnInit {

  private app: PIXI.Application = new PIXI.Application({
    width: 500,
    height: 500,
    antialias: true
  });

  constructor() { }

  ngOnInit(): void {

    this.app.renderer.resize(window.innerWidth, window.innerHeight);
    this.app.renderer.backgroundColor = 0x040A42;
    this.app.renderer.view.style.position = 'absolute';


    document.body.appendChild(this.app.view);
  }

}
