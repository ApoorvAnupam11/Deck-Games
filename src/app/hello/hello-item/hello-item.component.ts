import { AfterViewInit, Component, ElementRef, NgZone } from '@angular/core';




@Component({
  selector: 'app-hello-item',
  templateUrl: './hello-item.component.html',
  styleUrls: ['./hello-item.component.scss']
})
export class HelloItemComponent {

  // public boxSize: number = 3;
  // constructor(public elRef: ElementRef, private zone: NgZone) {
  //   // The application will create a canvas element for you that you
  //   // can then insert into the DOM.
  //   console.log(PIXI.VERSION);
  // }

  // public ngAfterViewInit(): void {
  //   this.zone.runOutsideAngular(
  //     (): void => {
  //       const app: Application = new Application({
  //         //view: this.myCanvas.nativeElement,
  //       });
  //       this.elRef.nativeElement.appendChild(app.view);
  //       console.log('Plugins', app.renderer.plugins);
  //       app.render();
  //     }
  //   );

}

