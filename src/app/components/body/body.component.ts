import {
  AfterContentChecked,
  AfterContentInit,
  AfterViewChecked,
  AfterViewInit,
  Component,
  DoCheck,
  Input,
  OnChanges,
  OnDestroy,
  OnInit,
  SimpleChange,
  SimpleChanges,
} from '@angular/core';

@Component({
  selector: 'app-body',
  templateUrl: './body.component.html',
  styleUrls: ['./body.component.scss'],
})
export class BodyComponent
  implements
    OnChanges,
    OnInit,
    DoCheck,
    AfterContentInit,
    AfterContentChecked,
    AfterViewInit,
    AfterViewChecked,
    OnDestroy
{
  @Input() title: string;

  constructor() {
    this.title = '';
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('ngOnChanges ==> ', changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit ==> ');
  }
  ngDoCheck(): void {
    console.log('ngDoCheck ==> ');
  }
  ngAfterContentInit(): void {
    console.log('ngAfterContentInit ==> ');
  }
  ngAfterContentChecked(): void {
    console.log('ngAfterContentChecked ==> ');
  }
  ngAfterViewInit(): void {
    console.log('ngAfterViewInit ==> ');
  }
  ngAfterViewChecked(): void {
    console.log('ngAfterViewChecked ==> ');
  }
  ngOnDestroy(): void {
    console.log('ngOnDestroy ==> ');
  }
}
