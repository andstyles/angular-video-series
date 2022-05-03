import { Component, OnDestroy, OnInit } from '@angular/core';

@Component({
  selector: 'app-hello-world',
  templateUrl: './hello-world.component.html',
  styleUrls: ['./hello-world.component.scss']
})
export class HelloWorldComponent implements OnInit, OnDestroy {

  constructor() { }

  intervalSub: any;

  ngOnInit(): void {
    /*this.intervalSub = setInterval(function () {
      console.log('Hello from ngOnInit1');
    }, 1000);*/

    /*this.intervalSub = setInterval(() => {
      console.log('Hello from ngOnInit2');
    }, 1000);*/
  }

  ngOnDestroy(): void {
    if (this.intervalSub) {
      clearInterval(this.intervalSub);
    }
  }

  getMin(a: number, b: number): number {
    if (a < b) {
      return a;
    }
    return b;
  }

}
