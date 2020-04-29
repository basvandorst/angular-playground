import {
  Component,
  OnInit,
  OnChanges,
  DoCheck,
  AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked,
  SimpleChanges,
  Input,
  ViewChild,
  ContentChild,
  ElementRef,
  ViewEncapsulation
} from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
  encapsulation: ViewEncapsulation.Emulated
})
export class ServerElementComponent implements OnInit, OnChanges,DoCheck, AfterContentInit,
  AfterContentChecked,
  AfterViewInit,
  AfterViewChecked {

  @Input('srvElement') element: { type: string, name: string, content: string };
  @Input() name : String;
  @ViewChild('header', {static:true}) header : ElementRef;
  @ContentChild('contentParagraph', {static:true}) contentParagraph : ElementRef;

  constructor() {
    console.log('constructoor');
  }

  ngOnChanges(changes: SimpleChanges): void {
    console.log('change')
    console.log(changes);
  }
  ngOnInit(): void {
    console.log('ngOnInit called')
    console.log('text content:' + this.header.nativeElement.textContent)
    console.log('content of paragraph:' + this.contentParagraph.nativeElement.textContent);
  }

  ngDoCheck() {
    console.log('ngDoCheck called');
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit called');
    console.log('content of paragraph:' + this.contentParagraph.nativeElement.textContent);
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked called');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit called');
    console.log('text content:' + this.header.nativeElement.textContent)
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked called');
  }
}
