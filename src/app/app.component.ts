import { Component, OnInit, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit, OnDestroy {
  title = 'concepts';
  bodyTitle = 'BODY';

  private timer: any;

  ngOnInit(): void {
    this.timer = setTimeout(() => {
      this.bodyTitle = 'NEW BODY';
    }, 2000);
  }

  ngOnDestroy(): void {
    clearTimeout(this.timer);
  }
}
