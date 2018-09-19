import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-right-button',
  templateUrl: './right-button.component.html',
  styleUrls: ['./right-button.component.scss']
})
export class RightButtonComponent implements OnInit {

  @Input() hrefLink: string;
  @Input() linkText = 'Take a look';
  constructor() { }

  ngOnInit() {
  }

}
